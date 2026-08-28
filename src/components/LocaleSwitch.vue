<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { LOCALES, persistLocale, type Locale } from '@/i18n'

const { locale, t } = useI18n()

function choose(next: Locale) {
  locale.value = next
  persistLocale(next)
}
</script>

<template>
  <div class="switch" role="group" :aria-label="t('locale.label')">
    <button
      v-for="(code, i) in LOCALES"
      :key="code"
      type="button"
      class="opt"
      :class="{ on: locale === code, first: i === 0 }"
      :aria-pressed="locale === code"
      @click="choose(code)"
    >
      {{ code.toUpperCase() }}
    </button>
  </div>
</template>

<style scoped>
.switch {
  display: flex;
  align-items: center;
}
.opt {
  appearance: none;
  background: none;
  border: 0;
  padding: var(--s-1) var(--s-2);
  font-family: var(--font-mono);
  font-size: var(--step--1);
  letter-spacing: var(--tracking-label);
  color: var(--text-mute);
  cursor: pointer;
  transition: color 120ms linear;
}
.opt:hover {
  color: var(--text);
}
.opt.on {
  color: var(--text);
}
/* 两态之间一条发丝竖线，而不是给按钮画框 */
.opt:not(.first) {
  border-left: 1px solid var(--hairline);
}
</style>
