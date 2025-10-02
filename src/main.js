import { createApp } from 'vue'
import { createPinia } from 'pinia'
//pinia持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
//引入App根组件
import App from './App.vue'
//引入路由
import router from './router'
import '@/styles/common.scss'  //引入样式
// import './mock'


//懒加载组件并注册
import {lazyPlugin} from '@/directives'
//全局组件
import { componentsPlugin } from './components'

//这个和后面的app.mount('#app')原本为一句，但是要拆分
const app = createApp(App)
const pinia=createPinia()
//注册持久化插件
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentsPlugin)
app.mount('#app')
