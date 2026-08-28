import type { GlobalThemeOverrides } from 'naive-ui'

/**
 * naive-ui 的默认长相是圆角、柔和、消费级的，与本站的冷硬取向直接对冲。
 * 这里把它压回 token 定义的形状与色板：圆角归零、去阴影、灰阶统一。
 *
 * 取值必须与 src/theme/tokens.css 保持一致。naive-ui 的主题系统不接受
 * `var(--x)` 形式的颜色（它要做颜色运算），所以这里写字面量，
 * 用下面的 TOKEN 常量集中管理，避免散落在各处。
 */
const TOKEN = {
  bg: '#000000',
  raise: '#0c0c0d',
  hairline: '#2a2a2c',
  line: '#45454a',
  mute: '#8a8a90',
  text: '#eceef2',
} as const

const FONT_BODY =
  "'IBM Plex Sans', 'IBM Plex Sans SC', system-ui, sans-serif"
const FONT_MONO = "'IBM Plex Mono', ui-monospace, monospace"

export const naiveOverrides: GlobalThemeOverrides = {
  common: {
    baseColor: TOKEN.bg,
    bodyColor: TOKEN.bg,
    cardColor: TOKEN.bg,
    modalColor: TOKEN.raise,
    popoverColor: TOKEN.raise,
    textColorBase: TOKEN.text,
    textColor1: TOKEN.text,
    textColor2: TOKEN.text,
    textColor3: TOKEN.mute,
    borderColor: TOKEN.hairline,
    dividerColor: TOKEN.hairline,
    // 一律直角。这是本设计语言里不可协商的一条。
    borderRadius: '0px',
    borderRadiusSmall: '0px',
    fontFamily: FONT_BODY,
    fontFamilyMono: FONT_MONO,
    fontSize: '1rem',
    // 主色不用红 —— accent 只留给图中那一个点。
    // 交互态靠亮度与边框区分，不靠彩色。
    primaryColor: TOKEN.text,
    primaryColorHover: '#ffffff',
    primaryColorPressed: TOKEN.mute,
    primaryColorSuppl: TOKEN.text,
    boxShadow1: 'none',
    boxShadow2: 'none',
    boxShadow3: 'none',
  },
  Button: {
    borderRadiusTiny: '0px',
    borderRadiusSmall: '0px',
    borderRadiusMedium: '0px',
    borderRadiusLarge: '0px',
    color: 'transparent',
    textColor: TOKEN.text,
    border: `1px solid ${TOKEN.line}`,
    borderHover: `1px solid ${TOKEN.text}`,
    borderPressed: `1px solid ${TOKEN.text}`,
    borderFocus: `1px solid ${TOKEN.text}`,
    textColorHover: TOKEN.text,
    textColorPressed: TOKEN.mute,
    textColorFocus: TOKEN.text,
    colorHover: TOKEN.raise,
    colorPressed: TOKEN.bg,
    colorFocus: TOKEN.bg,
    fontWeight: '500',
    paddingMedium: '0 20px',
    heightMedium: '40px',
  },
  Tag: {
    borderRadius: '0px',
    color: 'transparent',
    border: `1px solid ${TOKEN.hairline}`,
    textColor: TOKEN.mute,
    fontFamily: FONT_MONO,
    heightSmall: '24px',
  },
}
