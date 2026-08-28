<!--
  geometry legend:
    ○ 空心环 = 尚未闭合的边界 —— 撰写中的讲义 / 未定的结论
    ● 实心点 = 一次插入、一个已完成的对象 —— 完成的讲义、图中的算符插入点
    → 向量   = 一条轨迹、一个正在进行的过程 —— 待重写的讲义、标度流
    ▦ 正交网格 = 被测量的空间、系统本身 —— 首屏的径向量子化图
  结构性元素（发丝分割线、边框、按钮外框）不参与这套语义，保持沉默。
-->
<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import { NConfigProvider, NGlobalStyle, darkTheme } from 'naive-ui'
import { useRoute } from 'vue-router'
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import { naiveOverrides } from '@/theme/naive-overrides'
import { profile } from '@/content/profile'

const { t, locale } = useI18n()
const route = useRoute()

const pageTitle = computed(() => {
  const section = route.name === 'home' ? null : t(`nav.${String(route.name)}`)
  return section ? `${section} · ${profile.name}` : profile.name
})

watchEffect(() => {
  document.title = pageTitle.value
  document.documentElement.lang = locale.value === 'zh' ? 'zh-CN' : 'en'
})
</script>

<template>
  <NConfigProvider :theme="darkTheme" :theme-overrides="naiveOverrides">
    <NGlobalStyle />
    <a class="skip-link" href="#main">{{ t('nav.skip') }}</a>
    <SiteHeader />
    <main id="main" tabindex="-1">
      <RouterView />
    </main>
    <SiteFooter />
  </NConfigProvider>
</template>

<style scoped>
.skip-link {
  position: absolute;
  left: var(--s-4);
  top: var(--s-2);
  padding: var(--s-2) var(--s-3);
  background: var(--text);
  color: var(--bg);
  font-family: var(--font-mono);
  font-size: var(--step--1);
  transform: translateY(-200%);
  z-index: 10;
}
.skip-link:focus {
  transform: none;
}
main:focus {
  outline: none;
}
</style>
