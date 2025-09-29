import { createRouter, createWebHistory } from 'vue-router'
//添加网页内容
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'
import Checkout from '@/views/Checkout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //路由对应关系，一级路由
  routes: [
    {
      path:'/',
      component:Layout, //一级路由渲染 Layout.vue
      // 二级路由
      children:[
        {
          path:'', //默认二级路由
          component:Home //在 Layout 里的 RouterView 位置显示 Home.vue
        },
        {
          path:'category/:id',
          component:Category
        },
        {
          path:'category/sub/:id',
          component:SubCategory
        },
        {
          path:'detail/:id',
          component:Detail
        },
        {
          path:'cartlist',
          component:CartList
        },
        {
          path:'checkout',
          component:Checkout
        }
      ]
    },
    {
      path:'/login', // 单独的一级路由
      component:Login
    },
  ],
  //切换路由时自动回到顶部
  scrollBehavior(){
    return {top:0}
  }
})

export default router
