import 'virtual:uno.css'
import './theme/tokens.css'
import './theme/fonts.css'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { i18n } from './i18n'

createApp(App).use(router).use(i18n).mount('#app')
