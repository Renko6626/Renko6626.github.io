import { describe, expect, it } from 'vitest'
import { pick } from '../src/composables/useLocalized'

describe('pick', () => {
  const value = { zh: '共形场论', en: 'Conformal field theory' }

  it('按语言取对应分支', () => {
    expect(pick(value, 'zh')).toBe('共形场论')
    expect(pick(value, 'en')).toBe('Conformal field theory')
  })

  it('目标语言为空串时回落到中文', () => {
    expect(pick({ zh: '共形场论', en: '' }, 'en')).toBe('共形场论')
  })

  it('目标语言只有空白时也回落 —— 空白不算翻译', () => {
    expect(pick({ zh: '共形场论', en: '   \n ' }, 'en')).toBe('共形场论')
  })

  it('中文本身不会被回落逻辑吃掉', () => {
    expect(pick({ zh: '共形场论', en: 'CFT' }, 'zh')).toBe('共形场论')
  })

  it('字段整个缺失时不抛，返回中文', () => {
    const partial = { zh: '共形场论' } as unknown as typeof value
    expect(pick(partial, 'en')).toBe('共形场论')
  })
})
