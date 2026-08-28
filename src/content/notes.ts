import type { Note } from './types'

export const notes: Note[] = [
  {
    id: 'cft',
    title: {
      zh: '高维共形场论',
      en: 'Conformal Field Theory in Higher Dimensions',
    },
    summary: {
      zh: '主要参考 David Simmons-Duffin 的讲义和文章，他大概是现存的共形场论大王。也掺了些我自己研究时用到的技术。还没写完，会接着更新。',
      en: "Mostly follows David Simmons-Duffin's lectures and papers; he is probably the reigning king of CFT. Some techniques from my own work are folded in. Still unfinished, still growing.",
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
      zh: '2023 年秋季学期在量子场论讨论班上讲过，2024 年暑假整理成了讲义。当时图省事，没用 LaTeX，直接拿 Markdown 写的，排版因此有点糙。打算重写一遍，把下半部分补完。',
      en: 'This started as a talk in the autumn 2023 QFT seminar and got written up over the summer of 2024. I took the lazy route and used Markdown instead of LaTeX, so the typesetting is rough. A rewrite and the second half are on the list.',
    },
    status: 'rewriting',
    file: '/notes/hawkingnote.pdf',
    updated: '2024-10-18',
  },
]
