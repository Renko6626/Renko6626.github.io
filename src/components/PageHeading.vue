<script setup lang="ts">
defineProps<{ eyebrow: string; title: string; lead?: string }>()
</script>

<template>
  <header class="page-x pt-s7 pb-s5 hairline-b">
    <p class="eyebrow">{{ eyebrow }}</p>
    <!-- working mode 的锚点：本页最大最重的元素，但有界，不吞掉视口 -->
    <h1 class="title">{{ title }}</h1>
    <p v-if="lead" class="lead">{{ lead }}</p>
  </header>
</template>

<style scoped>
.title {
  margin-top: var(--s-3);
  font-size: var(--step-2);
  font-weight: 500;
  line-height: var(--leading-tight);
}
.lead {
  margin-top: var(--s-3);
  max-width: var(--measure-cjk);
  color: var(--text-mute);
}
</style>
