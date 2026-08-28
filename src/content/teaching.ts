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
export const handouts: Handout[] = []

export const teachingContact: TeachingContact = {
  note: {
    // 这句话不能依赖下面有没有入口 —— channel 为 null 时也得读得通
    zh: '这些讲义来自我带高中物理竞赛的课。也接学生。',
    en: 'These handouts come from the physics-olympiad classes I teach. I also take students.',
  },
  channels: [
    { label: { zh: '微信', en: 'WeChat' }, value: 'Renko7297' },
    { label: { zh: 'QQ', en: 'QQ' }, value: '1471850534' },
  ],
}
