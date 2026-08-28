// GitHub Pages 没有 SPA fallback：直接访问或刷新 /notes 会走到 404。
// 把 index.html 复制成 404.html，Pages 用它兜底，SPA 再接管路由，
// 于是 /notes 这样的链接可以贴给别人。
//
// 这一步属于 build 而不是 deploy —— `pnpm build` 的产物本身就该是完整可部署的。
import { copyFile, access } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const index = resolve(root, 'dist/index.html')
const fallback = resolve(root, 'dist/404.html')

await access(index)
await copyFile(index, fallback)
console.log('postbuild: dist/index.html -> dist/404.html')
