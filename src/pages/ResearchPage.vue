<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageHeading from '@/components/PageHeading.vue'
import { useLocalized } from '@/composables/useLocalized'
import { papers } from '@/content/papers'

const { t } = useI18n()
const l = useLocalized()
</script>

<template>
  <PageHeading
    :eyebrow="t('research.eyebrow')"
    :title="t('research.title')"
    :lead="t('research.lead')"
  />

  <!-- 空态：一句诚实的话，不做骨架屏、不写「敬请期待」 -->
  <p v-if="papers.length === 0" class="page-x empty">{{ t('research.empty') }}</p>

  <ul v-else>
    <li v-for="paper in papers" :key="paper.id" class="row hairline-b page-x">
      <h2 class="title">{{ paper.title }}</h2>
      <p class="authors">{{ paper.authors.join(', ') }}</p>
      <p class="meta">
        <span v-if="paper.venue">{{ paper.venue }} · </span>{{ paper.year }}
        <a
          v-if="paper.arxiv"
          class="ref"
          :href="`https://arxiv.org/abs/${paper.arxiv}`"
          target="_blank"
          rel="noreferrer noopener"
        >arXiv:{{ paper.arxiv }}</a>
        <a
          v-if="paper.doi"
          class="ref"
          :href="`https://doi.org/${paper.doi}`"
          target="_blank"
          rel="noreferrer noopener"
        >doi:{{ paper.doi }}</a>
      </p>
      <p v-if="paper.note" class="note">{{ l(paper.note) }}</p>
    </li>
  </ul>
</template>

<style scoped>
.empty {
  padding-block: var(--s-6);
  color: var(--text-mute);
}
.row {
  padding-block: var(--s-5);
}
.title {
  font-size: var(--step-1);
  font-weight: 500;
  line-height: 1.3;
}
.authors {
  margin-top: var(--s-2);
  color: var(--text-mute);
}
.meta {
  margin-top: var(--s-2);
  display: flex;
  flex-wrap: wrap;
  gap: var(--s-3);
  font-family: var(--font-mono);
  font-size: var(--step--1);
  color: var(--text-mute);
}
.ref:hover {
  color: var(--text);
}
.note {
  margin-top: var(--s-3);
  max-width: var(--measure-cjk);
  color: var(--text-mute);
}
</style>
