import type { Profile } from './types'

export const profile: Profile = {
  name: 'Renko_1055',
  affiliation: {
    zh: '北京大学 · 2023 级本科生',
    en: 'Peking University · Undergraduate, class of 2023',
  },
  bio: [
    {
      zh: '目前在某课题组研究全息复杂度。更长期的兴趣是挖掘量子场论内部那些费曼图之外的更丰富的结构，并通过共形场论、散射振幅等方向的技术来研究它们。近期在学弦论和相关的数学物理。',
      en: 'I currently work in a group on holographic complexity. My longer-running interest is the structure of quantum field theory beyond Feynman diagrams, approached through conformal field theory and scattering amplitudes. I am also learning string theory and the mathematical physics around it.',
    },
  ],
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
