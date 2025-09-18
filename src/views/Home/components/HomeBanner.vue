<script setup>
import {getBannerAPI} from'@/apis/home'
import {onMounted, ref} from'vue'

const bannerList=ref([])
const getBanner=async ()=>{
  const res=await getBannerAPI()
  console.log(res);
  bannerList.value=res.result
}
onMounted(()=> getBanner())

</script>



<template>
  <div class="home-banner">
    <!-- element plus提供的轮播图组件，固定高度为 500px -->
    <el-carousel height="500px">
      <!-- v-for 循环生成 4 个轮播项 -->
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <!-- 每个轮播项里放一张相同的图片（可以改成动态数据） -->
        <img :src="item.imgUrl" alt="banner">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>


<style scoped lang='scss'>
.home-banner {
  /* 整个轮播图容器宽度固定为 1240px，高度 500px */
  width: 1240px;
  height: 500px;

  /* 绝对定位，靠左上角 */
  // common样式里有container父容器的样式
  position: absolute;
  left: 0;
  top: 0;

  /* 设置层级，保证显示在其他元素上方 */
  z-index: 98;

  /* 轮播里的图片样式 */
  img {
    /* 图片宽度铺满容器 */
    width: 100%;

    /* 图片高度固定 500px，和轮播容器高度一致 */
    height: 500px;
  }
}
</style>
