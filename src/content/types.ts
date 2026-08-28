/** 中英双语字段。中文是内容的原始语言，英文缺失时回落到中文。 */
export interface Localized {
  zh: string
  en: string
}

/**
 * 讲义状态。用形状而非颜色区分（见 GLYPH），
 * 所以整页在单色下也读得出来。
 */
export type NoteStatus = 'complete' | 'in-progress' | 'rewriting'

export interface Note {
  id: string
  title: Localized
  summary: Localized
  status: NoteStatus
  /** public/ 下的绝对路径，如 '/notes/cftnote.pdf' */
  file: string
  /** ISO 日期，最后更新 */
  updated: string
}

export interface Paper {
  id: string
  /** 不本地化：物理论文本来就只有英文标题 */
  title: string
  authors: string[]
  venue?: string
  year: number
  arxiv?: string
  doi?: string
  note?: Localized
}

export type LinkKind = 'zhihu' | 'bilibili' | 'email' | 'arxiv' | 'github'

export interface ExternalLink {
  label: string
  href: string
  kind: LinkKind
}

export interface Profile {
  name: string
  affiliation: Localized
  /** 简介段落 */
  bio: Localized[]
  interests: Localized[]
  links: ExternalLink[]
}
