<script setup>
import {ref} from 'vue'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useRouter } from 'vue-router'
import {useUserStore} from '@/stores/userStore'

const userStore = useUserStore()

//表单校验，账户名和密码
//1.准备表单对象并绑定
const form=ref({
  //初始值为空字符串
  account:'xiaotuxian001',
  password:'123456',
  agree:true
})

//2.准备规则对象并绑定
//每个字段（account、password）对应一个 数组，数组里可以有多个验证规则。
const rules={
  //required为true：必填项
  //message → 验证不通过时显示的提示
  //trigger: 'blur' → 触发验证的时机，这里是失去焦点时验证
  account:[
    {required:true, message:'用户名不能为空', trigger:'blur' }
  ],
  password:[
    {required:true, message:'密码不能为空', trigger:'blur'},
    //长度限制规则
    {min:6,max:14, message:'密码长度为6-14个字符', trigger:'blur'},
  ],
  agree:[
    {
      //这是 Element Plus 支持的自定义验证函数属性
      //value → 当前表单字段的值（这里就是 form.agree 的布尔值，勾选 → true，未勾选 → false）
      //callback → 调用它来通知 Element Plus 验证结果：//callback() → 验证通过
      //callback(new Error('提示信息')) → 验证不通过，显示错误信息

      validator:(rule,value,callback)=>{
        //自定义校验逻辑
        //勾选就通过，不勾选就不通过
        if(value){
          callback() // 勾选了，通过验证
        }else{
          callback(new Error('请勾选协议')) // 未勾选，验证失败
        }
    }
  }
  ]
}

// 获取form实例做统一校验
// Element Plus 遍历表单下的所有 <el-form-item>，找到对应的规则
const formRef=ref(null)
const router=useRouter()
const doLogin=()=>{
  //获取用户输入的账号和密码
  const {account,password} =form.value
  //调用实例方法
  formRef.value.validate(async (valid)=>{
    //valid:所有表单通过校验才为true
    console.log(valid);
    if(valid){
      try {
        userStore.getUserInfo({account,password})
        //弹出小窗口提示用户
        ElMessage({type:'success',message:'登陆成功'})
        //跳转到首页
        router.replace({path:'/'})

      } catch(err) {
      console.error('登录失败', err.message)
      }

    }
  })
}

</script>


<template>
  <div>
    <header class="login-header">
      <div class="container m-top-20">
        <h1 class="logo">
          <RouterLink to="/">小兔鲜</RouterLink>
        </h1>
        <RouterLink class="entry" to="/">
          进入网站首页
          <i class="iconfont icon-angle-right"></i>
          <i class="iconfont icon-angle-right"></i>
        </RouterLink>
      </div>
    </header>
    <section class="login-section">
      <div class="wrapper">
        <nav>
          <a href="javascript:;">账户登录</a>
        </nav>
        <div class="account-box">
          <!-- 登录小界面 -->
          <div class="form">
            <!-- 绑定表单对象和规则对象 -->
            <!-- label-position="right" → 标签显示在右边；status-icon → 显示验证状态图标（勾、叉）-->
            <el-form ref="formRef" :model="form" :rules="rules" label-position="right" label-width="60px"
              status-icon>
              <!-- 账户 -->
              <!-- prop="account" → 当前表单项对应的字段名，用于校验时定位到 form.account
              label="账户" → 界面上显示的 -->
              <el-form-item prop="account" label="账户">
                <el-input v-model="form.account" /> <!--Vue 的 双向绑定，输入框的值会自动和 form.account 对应的变量同步-->
              </el-form-item>
              <!-- 密码 -->
              <el-form-item prop="password" label="密码">
                <el-input v-model="form.password" />
              </el-form-item>
              <!-- 复选框 -->
              <!-- 绑定自定义表单校验 -->
              <el-form-item prop="agree" label-width="22px">
                <el-checkbox  size="large" v-model="form.agree">
                  我已同意隐私条款和服务条款
                </el-checkbox>
              </el-form-item>
              <!-- @click="doLogin" -->
              <el-button size="large" class="subBtn" @click="doLogin">点击登录</el-button>
            </el-form>
          </div>
        </div>
      </div>
    </section>

    <footer class="login-footer">
      <div class="container">
        <p>
          <a href="javascript:;">关于我们</a>
          <a href="javascript:;">帮助中心</a>
          <a href="javascript:;">售后服务</a>
          <a href="javascript:;">配送与验收</a>
          <a href="javascript:;">商务合作</a>
          <a href="javascript:;">搜索推荐</a>
          <a href="javascript:;">友情链接</a>
        </p>
        <p>CopyRight &copy; 小兔鲜儿</p>
      </div>
    </footer>
  </div>
