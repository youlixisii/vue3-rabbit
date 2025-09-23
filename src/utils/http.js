import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from '@/stores/user'
import router from '@/router'

// 创建axios实例
const http = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  // baseURL:'/mock',
  timeout: 5000
})

// axios请求拦截器
//请求拦截器就是：在每次发送请求之前，先经过一层“检查/加工”，然后再真正发出去
http.interceptors.request.use(config => {
  //获取pinia存的token数据
  const userStore = useUserStore()
  //拼接token数据
  const token=userStore.userInfo.token
  //后端接口一般需要校验身份（登录后的权限）。
  // 后端规定：请求头 Authorization 里必须带 Bearer xxx-token。
  // 这样你每次请求不用手动加 token，拦截器会帮你统一加上。
  if(token){
    config.headers.Authorization=`Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
http.interceptors.response.use(res => res.data, e => {
  const userStore = useUserStore()
  //统一错误提示
  ElMessage({
    type:'warining',
    message:e.response.data.message
  })
  //401token失效处理
  //1.清除本地用户数据
  //2.跳转到登录页
  if(e.response.status === 401){
    userStore.clearUserInfo()
    router.push('/login')
  }
  return Promise.reject(e)
})

export default http
