import { createI18n } from 'vue-i18n'
import zh from './zh'
import en from './en'

export const LOCALES = ['zh', 'en'] as const
export type Locale = (typeof LOCALES)[number]

const STORAGE_KEY = 'renko-locale'

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value)
}

/** 读取上次选择；隐私模式或禁用站点数据时 localStorage 会抛，不能让它带崩页面。 */
function storedLocale(): Locale | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return isLocale(saved) ? saved : null
  } catch {
    return null
  }
}

export function persistLocale(locale: Locale): void {
  try {
    localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    // 存不下就算了，本次会话内切换仍然有效
  }
}

export function detectLocale(): Locale {
  const saved = storedLocale()
  if (saved) return saved
  const nav = typeof navigator === 'undefined' ? '' : navigator.language
  return nav.toLowerCase().startsWith('zh') ? 'zh' : 'en'
}

export const i18n = createI18n({
  legacy: false,
  locale: detectLocale(),
  fallbackLocale: 'zh',
  messages: { zh, en },
})