</template>

<style scoped lang='scss'>
.login-header {
  background: #fff;
  border-bottom: 1px solid #e4e4e4;

  .container {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .logo {
    width: 200px;

    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url("@/assets/images/logo.png") no-repeat center 18px / contain;
    }
  }

  .sub {
    flex: 1;
    font-size: 24px;
    font-weight: normal;
    margin-bottom: 38px;
    margin-left: 20px;
    color: #666;
  }

  .entry {
    width: 120px;
    margin-bottom: 38px;
    font-size: 16px;

    i {
      font-size: 14px;
      color: $xtxColor;
      letter-spacing: -5px;
    }
  }
}

.login-section {
  background: url('@/assets/images/login-bg.png') no-repeat center / cover;
  height: 488px;
  position: relative;

  .wrapper {
    width: 380px;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 54px;
    transform: translate3d(100px, 0, 0);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

    nav {
      font-size: 14px;
      height: 55px;
      margin-bottom: 20px;
      border-bottom: 1px solid #f5f5f5;
      display: flex;
      padding: 0 40px;
      text-align: right;
      align-items: center;

      a {
        flex: 1;
        line-height: 1;
        display: inline-block;
        font-size: 18px;
        position: relative;
        text-align: center;
      }
    }
  }
}

.login-footer {
  padding: 30px 0 50px;
  background: #fff;

  p {
    text-align: center;
    color: #999;
    padding-top: 20px;

    a {
      line-height: 1;
      padding: 0 10px;
      color: #999;
      display: inline-block;

      ~a {
        border-left: 1px solid #ccc;
      }
    }
  }
}

.account-box {
  .toggle {
    padding: 15px 40px;
    text-align: right;

    a {
      color: $xtxColor;

      i {
        font-size: 14px;
      }
    }
  }

  .form {
    padding: 0 20px 20px 20px;

    &-item {
      margin-bottom: 28px;

      .input {
        position: relative;
        height: 36px;

        >i {
          width: 34px;
          height: 34px;
          background: #cfcdcd;
          color: #fff;
          position: absolute;
          left: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 18px;
        }

        input {
          padding-left: 44px;
          border: 1px solid #cfcdcd;
          height: 36px;
          line-height: 36px;
          width: 100%;

          &.error {
            border-color: $priceColor;
          }

          &.active,
          &:focus {
            border-color: $xtxColor;
          }
        }

        .code {
          position: absolute;
          right: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 14px;
          background: #f5f5f5;
          color: #666;
          width: 90px;
          height: 34px;
          cursor: pointer;
        }
      }

      >.error {
        position: absolute;
        font-size: 12px;
        line-height: 28px;
        color: $priceColor;

        i {
          font-size: 14px;
          margin-right: 2px;
        }
      }
    }

    .agree {
      a {
        color: #069;
      }
    }

    .btn {
      display: block;
      width: 100%;
      height: 40px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      background: $xtxColor;

      &.disabled {
        background: #cfcdcd;
      }
    }
  }

  .action {
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .url {
      a {
        color: #999;
        margin-left: 10px;
      }
    }
  }
}

.subBtn {
  background: $xtxColor;
  width: 100%;
  color: #fff;
}
</style>
