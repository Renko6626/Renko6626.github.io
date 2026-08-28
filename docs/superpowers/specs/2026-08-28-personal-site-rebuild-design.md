# 个人主页重建设计

- 日期：2026-08-28
- 仓库：`Renko6626.github.io`（GitHub Pages user site）
- 状态：设计已确认，待转实施计划

## 背景

现有主页是 2024 年手写的 4 个静态 HTML 页面 + 2 份 PDF，共 1.9 MB，无构建、无依赖。
四个页面各自复制粘贴了同一份 CSS 与导航栏，并遗留两处死链
（首页下载指向不存在的 `hawking.pdf`；导航「联系」指向不存在的锚点 `#projects`）。

旧站已于本次重建前存档：tag `v0-legacy` 保存可正常渲染的完整快照，
`legacy/` 目录保留 4 个 HTML 原文与一份内容清单 `legacy/README.md`。

## 目标

用 Vue 3 + naive-ui + UnoCSS 重建，套用 monolith 视觉风格，中英双语，
产出一个结构清晰、加分板块可增量添加的个人学术主页。

## 非目标

- 不做视频 / 虚拟主播板块。旧站 `video.html` 不迁移；B 站身份在首页简介中保留一句话
  与一个外链，不单独成页。
- 不做博客、评论、搜索、分析统计。
- 不做讲义正文的网页化。讲义继续以 PDF 形式提供**下载**，不做 iframe 内嵌
  （旧站的内嵌方案在移动端体验很差）。
- 不使用自定义域名。用户有域名但选择不启用，站点走 `renko6626.github.io`，
  因此**不生成 `public/CNAME`**。

## 技术选型

| 层 | 选择 | 理由 |
| --- | --- | --- |
| 框架 | Vue 3 + `<script setup>` + TypeScript | 用户最熟悉 |
| 组件库 | naive-ui | 用户最熟悉；**仅用于结构性组件**，见「样式层」 |
| 原子 CSS | UnoCSS | 用户最熟悉；承担全部视觉表达 |
| 视觉风格 | monolith skill | 冷、硬、克制；实施阶段调用该 skill 取具体规范 |
| 构建 | Vite | Vue 默认 |
| 路由 | vue-router，**history 模式** | 见「路由与 404 兜底」 |
| i18n | vue-i18n | 仅承载 UI chrome 文案 |
| 包管理 | pnpm 10 | 环境已有（Node 22.22 / pnpm 10.33） |
| 测试 | Vitest | 见「测试策略」 |

## 内容架构（方案 A：类型化数据文件）

内容的真源是 `src/content/` 下的类型化 TS 数据文件，页面组件是薄渲染层。
vue-i18n **不**承载内容，只承载导航标签、按钮文字这类 chrome 字符串。

被否决的两个替代方案：把列表数据塞进 vue-i18n locale 文件（无类型、两个 locale
结构容易漂移）；Markdown 驱动（当前没有长文，多一套插件与 frontmatter 约定）。
将来若把讲义正文搬上网页，届时数据文件正好充当 Markdown 的索引，不会白写。

### 类型定义（`src/content/types.ts`）

```ts
export interface Localized { zh: string; en: string }

export type NoteStatus = 'in-progress' | 'complete' | 'rewriting'

export interface Note {
  id: string
  title: Localized
  summary: Localized
  status: NoteStatus
  file: string        // public/ 下的绝对路径，如 '/notes/cftnote.pdf'
  updated: string     // ISO 日期
}

export interface Paper {
  id: string
  title: string       // 不本地化：物理论文只有英文名
  authors: string[]
  venue?: string
  year: number
  arxiv?: string
  doi?: string
  note?: Localized    // 中英文补充说明，可选
}

export type LinkKind = 'zhihu' | 'bilibili' | 'email' | 'arxiv' | 'github'
export interface ExternalLink { label: string; href: string; kind: LinkKind }

export interface Profile {
  name: Localized
  affiliation: Localized
  bio: Localized[]          // 段落数组
  interests: Localized[]
  links: ExternalLink[]
}
```

### 数据文件

- `profile.ts` — 内容迁自旧站 `index.html`，见 `legacy/README.md`：
  北京大学 2023 级本科生；研究共形场论与量子色动力学，兴趣在费曼图之外的量子场论结构，
  用 CFT / 散射振幅等技术切入；在学弦论与相关数学物理。B 站虚拟主播身份保留一句话。
  外链：知乎 `https://www.zhihu.com/people/Renko-hbar`、
  B 站 `https://space.bilibili.com/3546559958485775`。
- `notes.ts` — 两条：
  - 高维共形场论（`in-progress`，参考 DSD 的讲义与文章，掺入自己研究中用到的技术）
  - 弯曲时空量子场论与霍金辐射（`rewriting`，源自 2023 秋 QFT 讨论班，2024 暑期整理；
    当时用 Markdown 而非 LaTeX，排版较差，计划重写并补完下半部分）
- `papers.ts` — **空数组**。见「Research 空态」。

## 站点结构

三个板块，导航三项：

| 路由 | 页面 | 内容 |
| --- | --- | --- |
| `/` | `HomePage.vue` | 姓名 / 单位 / 简介段落 / 研究兴趣 / 外链 |
| `/notes` | `NotesPage.vue` | 讲义条目列表：标题、简介、状态、更新日期、下载 |
| `/research` | `ResearchPage.vue` | preprint / 论文列表；**当前为空态** |

### Research 空态

`papers.ts` 为空数组时：

- 导航中 `/research` 一项渲染为 muted 色（monolith 的次级前景色），视觉上明显降级，
  但**仍可点击**——藏起来不如坦白。
