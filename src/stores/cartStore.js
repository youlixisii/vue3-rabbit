//购物车
import { defineStore } from "pinia";
import {ref,computed} from 'vue'
import { useUserStore } from "./userStore";
import { insertCartAPI,findNewCartListAPI,delCartAPI } from "@/apis/cart";

export const useCartStore = defineStore('cart',()=>{
  //state，响应式数组对象
  const userStore=useUserStore()
  const isLogin=computed(()=>userStore.userInfo.token)
  const cartList = ref([])

  //获取最新购物车列表
  const updateNewList=async ()=>{
    const res=await findNewCartListAPI()
      //覆盖本地购物车列表
      cartList.value=res.result
  }

  //添加购物车操作，action
  const addCart = async (goods)=>{
    const {skuId,count}=goods
    //登录后的购物车逻辑
    if(isLogin.value){
      await insertCartAPI({skuId,count})
      updateNewList()
    }else{
      //找cartList里面有没有被添加过，通过id来找
      //.find(callback) 数组方法，用来找数组里 符合条件的第一个元素。
      // 如果找到，就返回那个元素；如果没找到，返回 undefined。
      //[1, 2, 3, 4].find(num => num > 2) // 返回 3
      //[1, 2, 3, 4].find(num => num > 5) // 返回 undefined
      const item = cartList.value.find((item)=>goods.skuId === item.skuId)
      //如果该商品已被添加过，则数量加对应的数字
      if(item){
        // console.log('+',goods.count);
        //goods是传进来的，item是goodlist里已有的
        item.count+=goods.count
      }else{
        //没有被添加过则往里加这个商品
        cartList.value.push(goods)
      }
    }
}

  //删除购物车
  const delCart = async (skuId)=>{
    if(isLogin.value){
      await delCartAPI([skuId])
      updateNewList()
    }else{
      //返回一个下标值
    const idx=cartList.value.findIndex((item)=>skuId===item.skuId)
    cartList.value.splice(idx,1)
    }
  }

  //清除购物车
  const clearCart=()=>{
    cartList.value=[]
  }


  //购物车单选框改变store商品状态
  const singleCheck=(skuId,selected)=>{
    // item指的是数组中的每一个元素，find会返回第一个满足条件的元素
    const item = cartList.value.find((item)=>item.skuId === skuId)
    // 修改商品状态
    item.selected=selected
  }

  //全选功能
  const allCheck=(selected)=>{
    //点击全选按钮，下面的商品状态改变
    cartList.value.forEach(item=>item.selected=selected)

  }

  //计算购物车
  const allCount = computed(()=>cartList.value.reduce((a, c)=> a + c.count,0))
  const allPrice = computed(()=>cartList.value.reduce((a, c)=> a + c.count * c.price,0))

  //已选择数量
  const selectedCount=computed(()=>cartList.value.filter(item=>item.selected)
  .reduce((a, c)=> a + c.count,0))
  const selectedPrice=computed(()=>cartList.value.filter(item=>item.selected)
  .reduce((a, c)=> a + c.count*c.price,0))

  //已选商品合计

  //购物车是否全选
  //every方法
  const isAll=computed(()=>cartList.value.every((item)=>item.selected))

  return {
    cartList,
    addCart,
    delCart,
    allCount,
    allPrice,
    selectedCount,
    selectedPrice,
    clearCart,
    singleCheck,
    isAll,
    allCheck,
    updateNewList
}
},{
  //开启持久化存储，存到本地
  persist:true,
})
