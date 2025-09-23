import Mock from 'mockjs'

// 模拟商品数据
const goodsList = [
  {
    "id": "3995846",
    "name": "加绒加厚，儿童保暖时尚卫衣套装73-120cm",
    "spuCode": "3995846",
    "desc": "舒棉绒内里，抵御寒冬",
    "price": "199.00",
    "oldPrice": "199.00",
    "discount": 1,
    "inventory": 4320424,
    "brand": {
        "id": "spider99999999999",
        "name": "传智自有品牌",
        "nameEn": "chuanzhi",
        "logo": "https://yanxuan-item.nosdn.127.net/f6ddd429632de6170900dc2fbc541fd8.png?type=webp&imageView&thumbnail=78x78&quality=95",
        "picture": "https://yanxuan-item.nosdn.127.net/f6ddd429632de6170900dc2fbc541fd8.png?type=webp&imageView&thumbnail=78x78&quality=95",
        "type": null,
        "desc": null,
        "place": null
    },
    "salesCount": 135,
    "commentCount": 1,
    "collectCount": 0,
    "mainVideos": [],
    "videoScale": 1,
    "mainPictures": [
        "https://yanxuan-item.nosdn.127.net/21d2e9b754487aa3030ce105493a9473.jpg",
        "https://yanxuan-item.nosdn.127.net/adb0345dc57c2589671f41de805d2105.jpg",
        "https://yanxuan-item.nosdn.127.net/2bbc81469792c1a72bc59701f7888505.jpg"
    ],
    // 省略 specs、skus、categories、details、similarProducts 等字段，实际可完整保留
  }
  // 可继续添加其他商品
]

// 商品列表接口
Mock.mock(/\/mock\/goods(\?.*)?/, 'get', (options) => {
  const url = new URL(options.url, 'http://localhost') // 构建 URL 对象
  const id = url.searchParams.get('id') // 获取 id 参数
  if (id) {
    const goods = goodsList.find(item => item.id === id)
    if (goods) {
      return {
        code: "1",
        msg: "操作成功",
        result: [goods]
      }
    } else {
      return {
        code: "0",
        msg: "未找到商品",
        result: []
      }
    }
  } else {
    return {
      code: "1",
      msg: "操作成功",
      result: goodsList
    }
  }
})
