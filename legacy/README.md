# 旧站存档（2024 版）

2024 年手写的静态个人主页，2026-08 重建前存档于此。目录内的 4 个 HTML 保持原样，
未做任何修改；它们之间的相对链接（`../cftnote.pdf` 等）在移动后已失效，
**要看能正常渲染的完整旧站，checkout tag `v0-legacy`**。

| 文件 | 原路径 | 内容 |
| --- | --- | --- |
| `index.html` | `/index.html` | 首页：个人简介、知乎链接、讲义下载、B 站/虚拟主播介绍 |
| `CFTnote.html` | `/CFTnote.html` | 共形场论讲义页，iframe 内嵌 `cftnote.pdf` |
| `Hawkingnote.html` | `/Hawkingnote.html` | 霍金辐射讲义页，iframe 内嵌 `hawkingnote.pdf` |
| `video.html` | `/video.html` | 视频页，内嵌 B 站播放器 |

空文件 `index.txt` 已删除。

## 已知问题（旧站遗留，重建时不要复制）

- `index.html` 的霍金辐射下载链接指向 `hawking.pdf`，实际文件是 `hawkingnote.pdf` —— 该按钮一直是 404。
- 导航栏「联系」指向 `#projects`，页面里没有这个锚点 —— 死链。
- 四个页面各自复制粘贴了一份几乎相同的 CSS 和导航栏。

## 需要迁移到新站的内容

**身份**：北京大学 2023 级本科生；研究共形场论与量子色动力学，
兴趣在费曼图之外的量子场论结构，用 CFT / 散射振幅等技术切入；在学弦论与相关数学物理。
同时是 B 站虚拟主播，通过东方 Project 同人社团「秘封步梦华」活动，做理论物理科普，更新随缘。

**外链**
- 知乎 https://www.zhihu.com/people/Renko-hbar
- B 站 https://space.bilibili.com/3546559958485775

**讲义**（PDF 文件本身不在本目录，重建时已移入 `public/notes/`，文件名不变）
- `cftnote.pdf` — 高维共形场论。主要参考 DSD 的讲义与文章，掺入自己研究中用到的技术。**未完成，持续更新中。**
- `hawkingnote.pdf` — 弯曲时空量子场论与霍金辐射。源自 2023 年秋季学期量子场论讨论班的报告，
  2024 年暑期整理成讲义。当时用 Markdown 而非 LaTeX 撰写，排版较差，**计划重写并补完下半部分。**

**视频**
- 《弯曲时空量子场论与霍金辐射(1)》 BV1f4421Z7Pm
