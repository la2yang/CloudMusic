import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
// 引入svg插件
import 'virtual:svg-icons-register'
// 引入自定义插件:注册整个项目的全局组件
import globalComponent from '@/components'
// 引入全局样式
import '@/styles/index.scss'
// 引入路由
import Router from './router'

const app = createApp(App)

app.use(ElementPlus)
app.use(Router)
// 安装自定义插件
app.use(globalComponent)
app.mount('#app')
