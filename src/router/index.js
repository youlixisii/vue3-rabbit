import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //路由对应关系，一级路由
  routes: [
    {
      path:'/',
      component:Layout,
      // 二级路由
      children:[
        {
          path:'',
          component:Home
        },
        {
          path:'category',
          component:Category
        },
      ]
    },
    {
      path:'/Login',
      component:Login
    },
  ],
})

export default router
