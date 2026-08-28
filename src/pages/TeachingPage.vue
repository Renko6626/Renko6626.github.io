<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import PageHeading from '@/components/PageHeading.vue'
import HandoutRow from '@/components/HandoutRow.vue'
import { useLocalized } from '@/composables/useLocalized'
import { handouts, teachingContact } from '@/content/teaching'

const { t, locale } = useI18n()
const l = useLocalized()

// 讲义正文是中文的。英文态下明说，不让人下完才发现看不懂。
const cnOnly = computed(() => locale.value !== 'zh')
</script>

<template>
  <PageHeading
    :eyebrow="t('teaching.eyebrow')"
    :title="t('teaching.title')"
    :lead="t('teaching.lead')"
  />

  <p v-if="cnOnly" class="page-x notice">{{ t('teaching.cnOnly') }}</p>

  <p v-if="handouts.length === 0" class="page-x empty">{{ t('teaching.empty') }}</p>
  <ul v-else>
    <HandoutRow v-for="item in handouts" :key="item.id" :handout="item" />
  </ul>

  <section class="page-x contact">
    <p class="eyebrow">{{ t('teaching.contactLabel') }}</p>
    <p class="note">{{ l(teachingContact.note) }}</p>
    <ul v-if="teachingContact.channels.length" class="channels">
      <li v-for="c in teachingContact.channels" :key="c.value">
        <span class="channel-label">{{ l(c.label) }}</span>
        <a v-if="c.href" class="channel-value" :href="c.href">{{ c.value }}</a>
        <span v-else class="channel-value">{{ c.value }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.notice {
  padding-top: var(--s-4);
  font-family: var(--font-mono);
  font-size: var(--step--1);
  color: var(--text-mute);
}
.empty {
  padding-block: var(--s-6);
  color: var(--text-mute);
}
.contact {
  margin-top: var(--s-6);
  padding-top: var(--s-4);
  /* page-x 的内边距计入 max-width（border-box），要留出两侧的量 */
  max-width: 46rem;
}
.contact > .eyebrow {
  padding-bottom: var(--s-2);
  border-bottom: 1px solid var(--hairline);
}
.note {
  margin-block: var(--s-3);
  color: var(--text-mute);
}
/* 标识符表：左边说明这是什么，右边是给人复制的那串字符。
   和首页的研究兴趣同一套行间发丝线。 */
.channels li {
  display: flex;
  align-items: baseline;
  gap: var(--s-4);
  padding-block: var(--s-2);
}
.channels li + li {
  border-top: 1px solid var(--hairline);
}
.channel-label {
  flex: none;
  min-width: 4.5rem;
  color: var(--text-mute);
  font-size: var(--step--1);
}
.channel-value {
  font-family: var(--font-mono);
  letter-spacing: 0.04em;
  user-select: all;
}
a.channel-value:hover {
  color: var(--text-mute);
}
</style>
