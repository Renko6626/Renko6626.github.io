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
 *   summary: '刚体与碰撞为主，附三十道分层练习。',
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
      '建立导电流体的运动 Ohm 定律与磁感应方程，分析磁 Reynolds 数的两个极限，涵盖 Hartmann 流、磁冻结、磁压张力、Z 箍缩、Alfvén 波和磁重联等现象。',
    topic: '电磁学 · 磁流体',
    file: '/teaching/磁流体-20260828.pdf',
    updated: '2026-08-28',
  },
  {
    id: 'polarization',
    title: '偏振态与偏振矩阵',
    summary:
      '用 Jones 矢量和偏振矩阵描述光的偏振态，涵盖偏振椭圆、偏振元件（线偏振片、相位延迟器等）、Stokes 参量与 Mueller 矩阵，附习题。',
    topic: '光学 · 偏振',
    file: '/teaching/偏振态与偏振矩阵-20260827.pdf',
    updated: '2026-08-27',
  },
  {
    id: 'ray-optics',
    title: '光线方程与光力类比',
    summary:
      '由费马原理推导光线方程，建立光线轨迹与质点运动的类比，应用于蜃景、球对称介质和 GRIN 光纤等实际光学系统，附习题。',
    topic: '光学 · 几何光学',
    file: '/teaching/光线方程与光力类比-20260827.pdf',
    updated: '2026-08-27',
  },
  {
    id: 'multibeam-interference',
    title: '多光束干涉与多层膜',
    summary:
      '用总振幅法处理多光束干涉，推导 Airy 公式与透射峰，再以传输矩阵方法分析多层膜的增透膜、高反射膜堆和布拉格反射。',
    topic: '光学 · 薄膜与干涉',
    file: '/teaching/多光束干涉与多层膜-20260825.pdf',
    updated: '2026-08-25',
  },
  {
    id: 'massive-rope',
    title: '有质量绳的运动方程',
    summary:
      '推导不可伸长绳的运动方程与张力方程，分析静止绳的张力分布、接触力与脱离判据，讨论张紧直绳上的横波传播与变波速现象。',
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
