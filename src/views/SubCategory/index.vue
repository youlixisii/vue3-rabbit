<script setup>
import { getCategoryFilterAPI,getSubCategoryAPI } from '@/apis/category';
import {onMounted, ref} from 'vue'
import { useRoute } from 'vue-router';
import Goodsitem from '../Home/components/Goodsitem.vue';

//获取面包屑导航数据
const categoryData=ref({})
const route=useRoute()
const getCategoryData= async ()=>{
  const res=await getCategoryFilterAPI(route.params.id)
  categoryData.value=res.result
}
onMounted(()=>getCategoryData())

//基础列表数据获取
const goodList=ref([])
const reqData=ref({
  categoryId:route.params.id,
  page:1,
  pageSize:20,
  sortField:'publishTime' //控制排序方式的属性
})
const getGoodList =async ()=>{
  const res=await getSubCategoryAPI(reqData.value)
  console.log(res);
  goodList.value=res.result.items

}
onMounted(()=>getGoodList())

//商品排列方式切换（人气/评论/最新）
//点击后重新请求
const tabChange=()=>{
  reqData.value.page=1  //重新分页
  getGoodList()
}

//无限加载
const disabled=ref(false)
const load=async ()=>{
  reqData.value.page++
  const res=await getSubCategoryAPI(reqData.value)
  goodList.value=[...goodList.value,...res.result.items]
  //加载完停止监听
  if(res.result.items.length===0){
    disabled.value=true
  }
}
</script>

<template>
  <div class="container ">
    <!-- 面包屑导航 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <!-- 一级面包屑导航 -->
        <el-breadcrumb-item :to="{ path: `/category/${categoryData.parentId}` }">
          {{ categoryData.parentName }}
        </el-breadcrumb-item>
        <!-- 二级面包屑导航 -->
        <el-breadcrumb-item>{{categoryData.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <!-- 双向绑定，点击后重新请求数据 -->
      <el-tabs v-model="reqData.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
          <!-- 商品列表-->
        <Goodsitem v-for="good in goodList" :goods="good" :key="good.id" />
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>
