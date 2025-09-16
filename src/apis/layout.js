import http from "@/utils/http";

//接口函数
export function getCategoryAPI(){
  return http({
    url:'/home/category/head'
  })
}
