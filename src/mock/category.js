import Mock from 'mockjs'

// 模拟 /category 接口
Mock.mock(/\/mock\/category/, 'get', (options) => {
  const url = options.url
  const idMatch = url.match(/id=([^&]+)/)
  const id = idMatch ? idMatch[1] : null

  // 这里放你提供的完整数据
  const fullData = {
    "1005000": {
      "code": "1",
      "msg": "操作成功",
      "result": {
        "id": "1005000",
        "name": "居家",
        "picture": null,
        "children": [
          {
            "id": "1005999003",
            "name": "居家生活用品",
            "picture": "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-22/7f6a7b20-7902-4b43-b9c5-f33151ef1334.jpg",
            "parentId": null,
            "parentName": null,
            "goods": [
              {
                "id": "3463003",
                "name": "法国年份雅文邑700毫升",
                "desc": "经典产区限量单一老年份",
                "price": "1480.00",
                "picture": "https://yanxuan-item.nosdn.127.net/0a2fff6e0b55178fbbe99d97d94d20a8.png",
                "discount": null,
                "orderNum": 47
              },
              {
                "id": "3494006",
                "name": "梅乃宿梅酒720毫升",
                "desc": "小藏手工酿造，百年名酒",
                "price": "168.00",
                "picture": "https://yanxuan-item.nosdn.127.net/330913911087b44b0d817dd78233165f.png",
                "discount": null,
                "orderNum": 27
              },
              {
                "id": "1503001",
                "name": "全新升级，四川酸辣粉195克*6杯",
                "desc": "秘制酱包，配料丰富，爽弹滑口更巴适",
                "price": "69.00",
                "picture": "https://yanxuan-item.nosdn.127.net/54d1af8bc1e5e566b1455c8cbe3039aa.jpg",
                "discount": null,
                "orderNum": 1
              },
              {
                "id": "3388018",
                "name": "组合装牛油300克+清油110克*2+番茄110克*2",
                "desc": "川渝火锅魂，地道重庆味",
                "price": "32.80",
                "picture": "https://yanxuan-item.nosdn.127.net/e0c1ffa060d1fd8b81a720212d684945.png",
                "discount": null,
                "orderNum": 4
              },
              {
                "id": "1666009",
                "name": "多米尼加陈年朗姆酒700毫升",
                "desc": "陈年朗姆，香味芬芳",
                "price": "238.00",
                "picture": "https://yanxuan-item.nosdn.127.net/e3f387109491d92c47179d029d340b1f.jpg",
                "discount": null,
                "orderNum": 18
              }
            ]
          },
          {
            "id": "1008017",
            "name": "收纳",
            "picture": "https://yanxuan.nosdn.127.net/366989e4d730594e86fcd60b5ab19acc.png",
            "parentId": null,
            "parentName": null,
            "goods": [
              {
                "id": "1108008",
                "name": "爆款明星好物，抽屉式透明储物柜",
                "desc": "抽屉随意拉，东西随意拿，7款尺寸，随意叠加搭配",
                "price": "129.00",
                "picture": "https://yanxuan-item.nosdn.127.net/76a5304c9d7378a83e63554f3077d98b.png",
                "discount": null,
                "orderNum": 30
              }
            ]
          },
          {
            "id": "1017000",
            "name": "宠物食品",
            "picture": "https://yanxuan.nosdn.127.net/b42a85ef15f856081ea9f49e5f6893e2.png",
            "parentId": null,
            "parentName": null,
            "goods": []
          },
          {
            "id": "109243003",
            "name": "艺术藏品",
            "picture": "https://yanxuan.nosdn.127.net/9544b81aaa14c26a8038c2365ff3c2bc.png",
            "parentId": null,
            "parentName": null,
            "goods": [
              {
                "id": "4008506",
                "name": "平步青云财神家居摆件",
                "desc": "艺术家瞿广慈作品，手绘上色，礼盒包装",
                "price": "646.00",
                "picture": "https://yanxuan-item.nosdn.127.net/9d5d0083264344b5d85acde13570d025.jpg",
                "discount": null,
                "orderNum": 60
              }
              // ...可以继续把你给的所有商品都加进来
            ]
          },
          // 其他 children 同样加入
        ]
      }
    }
  }

  if (id && fullData[id]) {
    return fullData[id]
  } else {
    return {
      code: "0",
      msg: "没有找到该分类",
      result: null
    }
  }
})


