import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
// 引入svg插件
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon.vue'
// 引入全局样式
import '@/styles/index.scss'
// 引入路由
import Router from './router'
// element图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 引入仓库
import pinia from './store'
const app = createApp(App)
app.use(ElementPlus)
app.use(pinia)
app.use(Router)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.component('SvgIcon', SvgIcon)
app.mount('#app')
