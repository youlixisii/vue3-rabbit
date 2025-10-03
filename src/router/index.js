//创建路由器并暴露出去
//写完之后需要在main.js里引入路由，不然和外界0联系

//1.引入createRouter
//createWebHistory路由器的工作模式
import { createRouter, createWebHistory } from 'vue-router'
//引入需要呈现的组件，都是.vue文件
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'
import Checkout from '@/views/Checkout/index.vue'
import Pay from '@/views/Pay/index.vue'
import PayBack from '@/views/Pay/PayBack.vue'

//2.创建路由器  调用createRouter
//路由器里面管理一个个路由，所以是routes，它是一个数组[]，而路由又是一个个对应关系，所以写{}
//路由有路径path、component，路径是自己设计的
//const router=createRouter({
//   routes:[{}]
// })



const router = createRouter({
  //路由器的工作模式
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
        },
        {
          path:'pay',
          component:Pay
        },
        {
          path:'paycallback',
          component:PayBack
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

//最后把路由export出去
export default router
