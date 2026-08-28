<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { NButton } from 'naive-ui'
import type { Handout } from '@/content/types'

defineProps<{ handout: Handout }>()

const { t } = useI18n()
</script>

<template>
  <li class="row hairline-b page-x">
    <div class="main">
      <p class="topic">{{ handout.topic }}</p>
      <h2 class="title">{{ handout.title }}</h2>
      <p class="summary">{{ handout.summary }}</p>
    </div>

    <div class="side">
      <p class="updated">
        <span class="eyebrow">{{ t('notes.updated') }}</span>
        <time :datetime="handout.updated">{{ handout.updated }}</time>
      </p>
      <NButton tag="a" :href="handout.file" download ghost>
        {{ t('notes.download') }}
      </NButton>
    </div>
  </li>
</template>

<style scoped>
.row {
  display: grid;
  gap: var(--s-4);
  padding-block: var(--s-5);
  grid-template-columns: minmax(0, 1fr);
}
/* 主题标签走等宽 + 字距，和讲义页的状态标签同一个冷技术register */
.topic {
  font-family: var(--font-mono);
  font-size: var(--step--1);
  letter-spacing: var(--tracking-label);
  color: var(--text-mute);
}
.title {
  margin-top: var(--s-2);
  font-size: var(--step-1);
  font-weight: 500;
  line-height: 1.3;
}
.summary {
  margin-top: var(--s-2);
  max-width: var(--measure-cjk);
  color: var(--text-mute);
}
.side {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--s-3);
}
.updated {
  display: flex;
  align-items: baseline;
  gap: var(--s-2);
  font-family: var(--font-mono);
  font-size: var(--step--1);
  color: var(--text-mute);
}

@media (min-width: 900px) {
  .row {
    grid-template-columns: minmax(0, 42rem) minmax(0, 18rem);
    justify-content: start;
    gap: var(--s-7);
    align-items: start;
  }
  .side {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--s-4);
  }
}
</style>
