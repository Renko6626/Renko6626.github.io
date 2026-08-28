<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { NButton, NTag } from 'naive-ui'
import { useLocalized } from '@/composables/useLocalized'
import type { Note } from '@/content/types'

defineProps<{ note: Note }>()

const { t } = useI18n()
const l = useLocalized()

// 状态先靠形状区分，颜色只是第二通道 —— 整页在单色下也读得出来。
//   ● 已完成：一个闭合的对象     ○ 撰写中：尚未闭合的边界     → 待重写：正在移动
const GLYPH = {
  complete: '●',
  'in-progress': '○',
  rewriting: '→',
} as const
</script>

<template>
  <li class="row hairline-b page-x">
    <div class="main">
      <h2 class="title">{{ l(note.title) }}</h2>
      <p class="summary">{{ l(note.summary) }}</p>
    </div>

    <div class="side">
      <NTag size="small" :bordered="true">
        <span class="glyph-inline" aria-hidden="true">{{ GLYPH[note.status] }}</span>
        {{ t(`notes.status.${note.status}`) }}
      </NTag>
      <p class="updated">
        <span class="eyebrow">{{ t('notes.updated') }}</span>
        <time :datetime="note.updated">{{ note.updated }}</time>
      </p>
      <NButton tag="a" :href="note.file" download ghost>
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
.title {
  font-size: var(--step-1);
  font-weight: 500;
  line-height: 1.3;
}
.glyph-inline {
  margin-right: 0.5em;
}
.summary {
  margin-top: var(--s-3);
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
