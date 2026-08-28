import { useI18n } from 'vue-i18n'
import type { Locale } from '@/i18n'
import type { Localized } from '@/content/types'

/**
 * 取 Localized 的对应语言分支。
 *
 * 目标语言为空（空串或纯空白）时回落到中文 —— 中文是内容的原始语言，
 * 宁可显示中文也不能渲染空白。纯函数，单独可测。
 */
export function pick(value: Localized, locale: Locale): string {
  const target = value?.[locale]
  if (typeof target === 'string' && target.trim() !== '') return target
  return value?.zh ?? ''
}

/** 组件里用：const l = useLocalized(); l(note.title) */
export function useLocalized() {
  const { locale } = useI18n()
  return (value: Localized): string => pick(value, locale.value as Locale)
}
