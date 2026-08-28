<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const REPO = 'https://github.com/Renko6626/Renko6626.github.io'
</script>

<template>
  <footer class="page-x hairline-t mt-s8 py-s4 flex flex-wrap gap-s2 justify-between">
    <a class="item" :href="REPO" target="_blank" rel="noreferrer noopener">
      {{ t('footer.built') }}
    </a>
    <span class="item">{{ t('footer.legacy') }}</span>
  </footer>
</template>

<style scoped>
.item {
  font-family: var(--font-mono);
  font-size: var(--step--1);
  color: var(--text-mute);
}
a.item:hover {
  color: var(--text);
}
</style>
