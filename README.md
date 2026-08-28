# Renko6626.github.io

个人主页。Vue 3 + naive-ui + UnoCSS，中英双语，静态站。
设计与决策记录见 [`docs/superpowers/specs/2026-08-28-personal-site-rebuild-design.md`](docs/superpowers/specs/2026-08-28-personal-site-rebuild-design.md)。

```bash
pnpm install
pnpm dev              # 开发
pnpm test             # 内容完整性 + 本地化回落
pnpm build            # 类型检查 → 构建 → 生成 404.html 兜底
pnpm run deploy       # 检查、构建，把 dist/ 推到 gh-pages 分支
```

`pnpm run deploy` 的 `run` 不能省 —— `pnpm deploy` 是 pnpm 自己的内置命令。

## 改内容

内容的真源在 `src/content/`，不在组件里。

- `profile.ts` 简介、研究兴趣、外链
- `notes.ts` 讲义条目（PDF 放 `public/notes/`）
- `papers.ts` 预印本
- `teaching.ts` 高中物理竞赛讲义（PDF 放 `public/teaching/`）与教学板块的联系方式

`papers.ts` / `teaching.ts` 为空数组时，导航里对应的项自动置灰、页面显示空态；
加进第一条后自动恢复，不用改组件。

学术讲义（`notes.ts`）双语，竞赛讲义（`teaching.ts`）不双语 —— 和 `Paper.title`
同一条理由：内容的语言是内在的，物理论文只有英文名，面向国内高中生的材料只有中文。

`pnpm test` 会检查每个双语字段中英都填了、每个讲义的 PDF 真实存在。

## 改中文文案之后

字体是按源码里实际出现的汉字 subset 的。加了新字要重跑：

```bash
pnpm fonts            # 重新 subset IBM Plex，更新 src/theme/fonts.css
```

首屏那张径向量子化图由 `scripts/make-figure.py` 计算生成，改参数后跑 `pnpm figure`。

## 一次性设置

首次发布后去仓库 Settings → Pages，把 source 改成 `gh-pages` 分支 / `(root)`。

旧版（2024 年手写的静态 HTML）存档在 `legacy/`，可渲染的完整快照见 tag `v0-legacy`。
