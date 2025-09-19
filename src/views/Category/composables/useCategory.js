import { getCategoryAPI } from '@/apis/category'
import {onMounted, ref} from 'vue'
import {useRoute} from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'

// 封装分类数据相关业务代码
export function useCategory(){
  //获取数据
  const categoryData = ref({})
  const route = useRoute() //路由参数
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id)
    categoryData.value = res.result
  }
  onMounted(()=>getCategory())

  //路由参数变化时重新发送
  onBeforeRouteUpdate((to)=>{
    getCategory(to.params.id)
  })
  return {categoryData}
}
