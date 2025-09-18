<script setup>
import { useCategoryStore } from '@/stores/category';
const categoryStore=useCategoryStore()

</script>

<template>
  <div class="home-category">
    <ul class="menu">
       <!-- 一级目录 -->
      <li v-for="item in categoryStore.categoryList" :key="item.id">
        <RouterLink to="/">{{ item.name }}</RouterLink>
        <!-- 二级目录 -->
        <RouterLink v-for="i in item.children.slice(0,2)" :key="i" to="/">{{ i.name }}</RouterLink>
        <!-- 弹层layer位置 -->
        <div class="layer">
          <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
          <!-- 循环渲染 5 个推荐商品卡片 -->
          <ul>
            <li v-for="i in item.goods" :key="i.id">
              <!-- 每个卡片是一个可点击链接 -->
              <RouterLink to="/">
                <img  :src="i.picture" alt="" />
                <div class="info">
                  <p class="name ellipsis-2">{{ i.name }}</p>
                  <p class="desc ellipsis">{{i.desc}}</p>
                  <p class="price"><i>¥</i>{{ i.price }}</p>
                </div>
              </RouterLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>


<style scoped lang='scss'>
.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;//相对定位使内部绝对定位元素（如 .layer）以它为参照
  z-index: 99;

  .menu {
    li {
      padding-left: 40px;
      height: 55px;
      line-height: 55px;

      //悬停改变每一行的背景色
      &:hover {
        background: $xtxColor;
      }

      a {
        margin-right: 4px;
        color: #fff;

        //第一个元素被放大字体
        &:first-child {
          font-size: 16px;
        }
      }

      //当 li 悬停时弹层显示
      .layer {
        width: 990px;
        height: 500px;
        background: rgba(255, 255, 255, 0.8);
        position: absolute;//绝对定位
        left: 250px; //向右偏移 250px（恰好等于 .home-category 的宽度），因此弹层出现在侧栏右侧
        top: 0;
        display: none; //默认隐藏
        padding: 0 15px;

        h4 {
          font-size: 20px;
          font-weight: normal;
          line-height: 80px;

          small {
            font-size: 16px;
            color: #666;
          }
        }

        //卡片横向排列，换行
        ul {
          display: flex;
          flex-wrap: wrap;

          //卡片样式
          li {
            width: 310px;
            height: 120px;
            margin-right: 15px;
            margin-bottom: 15px;
            border: 1px solid #eee;
            border-radius: 4px;
            background: #fff;

            //每行三个卡片时，第三个右边不留空（整行对齐）
            &:nth-child(3n) {
              margin-right: 0;
            }

            a {
              display: flex;
              width: 100%;
              height: 100%;
              align-items: center;
              padding: 10px;

              //悬停卡片有高亮背景
              &:hover {
                background: #e3f9f4;
              }

              img {
                width: 95px;
                height: 95px;
              }

              .info {
                padding-left: 10px;
                line-height: 24px;
                overflow: hidden;

                .name {
                  font-size: 16px;
                  color: #666;
                }

                .desc {
                  color: #999;
                }

                .price {
                  font-size: 22px;
                  color: $priceColor;

                  i {
                    font-size: 16px;
                  }
                }
              }
            }
          }
        }
      }

      // 关键样式  hover状态下的layer盒子变成block
      &:hover {
        .layer {
          display: block;
        }
      }
    }
  }
}
</style>
