import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'  //引入样式

import { useIntersectionObserver } from '@vueuse/core'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

app.directive('img-lazy',{
  mounted(el,binding){
    console.log(el,binding.value);
    const { stop } = useIntersectionObserver(
          el,
          ([{ isIntersecting }]) => {
            console.log(isIntersecting)
            if (isIntersecting) {
              // 进入视口区域
              el.src = binding.value
              stop()
            }
          },
        )
  }
})
