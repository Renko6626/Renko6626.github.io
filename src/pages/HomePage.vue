<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { NButton } from 'naive-ui'
import RadialFigure from '@/components/RadialFigure.vue'
import { useLocalized } from '@/composables/useLocalized'
import { profile } from '@/content/profile'

const { t } = useI18n()
const l = useLocalized()
</script>

<template>
  <section class="hero">
    <!-- 首屏唯一的主导动作：图。正文坐在它对数式稀疏的外围负空间里。 -->
    <RadialFigure class="hero-figure" />

    <div class="hero-body page-x">
      <p class="eyebrow reveal reveal-1">{{ t('home.eyebrow') }}</p>

      <h1 class="name reveal reveal-2">{{ profile.name }}</h1>
      <p class="affil reveal reveal-2">{{ l(profile.affiliation) }}</p>

      <div class="prose reveal reveal-3">
        <p v-for="(para, i) in profile.bio" :key="i">{{ l(para) }}</p>
      </div>

      <!-- 学生从首页进来的落点。放在首屏之内 —— 挂到页面底部等于没放。 -->
      <div class="teaching reveal reveal-3">
        <p class="eyebrow">{{ t('home.teaching') }}</p>
        <div class="teaching-row">
          <p class="teaching-text">{{ l(profile.teaching) }}</p>
          <!-- custom v-slot：按钮保留真实 href（可右键新标签页打开、可被抓取），
               点击走 SPA 内跳而不是整页重载 -->
          <RouterLink v-slot="{ href, navigate }" to="/teaching" custom>
            <NButton tag="a" :href="href" ghost @click="navigate">
              {{ t('home.teachingCta') }}
            </NButton>
          </RouterLink>
        </div>
      </div>

      <div class="meta reveal reveal-3">
        <div class="block">
          <p class="eyebrow">{{ t('home.interests') }}</p>
          <ul class="interests">
            <li v-for="item in profile.interests" :key="item.en">{{ l(item) }}</li>
          </ul>
        </div>

        <div class="block">
          <p class="eyebrow">{{ t('home.elsewhere') }}</p>
          <div class="links">
            <NButton
              v-for="link in profile.links"
              :key="link.kind"
              tag="a"
              :href="link.href"
              target="_blank"
              rel="noreferrer noopener"
              ghost
            >
              {{ link.label }}
            </NButton>
          </div>
        </div>
      </div>
    </div>

    <figcaption class="caption page-x">
      <span class="caption-head">{{ t('home.figureCaption') }}</span>
      <span class="caption-body">
        <span class="dot" aria-hidden="true" />{{ t('home.figureLegend') }}
      </span>
    </figcaption>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: clamp(560px, calc(100svh - 64px), 1100px);
  padding-block: var(--s-6) var(--s-4);
}

/* 圆心（算符插入点）落在右侧栏外，图向右、向下切出画面 —— 出血即主导性。 */
.hero-figure {
  position: absolute;
  z-index: 0;
  pointer-events: none;
  width: clamp(680px, 88vw, 1260px);
  aspect-ratio: 1;
  right: -16%;
  top: 50%;
  transform: translateY(-44%);
}

.hero-body {
  position: relative;
  z-index: 1;
  /* page-x 的内边距计入 max-width（border-box），所以这里要留出两侧的量 */
  max-width: 58rem;
}

.name {
  font-family: var(--font-mono);
  font-size: var(--step-3);
  font-weight: 500;
  line-height: var(--leading-tight);
  letter-spacing: -0.01em;
  margin-top: var(--s-4);
}

.affil {
  margin-top: var(--s-2);
  color: var(--text-mute);
  font-size: clamp(var(--step-0), 2.6vw, var(--step-1));
}

.prose {
  margin-top: var(--s-5);
  max-width: var(--measure-cjk);
  display: grid;
  gap: var(--s-3);
}

.teaching {
  margin-top: var(--s-5);
}
.teaching > .eyebrow {
  padding-bottom: var(--s-2);
  border-bottom: 1px solid var(--hairline);
}
.teaching-row {
  margin-top: var(--s-3);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--s-3) var(--s-4);
}
.teaching-text {
  max-width: var(--measure-cjk);
}

.meta {
  margin-top: var(--s-5);
  display: grid;
  gap: var(--s-5);
  grid-template-columns: minmax(0, 1fr);
}

.block {
  /* 「别处」只剩一个链接时，标题下那条线会短得像瑕疵而不像分割线 */
  min-width: 9rem;
}
.block > .eyebrow {
  padding-bottom: var(--s-2);
  border-bottom: 1px solid var(--hairline);
}

/* 竖排 + 行间发丝线：读起来像一份参数表，
   也避开了横排在换行处把分隔条甩到行首的毛病 */
.interests {
  margin-top: var(--s-2);
}
.interests li {
  padding-block: var(--s-2);
}
.interests li + li {
  border-top: 1px solid var(--hairline);
}

.links {
  margin-top: var(--s-3);
  display: flex;
  flex-wrap: wrap;
  gap: var(--s-2);
}

.caption {
  position: relative;
  z-index: 1;
  margin-top: var(--s-5);
  display: flex;
  flex-wrap: wrap;
  gap: var(--s-1) var(--s-4);
  font-family: var(--font-mono);
  font-size: var(--step--1);
  color: var(--text-mute);
  max-width: 68rem;
}
.caption-head {
  color: var(--text);
  letter-spacing: var(--tracking-label);
  /* 不做 uppercase —— 会把公式里的 w 变成 W，数学符号的大小写是有意义的 */
  white-space: nowrap;
}
.caption-body {
  font-family: var(--font-body);
}
/* 全站唯一一处 accent：指向图中原点那个局域算符插入点 */
.dot {
  display: inline-block;
  width: 5px;
  height: 5px;
  margin-right: var(--s-2);
  background: var(--accent);
  vertical-align: 0.12em;
}

@media (min-width: 900px) {
  .meta {
    grid-template-columns: 1fr auto;
    gap: var(--s-7);
    align-items: start;
  }
}

/* 窄屏：图退到右下角，仍然出血，但不再压住正文的起点 */
@media (max-width: 720px) {
  .hero-figure {
    width: 150vw;
    right: -55%;
    top: auto;
    bottom: -18%;
    transform: none;
    opacity: 0.75;
  }
  .hero {
    min-height: auto;
    padding-block: var(--s-6) var(--s-6);
  }
}
</style>
