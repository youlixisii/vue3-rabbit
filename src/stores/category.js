import { ref } from 'vue'
import { defineStore } from 'pinia'
//一个 封装好的请求函数
import {getCategoryAPI} from '@/apis/layout'

//store组合式写法
export const useCategoryStore = defineStore('category', () => {
  //导航列表数据管理
  //state导航列表数据
  const categoryList=ref([])

  //action获取导航数据的方法
  const getCategory=async ()=>{
    const res=await getCategoryAPI()
    categoryList.value=res.result;
  }
  return {categoryList,getCategory}
})
