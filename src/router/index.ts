import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('@/pages/HomePage.vue') },
  { path: '/notes', name: 'notes', component: () => import('@/pages/NotesPage.vue') },
  {
    path: '/research',
    name: 'research',
    component: () => import('@/pages/ResearchPage.vue'),
  },
  // GitHub Pages 会把未知路径交给 404.html（构建时由 index.html 复制而来），
  // SPA 接手后走到这里，回首页。
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})
