<script setup lang="ts">
// 构建期由 scripts/make-figure.py 计算生成的静态 SVG。
// 内联而非 <img>，是为了让描边跟随 currentColor、accent 跟随 --accent。
// 运行时不需要任何 JS。
import figure from '@/assets/figures/radial-quantization.svg?raw'
</script>

<template>
  <!-- ▦ 被测量的空间：柱面上的均匀网格在 w = exp z 下的像 -->
  <div class="figure" aria-hidden="true" v-html="figure" />
</template>

<style scoped>
.figure {
  color: var(--line);
  line-height: 0;
}
.figure :deep(svg) {
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;
}
</style>
