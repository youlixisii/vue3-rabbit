//管理用户数据相关
import { defineStore } from "pinia";
import {ref} from 'vue'
import { loginAPI } from "@/apis/user";

export const useUserStore = defineStore('user',()=>{
  //1.定义 state —— 用 ref 定义一个响应式数据 userInfo，用来保存当前登录用户的信息
  const userInfo = ref({})
  //2.定义 action —— 封装一个获取用户信息的方法 getUserInfo
  //    调用 loginAPI（即发请求去登录），并把返回的用户数据保存到 userInfo 中
  const getUserInfo=async ({account,password})=>{
    const res = await loginAPI({account,password})
    userInfo.value = res.result  // 将接口返回的数据存到状态里
  }
  //3.返回 state 和 action —— 这样在组件里就可以通过 useUserStore() 来使用 userInfo 和 getUserInfo
  return {userInfo,getUserInfo}
})
