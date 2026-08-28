import type { Note } from './types'

export const notes: Note[] = [
  {
    id: 'cft',
    title: {
      zh: '高维共形场论',
      en: 'Conformal Field Theory in Higher Dimensions',
    },
    summary: {
      zh: '主要参考 David Simmons-Duffin 的讲义与文章，并加入了一些我自己在研究中用到的技术。还没写完，会逐渐更新。',
      en: 'Largely following David Simmons-Duffin’s lectures and papers, with some techniques I picked up in my own work folded in. Still unfinished; updated as it goes.',
    },
    status: 'in-progress',
    file: '/notes/cftnote.pdf',
    updated: '2024-10-18',
  },
  {
    id: 'hawking',
    title: {
      zh: '弯曲时空量子场论与霍金辐射',
      en: 'QFT in Curved Spacetime and Hawking Radiation',
    },
    summary: {
      zh: '源自 2023 年秋季学期量子场论讨论班上讲的内容，2024 年暑期整理成讲义。当时图方便用 Markdown 而非 LaTeX 写的，排版较差；计划重写一遍并补完下半部分。',
      en: 'Grown out of a talk I gave in the autumn 2023 QFT seminar and written up in the summer of 2024. I took the shortcut of writing it in Markdown rather than LaTeX, so the typesetting is poor; a rewrite and the second half are planned.',
    },
    status: 'rewriting',
    file: '/notes/hawkingnote.pdf',
    updated: '2024-10-18',
  },
]
