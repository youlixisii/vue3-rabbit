//购物车
import { defineStore } from "pinia";
import {ref} from 'vue'

export const useCartStore = defineStore('cart',()=>{
  //state，响应式数组对象
  const cartList = ref([])
  //添加购物车操作，action
  const addCart = (goods)=>{
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

  return {cartList,addCart}
},{
  //开启持久化存储，存到本地
  persist:true,
})
