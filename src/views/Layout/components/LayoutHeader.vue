<script setup>
import { useCategoryStore } from '@/stores/category';
const categoryStore=useCategoryStore()
</script>

<template>
  <header class="app-header">
    <div class="container">
      <!-- logo区域 -->
      <h1 class="logo">
        <!-- 实现客户端路由跳转，/表示首页。渲染后变成a标签 -->
        <RouterLink to="/">小兔鲜</RouterLink>
      </h1>
      <!-- 右侧导航区 -->
      <ul class="app-header-nav">
        <li class="home">
          <RouterLink to="/">首页</RouterLink>
        </li>
        <!-- 渲染，RouterLink组件替代a标签，渲染后实际上是a标签 -->
        <li class="home" v-for="item in categoryStore.categoryList" :key="item.id">
          <!-- 插值语法 -->
          <RouterLink active-class="active" :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
        </li>
      </ul>
      <!-- 搜索框 -->
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜">
      </div>
      <!-- 购物车 -->
      <div class="class">
        <div class="curr">
          <i class="iconfont icon-cart"></i>
          <em>0</em>
        </div>
      </div>

    </div>
  </header>
</template>

<style scoped lang="scss">
  .app-header{
    background: #fff;
  }
  .container{
    display: flex; //开启弹性布局，让里面的一个个div横向排列
    align-items: center; //垂直居中
  }
  .logo{
    width: 200px;
    a{
      display: block; //让a变成块级元素，a默认是行内元素
      height: 132px;
      width: 100%; //等于父元素的宽度
      // 文字水平偏移，移动到看不到的地方，同时保持SEO
      text-indent: -9999px;
      // 背景图片不重复
      // 水平方向居中，垂直方向距离顶部18px
      // /表示背景大小，contain表示保持图片比例，让图片完全显示在元素内部
      background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
    }
  }
  //文字导航
  .app-header-nav {
    display: flex;  //开启flex，横向排列
    align-items: center; //居中分布
    width: 820px;
    padding-left: 40px; //距离左边的图片
    position: relative; //定位，和下面的打配合
    z-index: 998; //层叠，给这个元素设置较高层级，常用在导航栏固定头部
  }
  // 文字导航
  .app-header-nav li{
    margin-right: 40px;
    width: 38px;
    text-align: center; //水平居中
    a{
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;

      &:hover{ //鼠标悬停颜色
        color: $xtxColor; //悬停文字颜色
        border-bottom: 1px solid $xtxColor; //悬停下划线
      }
    }

    //当路由是/时，<RouterLink> 渲染后的 <a> 会自动带上class="active"
    //永久激活样式
    .active{
      color: $xtxColor;
      border-bottom: 1px solid $xtxColor;
    }
  }

  // 搜索框
  .search{
    width: 170px;
    height: 32px;
    line-height: 32px;
    border-bottom: 1px solid #e7e7e7;

    .icon-search{
      font-size: 18px;
      margin-left: 5px;
    }

    input{
      width: 140px;
      padding-left: 5px;
      color: #666;
    }
  }

  .cart{
    width: 50px;

    //内部的样式
    .curr{
      height: 32px;
      line-height: 32px; //垂直居中
      text-align: center; //水平居中
      position: relative; //作为定位上下文，方便em挂在右上角
      display: block; //让icon和em是一个整体


      .icon-cart{
        font-size: 22px;
      }

      //绝对定位的参照物是最近的定位父元素（relative/absolute/fixed），
      //所以 .curr 必须是一个 完整的矩形区域，才能作为 em 的定位基准
      em{
        font-style: normal; //取消斜体
        position: absolute; //绝对定位
        right: 0; //元素在父元素的右上角
        top:0;
        padding: 1px 6px;
        line-height: 1; //行高=字体大小
        background: $helpColor; //底色
        color: #fff; //文字颜色
        font-size: 12px;
        border-radius: 10px; //圆角
        font-family: Arial;
      }
    }
  }
</style>
