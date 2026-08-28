<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import LocaleSwitch from './LocaleSwitch.vue'
import { profile } from '@/content/profile'
import { papers } from '@/content/papers'
import { handouts } from '@/content/teaching'

const { t } = useI18n()

// 空板块的导航项不藏起来 —— 降级为 muted、仍然可点，
// 比装作不存在坦白，也给以后留了位置。有内容了自动恢复。
const researchEmpty = computed(() => papers.length === 0)
const teachingEmpty = computed(() => handouts.length === 0)
</script>

<template>
  <header class="page-x hairline-b flex items-center justify-between gap-s4 py-s3">
    <RouterLink to="/" class="wordmark">{{ profile.name }}</RouterLink>

    <nav class="flex items-center gap-s4" aria-label="Sections">
      <RouterLink to="/" class="link">{{ t('nav.home') }}</RouterLink>
      <RouterLink to="/notes" class="link">{{ t('nav.notes') }}</RouterLink>
      <RouterLink
        to="/research"
        class="link"
        :class="{ dim: researchEmpty }"
      >{{ t('nav.research') }}</RouterLink>
      <RouterLink
        to="/teaching"
        class="link"
        :class="{ dim: teachingEmpty }"
      >{{ t('nav.teaching') }}</RouterLink>
      <LocaleSwitch />
    </nav>
  </header>
</template>

<style scoped>
header {
  /* 挤不下时整块导航掉到第二行，而不是把「主页」压成两个字竖排 */
  flex-wrap: wrap;
}
.link {
  white-space: nowrap;
}
/* 四个中文导航项 + 语言切换在窄屏上要收紧才排得下一行 */
@media (max-width: 620px) {
  nav {
    gap: var(--s-3);
  }
}
.wordmark {
  font-family: var(--font-mono);
  font-size: var(--step--1);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
  color: var(--text);
}
.link {
  font-size: var(--step--1);
  color: var(--text-mute);
  transition: color 120ms linear;
}
.link:hover {
  color: var(--text);
}
.link.router-link-active {
  color: var(--text);
}
/* 空板块：更暗一档，但仍可达 */
.link.dim {
  color: var(--line);
}
.link.dim:hover,
.link.dim.router-link-active {
  color: var(--text-mute);
}
</style>