- 页面正文渲染一句诚实的空态文案（中「暂无公开预印本」/ 英 "No preprints yet."），
  不做骨架屏、不做「敬请期待」这类填充。
- 一旦 `papers.ts` 有内容，导航项自动恢复正常色、页面自动渲染列表，
  **无需改动组件代码**。空态判断只看 `papers.length === 0`。

## 本地化

- `Localized` 字段按当前 locale 取支。`useLocalized()` 组合式函数返回取值函数
  `l(value: Localized): string`。
- **回落规则**：目标语言的字符串为空（空串或纯空白）时回落到 `zh`，
  而不是渲染空白。中文是内容的原始语言。
- locale 持久化到 `localStorage`（键 `renko-locale`）；首次访问读 `navigator.language`，
  以 `zh` 开头则中文，否则英文。localStorage 读写包在 try/catch 里
  （隐私模式 / 禁用站点数据时不应崩页）。
- 语言切换器放在站点头部，两个状态，不用下拉菜单。

## 样式层

**单一真源**：monolith 的色板、字阶、间距、圆角写成 `src/theme/tokens.css` 中的 CSS 变量。

- UnoCSS 的 `theme` 从这些变量扩展，于是 `bg-surface`、`text-muted` 等原子类可用。
- naive-ui 的 `themeOverrides`（`src/theme/naive-overrides.ts`）同样从这些变量生成，
  挂在根部的 `NConfigProvider` 上。
- 改一个 token，UnoCSS 与 naive-ui 同步变化，不会出现两套灰阶差半档。

**naive-ui 的边界**：只用结构性组件——`NConfigProvider`、布局、`NButton`、`NSwitch` 之类。
naive-ui 的默认长相（圆角、柔和、消费级）与 monolith（冷、硬、克制）直接对冲，
`themeOverrides` 需把圆角压到 0–2px、色板换成 monolith 中性灰阶、去掉阴影。
视觉表达一律由 UnoCSS 原子类自己写。判据：成品不该看得出是「一个 naive-ui 默认皮的站上贴了几块深色区」。

**资源自托管，不引任何 CDN。** 用户在国内，Google Fonts 不通，cdnjs 时好时坏
（旧站从 cdnjs 拉 Font Awesome，正是要避免重蹈的坑）。字体文件进 `public/fonts/` 并做 subset；
图标一律内联 SVG，不引图标库。

具体的字体选择、色值、字阶在实施阶段由 monolith skill 给出。

## 路由与 404 兜底

vue-router 使用 history 模式。GitHub Pages 没有 SPA fallback，直接访问或刷新 `/notes` 会返回 404。
解法：构建后把 `dist/index.html` 复制一份为 `dist/404.html`，Pages 用它兜底，SPA 再接管路由。
该复制作为 `build` 脚本的 postbuild 步骤，**不是**部署脚本的一部分——
这样 `pnpm build` 的产物本身就是完整可部署的。

## 部署

源码在 `main` 分支根目录；构建产物 `dist/` 推到 `gh-pages` 分支。
用户需在 GitHub 仓库设置里把 Pages source 改为 `gh-pages` 分支 / 根目录（一次性手动操作）。

不引入 `gh-pages` npm 包。`scripts/deploy.sh` 用 `git worktree` 实现：
把 `gh-pages` 分支挂到临时目录 → 清空（保留 `.git`）→ 拷入 `dist/` → 提交 → 推送 → 拆除 worktree。
透明、少一个依赖、出问题可读。经由 `pnpm deploy` 调用。

`public/.nojekyll` 随构建产物一同发布，避免 Jekyll 处理下划线开头的路径。

**部署前置**：`deploy.sh` 先跑 `vue-tsc --noEmit`、`vitest run`、`vite build`，任一失败即中止。

**PDF 迁移**：`cftnote.pdf`、`hawkingnote.pdf` 从仓库根目录 `git mv` 到 `public/notes/`。
文件名保持不变。`legacy/README.md` 中「PDF 文件本身不在本目录，见仓库根目录」一句需同步更新为新路径。

## 测试策略

三个静态页面，不做组件测试与 E2E（收益不抵维护成本）。Vitest 覆盖三件事：

1. **`useLocalized` 回落逻辑** — 目标语言为空串 / 纯空白 / 缺字段时回落到 `zh`；
   正常情况按 locale 取对应支。
2. **内容完整性** — 遍历 `src/content/` 下全部数据，断言：
   - 每个 `Localized` 的 `zh` 与 `en` 均非空；
   - 每条 `Note` 的 `file` 在 `public/` 下真实存在（用 `node:fs` 检查）；
   - `id` 在各自集合内唯一。
   这条守的是双语承诺，以及旧站踩过的下载链接 404。
3. **构建冒烟** — `vue-tsc --noEmit` 与 `vite build` 成功，作为 deploy 前置。

## 已知的一次性手动操作

1. 在 GitHub 仓库设置中把 Pages source 从 `main` / 根目录改为 `gh-pages` / 根目录。
   **在此之前不要 push `main`**——`main` 根目录已无 `index.html`，Pages 会立刻 404。
2. tag `v0-legacy` 需要显式 `git push origin v0-legacy` 才会上传。

## 未决 / 推迟

- **论文内容**：用户暂未提供。`papers.ts` 保持空数组，空态设计已就位，
  有第一篇 preprint 时只需往数组里加对象。
- **讲义正文网页化**：推迟。将来若把霍金辐射讲义从 PDF 搬成网页正文，
  届时再评估 Markdown 驱动（原方案 C），`notes.ts` 可平滑转为索引。
- **自定义域名**：用户有域名但本次不启用。将来启用只需加 `public/CNAME`。
