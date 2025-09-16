<script setup></script>

<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <!-- 已登录分支的导航项 -->
        <template v-if="true">
          <!-- i是在文字旁边显示一个图标，js;代表不执行东西 -->
          <!-- 就是显示用户头像+用户名用的 -->
          <li><a href="javascript:;"><i class="iconfont icon-user"></i>karina</a></li>
          <li>
            <!-- elementplus提供的一个确认弹窗组件 -->
            <el-popconfirm title="确认退出吗？" confirm-button-text="确认" cancel-button-text="取消">
              <!-- 插槽语法slot，触发弹窗的东西就是这个 -->
              <template #reference>
                <a href="javascript:;">退出登录</a>
              </template>
            </el-popconfirm>
          </li>
          <li><a href="javascript:;">我的订单</a></li>
          <li><a href="javascript:;">会员中心</a></li>
        </template>
        <!-- 未登录分支的导航项 -->
        <template v-else>
          <li><a href="javascript:;">请先登录</a></li>
          <li><a href="javascript:;">帮助中心</a></li>
          <li><a href="javascript:;">关于我们</a></li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">
  .app-topnav{
    background: #333;  //复合语法，相当于只设置了背景色
  }
  .app-topnav ul{
    display: flex; //开启弹性布局，开启后为横向排列
    justify-content: flex-end; //向右对齐
    align-items: center; //flex里的垂直居中
    height: 53px;
  }
  .app-topnav ul li a{
    padding: 0 15px; //加左右内边距
    color:#cdcdcd; //字体颜色
    // line-height: 1; //行高=字体大小
    // display: inline-block; //行内块元素可以设置宽高
  }
  .app-topnav ul li a i{
    font-size: 14px; //图标大小
    margin-right: 2px; //图标与文字间距
  }
  // ~是兄弟选择器，A~B意思是跟在A后的所有同级B元素，这里指除了第一个li的所有li元素
  .app-topnav ul li~li a{
    border-left: 2px solid #666;
  }
  // 鼠标悬停颜色，伪类选择器
  .app-topnav ul li a:hover{
    color: $xtxColor;
  }
</style>
