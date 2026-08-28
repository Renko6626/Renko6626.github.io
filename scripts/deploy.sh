#!/usr/bin/env bash
# 把构建产物发布到 gh-pages 分支。
#
# 源码留在 main，产物留在 gh-pages，两边互不污染。用 git worktree 而不是
# gh-pages 这个 npm 包：少一个依赖，出问题能自己读懂每一步在干什么。
#
# 跑法：pnpm run deploy
#   注意是 `pnpm run deploy` 而不是 `pnpm deploy` —— 后者是 pnpm 自己的内置命令。
set -euo pipefail

BRANCH=gh-pages
WORKTREE=.gh-pages-worktree
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

if [ -n "$(git status --porcelain)" ]; then
  echo "工作区不干净，先提交或 stash 再发布。" >&2
  git status --short >&2
  exit 1
fi

echo "==> 检查与构建"
pnpm run typecheck
pnpm run test
pnpm run build

SHA="$(git rev-parse --short HEAD)"

cleanup() {
  git worktree remove --force "$WORKTREE" 2>/dev/null || true
}
trap cleanup EXIT

echo "==> 准备 $BRANCH worktree"
cleanup
if git show-ref --verify --quiet "refs/heads/$BRANCH"; then
  git worktree add "$WORKTREE" "$BRANCH"
elif git ls-remote --exit-code --heads origin "$BRANCH" >/dev/null 2>&1; then
  git fetch origin "$BRANCH"
  git worktree add "$WORKTREE" -b "$BRANCH" "origin/$BRANCH"
else
  echo "    $BRANCH 尚不存在，新建孤儿分支"
  git worktree add --detach "$WORKTREE"
  git -C "$WORKTREE" checkout --orphan "$BRANCH"
  git -C "$WORKTREE" rm -rf . >/dev/null 2>&1 || true
fi

echo "==> 替换产物"
# 清空除 .git 外的一切，避免上一次构建的孤儿文件残留
find "$WORKTREE" -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
cp -r dist/. "$WORKTREE"/

git -C "$WORKTREE" add -A
if git -C "$WORKTREE" diff --cached --quiet; then
  echo "==> 产物无变化，不提交"
else
  git -C "$WORKTREE" commit -q -m "build: 从 main@${SHA} 发布"
  git -C "$WORKTREE" push origin "$BRANCH"
  echo "==> 已推送 $BRANCH"
fi

echo "完成。若这是首次发布，去仓库 Settings → Pages 把 source 改成 $BRANCH / (root)。"
