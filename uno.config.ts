import { defineConfig, presetWind3 } from 'unocss'

// 颜色与字体的真源是 src/theme/tokens.css 里的 CSS 变量。
// 这里只是把它们暴露成原子类，naive-ui 的 themeOverrides 读的是同一批变量。
export default defineConfig({
  presets: [presetWind3()],
  theme: {
    colors: {
      bg: 'var(--bg)',
      raise: 'var(--bg-raise)',
      hairline: 'var(--hairline)',
      line: 'var(--line)',
      mute: 'var(--text-mute)',
      fg: 'var(--text)',
      accent: 'var(--accent)',
    },
    fontFamily: {
      sans: 'var(--font-body)',
      mono: 'var(--font-mono)',
    },
    fontSize: {
      label: ['var(--step--1)', 'var(--leading-body)'],
      body: ['var(--step-0)', 'var(--leading-body)'],
      lg: ['var(--step-1)', '1.3'],
      xl: ['var(--step-2)', 'var(--leading-tight)'],
      display: ['var(--step-3)', 'var(--leading-tight)'],
    },
    spacing: {
      s1: 'var(--s-1)', s2: 'var(--s-2)', s3: 'var(--s-3)', s4: 'var(--s-4)',
      s5: 'var(--s-5)', s6: 'var(--s-6)', s7: 'var(--s-7)', s8: 'var(--s-8)',
    },
  },
  shortcuts: {
    // 全站唯一的横向留白规则：栅格外边距
    'page-x': 'px-s4 md:px-s6 lg:px-s7',
    // 大写字距标签，冷技术感的主要来源
    'eyebrow': 'font-mono text-label uppercase tracking-[var(--tracking-label)] text-mute',
    // border-* 只设宽度；没有 preflight 时 border-style 默认 none，线会隐形，
    // 所以这里显式给 solid。
    'hairline-t': 'border-t border-t-solid border-t-hairline',
    'hairline-b': 'border-b border-b-solid border-b-hairline',
  },
})
