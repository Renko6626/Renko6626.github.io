import type { Profile } from './types'

export const profile: Profile = {
  name: 'Renko_1055',
  affiliation: {
    zh: '北京大学 · 2023 级本科生',
    en: 'Peking University · Undergraduate, class of 2023',
  },
  bio: [
    {
      zh: '目前在某课题组做全息复杂度。更长期的兴趣在量子场论里费曼图之外的那些结构，用共形场论和散射振幅的技术去挖。弦论和相关的数学物理最近在学。',
      en: 'I work in a group on holographic complexity. My longer-running interest is the structure of quantum field theory beyond Feynman diagrams, which I mostly go at with conformal field theory and scattering amplitudes. String theory and the mathematical physics around it are what I am reading now.',
    },
  ],
  teaching: {
    zh: '本科生普通物理辅导和高中物理竞赛，我带了很多年。',
    en: 'I have been tutoring undergraduate general physics and coaching for the high-school physics olympiad for years.',
  },
  interests: [
    { zh: '全息复杂度', en: 'Holographic complexity' },
    { zh: '共形场论', en: 'Conformal field theory' },
    { zh: '散射振幅', en: 'Scattering amplitudes' },
    { zh: '弦论与数学物理', en: 'String theory & mathematical physics' },
  ],
  links: [
    {
      label: '知乎',
      href: 'https://www.zhihu.com/people/Renko-hbar',
      kind: 'zhihu',
    },
  ],
}
