import type { Profile } from './types'

export const profile: Profile = {
  name: 'Renko_1055',
  affiliation: {
    zh: '北京大学 · 2023 级本科生',
    en: 'Peking University · Undergraduate, class of 2023',
  },
  bio: [
    {
      zh: '在某课题组研究共形场论与量子色动力学。主要兴趣是挖掘量子场论内部那些费曼图之外的更丰富的结构，并通过共形场论、散射振幅等方向的技术来研究它们。近期在学弦论和相关的数学物理。',
      en: 'I work in a group on conformal field theory and quantum chromodynamics. My main interest is the structure of quantum field theory beyond Feynman diagrams, approached through conformal field theory and scattering amplitudes. I am currently learning string theory and the mathematical physics around it.',
    },
    {
      zh: '同时是一名二次元爱好者，在 B 站作为虚拟主播做一些理论物理的科普，通过东方 Project 同人社团「秘封步梦华」活动。学业和科研都很忙，更新随缘。',
      en: 'I also make theoretical-physics explainers on Bilibili as a VTuber, through the Touhou Project doujin circle Mifuu Bumuka. Coursework and research come first, so uploads are irregular.',
    },
  ],
  interests: [
    { zh: '共形场论', en: 'Conformal field theory' },
    { zh: '量子色动力学', en: 'Quantum chromodynamics' },
    { zh: '散射振幅', en: 'Scattering amplitudes' },
    { zh: '弦论与数学物理', en: 'String theory & mathematical physics' },
  ],
  links: [
    {
      label: '知乎',
      href: 'https://www.zhihu.com/people/Renko-hbar',
      kind: 'zhihu',
    },
    {
      label: 'Bilibili',
      href: 'https://space.bilibili.com/3546559958485775',
      kind: 'bilibili',
    },
  ],
}
