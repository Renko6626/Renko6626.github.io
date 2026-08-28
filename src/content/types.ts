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

/**
 * 高中物理竞赛讲义。
 *
 * 标题与简介是纯字符串而非 Localized —— 和 Paper.title 同一条理由：
 * 内容的语言是内在的。物理论文只有英文名，面向国内高中生的竞赛材料只有中文，
 * 硬造一份译名既别扭也没人读。页面 chrome 仍然双语，英文态下会说明材料是中文的。
 */
export interface Handout {
  id: string
  title: string
  summary: string
  /** 自由文本标签，如「力学」「电磁学」「预赛冲刺」 */
  topic: string
  /** public/ 下的绝对路径，如 '/teaching/mechanics.pdf' */
  file: string
  /** ISO 日期，最后更新 */
  updated: string
}

/** 教学板块的联系方式。channel 为 null 时页面只显示说明、不显示入口。 */
export interface TeachingContact {
  note: Localized
  channel: { label: string; href: string } | null
}
