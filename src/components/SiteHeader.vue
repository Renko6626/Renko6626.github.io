<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import LocaleSwitch from './LocaleSwitch.vue'
import { profile } from '@/content/profile'
import { papers } from '@/content/papers'

const { t } = useI18n()

// 研究页当前没有内容。导航项不藏起来 —— 降级为 muted、仍然可点，
// 比装作不存在坦白，也给以后留了位置。
const researchEmpty = computed(() => papers.length === 0)
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
      <LocaleSwitch />
    </nav>
  </header>
</template>

<style scoped>
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
