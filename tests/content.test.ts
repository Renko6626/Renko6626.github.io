/**
 * 内容完整性。守两件事：
 *   1. 双语承诺 —— 每个 Localized 的中英都得有，漏翻译在这里挂，不是上线后才发现
 *   2. 下载链接 —— 旧站首页的霍金辐射下载指向不存在的 hawking.pdf，一直是 404。
 *      这条测试就是为了那个坑。
 */
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

import { profile } from '../src/content/profile'
import { notes } from '../src/content/notes'
import { papers } from '../src/content/papers'
import type { Localized } from '../src/content/types'

const PUBLIC = resolve(import.meta.dirname, '../public')

/** 把数据里所有 Localized 连同它的来源路径摊平，便于逐个断言。 */
function localizedFields(): Array<[string, Localized]> {
  const out: Array<[string, Localized]> = [
    ['profile.affiliation', profile.affiliation],
  ]
  profile.bio.forEach((v, i) => out.push([`profile.bio[${i}]`, v]))
  profile.interests.forEach((v, i) => out.push([`profile.interests[${i}]`, v]))
  for (const note of notes) {
    out.push([`notes[${note.id}].title`, note.title])
    out.push([`notes[${note.id}].summary`, note.summary])
  }
  for (const paper of papers) {
    if (paper.note) out.push([`papers[${paper.id}].note`, paper.note])
  }
  return out
}

describe('双语完整性', () => {
  it.each(localizedFields())('%s 中英都非空', (_path, value) => {
    expect(value.zh?.trim()).toBeTruthy()
    expect(value.en?.trim()).toBeTruthy()
  })
})

describe('讲义', () => {
  it.each(notes.map((n) => [n.id, n.file] as const))(
    '%s 的 PDF 在 public/ 下真实存在',
    (_id, file) => {
      expect(file.startsWith('/')).toBe(true)
      expect(existsSync(resolve(PUBLIC, file.slice(1)))).toBe(true)
    },
  )

  it('更新日期是合法 ISO 日期', () => {
    for (const note of notes) {
      expect(note.updated).toMatch(/^\d{4}-\d{2}-\d{2}$/)
      expect(Number.isNaN(Date.parse(note.updated))).toBe(false)
    }
  })
})

describe('id 唯一', () => {
  it('讲义 id 不重复', () => {
    expect(new Set(notes.map((n) => n.id)).size).toBe(notes.length)
  })

  it('论文 id 不重复', () => {
    expect(new Set(papers.map((p) => p.id)).size).toBe(papers.length)
  })
})

describe('外链', () => {
  it('全部是 https 绝对地址', () => {
    for (const link of profile.links) {
      expect(link.href).toMatch(/^https:\/\//)
    }
  })

  it('kind 不重复 —— 每种去处只留一个入口', () => {
    const kinds = profile.links.map((l) => l.kind)
    expect(new Set(kinds).size).toBe(kinds.length)
  })
})
