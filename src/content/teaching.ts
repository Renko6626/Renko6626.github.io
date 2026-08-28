import type { Handout, TeachingContact } from './types'

/**
 * 高中物理竞赛讲义。PDF 放 public/teaching/。
 *
 * 加一份就往数组里加一个对象；`pnpm test` 会检查 file 指向的文件真实存在。
 * 数组为空时导航的「教学」项自动置灰、页面显示空态，不需要改组件。
 *
 * 例：
 * {
 *   id: 'mechanics-pre',
 *   title: '力学：预赛专题',
 *   summary: '以刚体和碰撞为主，后面配了三十道分层练习。',
 *   topic: '力学 · 预赛',
 *   file: '/teaching/mechanics-pre.pdf',
 *   updated: '2026-08-28',
 * }
 */
export const handouts: Handout[] = [
  {
    id: 'mhd',
    title: '磁流体',
    summary:
      '从导电流体的运动 Ohm 定律推到磁感应方程，再看磁 Reynolds 数的两个极限。Hartmann 流、磁冻结、磁压张力、Z 箍缩、Alfvén 波、磁重联都在里面。',
    topic: '电磁学 · 磁流体',
    file: '/teaching/磁流体-20260828.pdf',
    updated: '2026-08-28',
  },
  {
    id: 'polarization',
    title: '偏振态与偏振矩阵',
    summary:
      '用 Jones 矢量和偏振矩阵写光的偏振态：偏振椭圆，线偏振片和相位延迟器这类元件，Stokes 参量，Mueller 矩阵。带习题。',
    topic: '光学 · 偏振',
    file: '/teaching/偏振态与偏振矩阵-20260827.pdf',
    updated: '2026-08-27',
  },
  {
    id: 'ray-optics',
    title: '光线方程与光力类比',
    summary:
      '从费马原理推出光线方程，然后把光线轨迹和质点运动对照着看。例子用的是蜃景、球对称介质和 GRIN 光纤。带习题。',
    topic: '光学 · 几何光学',
    file: '/teaching/光线方程与光力类比-20260827.pdf',
    updated: '2026-08-27',
  },
  {
    id: 'multibeam-interference',
    title: '多光束干涉与多层膜',
    summary:
      '总振幅法处理多光束干涉，推出 Airy 公式和透射峰。多层膜那部分换成传输矩阵，算增透膜、高反射膜堆和布拉格反射。',
    topic: '光学 · 薄膜与干涉',
    file: '/teaching/多光束干涉与多层膜-20260825.pdf',
    updated: '2026-08-25',
  },
  {
    id: 'massive-rope',
    title: '有质量绳的运动方程',
    summary:
      '推不可伸长绳的运动方程和张力方程。静止的绳看张力分布、接触力和脱离判据；张紧的直绳上再看横波，包括波速变化的情况。',
    topic: '力学 · 波与绳',
    file: '/teaching/有质量绳的运动方程-20260825.pdf',
    updated: '2026-08-25',
  },
]

export const teachingContact: TeachingContact = {
  note: {
    // 这句话不能依赖 handouts 或 channels 是否为空 —— 两边都可能空，它得单独读得通
    zh: '两类课都带，也接新学生。',
    en: 'I teach both tracks and take new students.',
  },
  channels: [
    { label: { zh: '微信', en: 'WeChat' }, value: 'Renko7297' },
    { label: { zh: 'QQ', en: 'QQ' }, value: '1471850534' },
  ],
}
