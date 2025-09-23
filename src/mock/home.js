//home页面的api

import Mock from 'mockjs'

//轮播图，带参数
//用正则 /\/home\/banner/ 拦截带参数的请求，根据参数返回不同的数据
Mock.mock(/\/home\/banner/,'get',(options)=>{

    const url = new URL(options.url, window.location.origin)
  const distributionSite = url.searchParams.get('distributionSite') || '1'

  console.log('轮播图请求参数:', distributionSite)

  if (distributionSite === '1') {
    return {
      code: "1",
      msg: "操作成功",
      result: [
        {
          id: "16",
          imgUrl: "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/dfc11bb0-4af5-4e9b-9458-99f615cc685a.jpg",
          hrefUrl: "/category/1005000",
          type: "1"
        },
        {
          id: "18",
          imgUrl: "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/1ba86bcc-ae71-42a3-bc3e-37b662f7f07e.jpg",
          hrefUrl: "/category/1013001",
          type: "1"
        }
      ]
    }
  } else if (distributionSite === '2') {
    return {
      code: "1",
      msg: "操作成功",
      result: [
        {
          id: "19",
          imgUrl: "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/6d202d8e-bb47-4f92-9523-f32ab65754f4.jpg",
          hrefUrl: "/category/1013001",
          type: "2"
        },
        {
          id: "20",
          imgUrl: "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/e83efb1b-309c-46f7-98a3-f1fefa694338.jpg",
          hrefUrl: "/category/1005000",
          type: "2"
        }
      ]
    }
  } else {
    return {
      code: "1",
      msg: "操作成功",
      result: []
    }
  }

})

//新鲜好物
Mock.mock('/mock/home/new','get',{
    "code": "1",
    "msg": "操作成功",
    "result": [
        {
            "id": "4008506",
            "name": "平步青云财神家居摆件",
            "desc": "艺术家瞿广慈作品，手绘上色，礼盒包装",
            "price": "646.00",
            "picture": "https://yanxuan-item.nosdn.127.net/9d5d0083264344b5d85acde13570d025.jpg",
            "discount": null,
            "orderNum": 60
        },
        {
            "id": "3996270",
            "name": "超能装多功能出行胸包",
            "desc": "小身材，大容量，时尚出行",
            "price": "49.00",
            "picture": "https://yanxuan-item.nosdn.127.net/59b98ddea6422e71de8cec507865984f.png",
            "discount": null,
            "orderNum": 15
        },
        {
            "id": "4000464",
            "name": "趣玩奶酪纯PC拉链拉杆箱（14/20/24/26寸）",
            "desc": "萌趣外形，实用功能，开启愉快旅程",
            "price": "199.00",
            "picture": "https://yanxuan-item.nosdn.127.net/ee5ae3974a18a93f3f4704fe70075e10.png",
            "discount": null,
            "orderNum": 38
        },
        {
            "id": "3997974",
            "name": "入门首选，语音播报电子血压计",
            "desc": "全程语音指导，一键测量，监测心率，贴心守护爸妈健康",
            "price": "109.00",
            "picture": "https://yanxuan-item.nosdn.127.net/8f0c15f981c5cbcb1aa17215a259fa62.png",
            "discount": null,
            "orderNum": 17
        }
    ]

})

//人气推荐
Mock.mock('/mock/home/hot','get',
  {
    "code": "1",
    "msg": "操作成功",
    "result": [
        {
            "id": "1001",
            "picture": "https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/popular_1.jpg",
            "title": "特惠推荐",
            "alt": "它们最实惠"
        },
        {
            "id": "1002",
            "picture": "https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/popular_2.jpg",
            "title": "爆款推荐",
            "alt": "它们最受欢迎"
        },
        {
            "id": "1003",
            "picture": "https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/popular_3.jpg",
            "title": "一站买全",
            "alt": "使用场景下精心优选"
        },
        {
            "id": "1004",
            "picture": "https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/popular_4.jpg",
            "title": "领券中心",
            "alt": "更多超值优惠券"
        }
    ]
}
)

//商品列表
Mock.mock('/mock/home/goods','get',
  {
    "code": "1",
    "msg": "操作成功",
    "result": [{
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
            "https://yanxuan-item.nosdn.127.net/2bbc81469792c1a72bc59701f7888505.jpg",
            "https://yanxuan-item.nosdn.127.net/3bb9962fca4e86c7cc4ac3734a33440a.jpg",
            "https://yanxuan-item.nosdn.127.net/95de6f4e4bb7e10689c4abf21c6414bc.jpg"
        ],
        "specs": [
            {
                "name": "花型",
                "id": "1482373509680332802",
                "values": [
                    {
                        "name": "花与熊",
                        "picture": "https://yanxuan-item.nosdn.127.net/ec3b277074be06a76cfea97fb6f0becc.png",
                        "desc": "外套/套装-销售属性花型-花与熊-规格属性图片"
                    },
                    {
                        "name": "知更鸟",
                        "picture": "https://yanxuan-item.nosdn.127.net/048db169d4788241872a663a10b24637.png",
                        "desc": "外套/套装-销售属性花型-知更鸟-规格属性图片"
                    },
                    {
                        "name": "五角星",
                        "picture": "https://yanxuan-item.nosdn.127.net/06e57bd24ce8bd9c7a464ccaa39591f0.png",
                        "desc": "外套/套装-销售属性花型-五角星-规格属性图片"
                    },
                    {
                        "name": "北极熊",
                        "picture": "https://yanxuan-item.nosdn.127.net/bb6f75f9d1d55f0932f7185a7841589d.png",
                        "desc": "外套/套装-销售属性花型-北极熊-规格属性图片"
                    },
                    {
                        "name": "老虎",
                        "picture": "https://yanxuan-item.nosdn.127.net/bab958a8d5941f61079ab78ec2d3e770.png",
                        "desc": "外套/套装-销售属性花型-老虎-规格属性图片"
                    },
                    {
                        "name": "灰灰与憨憨",
                        "picture": "https://yanxuan-item.nosdn.127.net/cb8d274e79a0936f17553e689d7626b0.png",
                        "desc": "外套/套装-销售属性花型-灰灰与憨憨-规格属性图片"
                    },
                    {
                        "name": "斑马纹",
                        "picture": "https://yanxuan-item.nosdn.127.net/915bd94cf43cf3acc99956724726fcf6.png",
                        "desc": "外套/套装-销售属性花型-斑马纹-规格属性图片"
                    },
                    {
                        "name": "梦幻小猫",
                        "picture": "https://yanxuan-item.nosdn.127.net/64da86bdeb12a0e46d0c871a0088eb1b.png",
                        "desc": "外套/套装-销售属性花型-梦幻小猫-规格属性图片"
                    }
                ]
            },
            {
                "name": "尺码",
                "id": "1482373425295130625",
                "values": [
                    {
                        "name": "90cm",
                        "picture": null,
                        "desc": "外套/套装-销售属性尺码-90cm-规格属性图片"
                    },
                    {
                        "name": "80cm",
                        "picture": null,
                        "desc": "外套/套装-销售属性尺码-80cm-规格属性图片"
                    },
                    {
                        "name": "110cm",
                        "picture": null,
                        "desc": "外套/套装-销售属性尺码-110cm-规格属性图片"
                    },
                    {
                        "name": "100cm",
                        "picture": null,
                        "desc": "外套/套装-销售属性尺码-100cm-规格属性图片"
                    },
                    {
                        "name": "120cm",
                        "picture": null,
                        "desc": "外套/套装-销售属性尺码-120cm-规格属性图片"
                    },
                    {
                        "name": "73cm",
                        "picture": null,
                        "desc": "外套/套装-销售属性尺码-73cm-规格属性图片"
                    },
                    {
                        "name": "130cm",
                        "picture": null,
                        "desc": "外套/套装-销售属性尺码-130cm-规格属性图片"
                    }
                ]
            }
        ],
        "skus": [
            {
                "id": "300248014",
                "skuCode": "300248014",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 1568,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "斑马纹"
                    },
                    {
                        "name": "尺码",
                        "valueName": "73cm"
                    }
                ]
            },
            {
                "id": "300248015",
                "skuCode": "300248015",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 2372,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "斑马纹"
                    },
                    {
                        "name": "尺码",
                        "valueName": "80cm"
                    }
                ]
            },
            {
                "id": "300248016",
                "skuCode": "300248016",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 4912,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "斑马纹"
                    },
                    {
                        "name": "尺码",
                        "valueName": "90cm"
                    }
                ]
            },
            {
                "id": "300248017",
                "skuCode": "300248017",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 4898,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "斑马纹"
                    },
                    {
                        "name": "尺码",
                        "valueName": "100cm"
                    }
                ]
            },
            {
                "id": "300248018",
                "skuCode": "300248018",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 3776,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "斑马纹"
                    },
                    {
                        "name": "尺码",
                        "valueName": "110cm"
                    }
                ]
            },
            {
                "id": "300248019",
                "skuCode": "300248019",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 85,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "斑马纹"
                    },
                    {
                        "name": "尺码",
                        "valueName": "120cm"
                    }
                ]
            },
            {
                "id": "300248020",
                "skuCode": "300248020",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 9144,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "斑马纹"
                    },
                    {
                        "name": "尺码",
                        "valueName": "130cm"
                    }
                ]
            },
            {
                "id": "300248021",
                "skuCode": "300248021",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 7689,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "梦幻小猫"
                    },
                    {
                        "name": "尺码",
                        "valueName": "73cm"
                    }
                ]
            },
            {
                "id": "300248022",
                "skuCode": "300248022",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 6145,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "梦幻小猫"
                    },
                    {
                        "name": "尺码",
                        "valueName": "80cm"
                    }
                ]
            },
            {
                "id": "300248023",
                "skuCode": "300248023",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 1361,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "梦幻小猫"
                    },
                    {
                        "name": "尺码",
                        "valueName": "90cm"
                    }
                ]
            },
            {
                "id": "300248024",
                "skuCode": "300248024",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 1640,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "梦幻小猫"
                    },
                    {
                        "name": "尺码",
                        "valueName": "100cm"
                    }
                ]
            },
            {
                "id": "300248025",
                "skuCode": "300248025",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 4436,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "梦幻小猫"
                    },
                    {
                        "name": "尺码",
                        "valueName": "110cm"
                    }
                ]
            },
            {
                "id": "300248026",
                "skuCode": "300248026",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 752,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "梦幻小猫"
                    },
                    {
                        "name": "尺码",
                        "valueName": "120cm"
                    }
                ]
            },
            {
                "id": "300248027",
                "skuCode": "300248027",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 6235,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "梦幻小猫"
                    },
                    {
                        "name": "尺码",
                        "valueName": "130cm"
                    }
                ]
            },
            {
                "id": "300248028",
                "skuCode": "300248028",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 8126,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "知更鸟"
                    },
                    {
                        "name": "尺码",
                        "valueName": "73cm"
                    }
                ]
            },
            {
                "id": "300248029",
                "skuCode": "300248029",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 4453,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "知更鸟"
                    },
                    {
                        "name": "尺码",
                        "valueName": "80cm"
                    }
                ]
            },
            {
                "id": "300248030",
                "skuCode": "300248030",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 3218,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "知更鸟"
                    },
                    {
                        "name": "尺码",
                        "valueName": "90cm"
                    }
                ]
            },
            {
                "id": "300248031",
                "skuCode": "300248031",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 3005,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "知更鸟"
                    },
                    {
                        "name": "尺码",
                        "valueName": "100cm"
                    }
                ]
            },
            {
                "id": "300248032",
                "skuCode": "300248032",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 3765,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "知更鸟"
                    },
                    {
                        "name": "尺码",
                        "valueName": "110cm"
                    }
                ]
            },
            {
                "id": "300248033",
                "skuCode": "300248033",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 4527,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "知更鸟"
                    },
                    {
                        "name": "尺码",
                        "valueName": "120cm"
                    }
                ]
            },
            {
                "id": "300248034",
                "skuCode": "300248034",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 5348,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "知更鸟"
                    },
                    {
                        "name": "尺码",
                        "valueName": "130cm"
                    }
                ]
            },
            {
                "id": "300248035",
                "skuCode": "300248035",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 5689,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "花与熊"
                    },
                    {
                        "name": "尺码",
                        "valueName": "73cm"
                    }
                ]
            },
            {
                "id": "300248036",
                "skuCode": "300248036",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 9291,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "花与熊"
                    },
                    {
                        "name": "尺码",
                        "valueName": "80cm"
                    }
                ]
            },
            {
                "id": "300248037",
                "skuCode": "300248037",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 7665,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "花与熊"
                    },
                    {
                        "name": "尺码",
                        "valueName": "90cm"
                    }
                ]
            },
            {
                "id": "300248038",
                "skuCode": "300248038",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 3973,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "花与熊"
                    },
                    {
                        "name": "尺码",
                        "valueName": "100cm"
                    }
                ]
            },
            {
                "id": "300248039",
                "skuCode": "300248039",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 177,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "花与熊"
                    },
                    {
                        "name": "尺码",
                        "valueName": "110cm"
                    }
                ]
            },
            {
                "id": "300248040",
                "skuCode": "300248040",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 996,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "花与熊"
                    },
                    {
                        "name": "尺码",
                        "valueName": "120cm"
                    }
                ]
            },
            {
                "id": "300248041",
                "skuCode": "300248041",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 2513,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "花与熊"
                    },
                    {
                        "name": "尺码",
                        "valueName": "130cm"
                    }
                ]
            },
            {
                "id": "300248042",
                "skuCode": "300248042",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 8061,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "五角星"
                    },
                    {
                        "name": "尺码",
                        "valueName": "73cm"
                    }
                ]
            },
            {
                "id": "300248043",
                "skuCode": "300248043",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 8885,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "五角星"
                    },
                    {
                        "name": "尺码",
                        "valueName": "80cm"
                    }
                ]
            },
            {
                "id": "300248044",
                "skuCode": "300248044",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 8411,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "五角星"
                    },
                    {
                        "name": "尺码",
                        "valueName": "90cm"
                    }
                ]
            },
            {
                "id": "300248045",
                "skuCode": "300248045",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 1325,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "五角星"
                    },
                    {
                        "name": "尺码",
                        "valueName": "100cm"
                    }
                ]
            },
            {
                "id": "300248046",
                "skuCode": "300248046",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 3671,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "五角星"
                    },
                    {
                        "name": "尺码",
                        "valueName": "110cm"
                    }
                ]
            },
            {
                "id": "300248047",
                "skuCode": "300248047",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 6861,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "五角星"
                    },
                    {
                        "name": "尺码",
                        "valueName": "120cm"
                    }
                ]
            },
            {
                "id": "300248048",
                "skuCode": "300248048",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 998,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "五角星"
                    },
                    {
                        "name": "尺码",
                        "valueName": "130cm"
                    }
                ]
            },
            {
                "id": "300248049",
                "skuCode": "300248049",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 9453,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "北极熊"
                    },
                    {
                        "name": "尺码",
                        "valueName": "73cm"
                    }
                ]
            },
            {
                "id": "300248050",
                "skuCode": "300248050",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 1374,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "北极熊"
                    },
                    {
                        "name": "尺码",
                        "valueName": "80cm"
                    }
                ]
            },
            {
                "id": "300248051",
                "skuCode": "300248051",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 2858,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "北极熊"
                    },
                    {
                        "name": "尺码",
                        "valueName": "90cm"
                    }
                ]
            },
            {
                "id": "300248052",
                "skuCode": "300248052",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 5024,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "北极熊"
                    },
                    {
                        "name": "尺码",
                        "valueName": "100cm"
                    }
                ]
            },
            {
                "id": "300248053",
                "skuCode": "300248053",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 2026,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "北极熊"
                    },
                    {
                        "name": "尺码",
                        "valueName": "110cm"
                    }
                ]
            },
            {
                "id": "300248054",
                "skuCode": "300248054",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 8154,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "北极熊"
                    },
                    {
                        "name": "尺码",
                        "valueName": "120cm"
                    }
                ]
            },
            {
                "id": "300248055",
                "skuCode": "300248055",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 4650,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "北极熊"
                    },
                    {
                        "name": "尺码",
                        "valueName": "130cm"
                    }
                ]
            },
            {
                "id": "300248056",
                "skuCode": "300248056",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 2990,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "老虎"
                    },
                    {
                        "name": "尺码",
                        "valueName": "73cm"
                    }
                ]
            },
            {
                "id": "300248057",
                "skuCode": "300248057",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 7258,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "老虎"
                    },
                    {
                        "name": "尺码",
                        "valueName": "80cm"
                    }
                ]
            },
            {
                "id": "300248058",
                "skuCode": "300248058",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 4567,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "老虎"
                    },
                    {
                        "name": "尺码",
                        "valueName": "90cm"
                    }
                ]
            },
            {
                "id": "300248059",
                "skuCode": "300248059",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 9174,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "老虎"
                    },
                    {
                        "name": "尺码",
                        "valueName": "100cm"
                    }
                ]
            },
            {
                "id": "300248060",
                "skuCode": "300248060",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 2849,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "老虎"
                    },
                    {
                        "name": "尺码",
                        "valueName": "110cm"
                    }
                ]
            },
            {
                "id": "300248061",
                "skuCode": "300248061",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 7578,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "老虎"
                    },
                    {
                        "name": "尺码",
                        "valueName": "120cm"
                    }
                ]
            },
            {
                "id": "300248062",
                "skuCode": "300248062",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 4542,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "老虎"
                    },
                    {
                        "name": "尺码",
                        "valueName": "130cm"
                    }
                ]
            },
            {
                "id": "300248063",
                "skuCode": "300248063",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 5798,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "灰灰与憨憨"
                    },
                    {
                        "name": "尺码",
                        "valueName": "73cm"
                    }
                ]
            },
            {
                "id": "300248064",
                "skuCode": "300248064",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 4667,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "灰灰与憨憨"
                    },
                    {
                        "name": "尺码",
                        "valueName": "80cm"
                    }
                ]
            },
            {
                "id": "300248065",
                "skuCode": "300248065",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 3227,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "灰灰与憨憨"
                    },
                    {
                        "name": "尺码",
                        "valueName": "90cm"
                    }
                ]
            },
            {
                "id": "300248066",
                "skuCode": "300248066",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 5725,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "灰灰与憨憨"
                    },
                    {
                        "name": "尺码",
                        "valueName": "100cm"
                    }
                ]
            },
            {
                "id": "300248067",
                "skuCode": "300248067",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 8157,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "灰灰与憨憨"
                    },
                    {
                        "name": "尺码",
                        "valueName": "110cm"
                    }
                ]
            },
            {
                "id": "300248068",
                "skuCode": "300248068",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 6863,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "灰灰与憨憨"
                    },
                    {
                        "name": "尺码",
                        "valueName": "120cm"
                    }
                ]
            },
            {
                "id": "300248069",
                "skuCode": "300248069",
                "price": "199.00",
                "oldPrice": "199.00",
                "inventory": 7115,
                "specs": [
                    {
                        "name": "花型",
                        "valueName": "灰灰与憨憨"
                    },
                    {
                        "name": "尺码",
                        "valueName": "130cm"
                    }
                ]
            }
        ],
        "categories": [
            {
                "id": "109243018",
                "name": "外套/套装",
                "layer": 2,
                "parent": {
                    "id": "1011000",
                    "name": "母婴",
                    "layer": 1,
                    "parent": null
                }
            },
            {
                "id": "1011000",
                "name": "母婴",
                "layer": 1,
                "parent": null
            }
        ],
        "details": {
            "pictures": [
                "https://yanxuan-item.nosdn.127.net/d7a0988846e600029eb4be9820bbb123.jpg"
            ],
            "properties": [
                {
                    "name": "品牌",
                    "value": "网易严选推荐选品，本产品为马克珍妮（marc&janie）品牌，由杭州紫音服饰有限公司生产"
                },
                {
                    "name": "适用年龄",
                    "value": "6-9岁、3-6岁、1-3岁"
                },
                {
                    "name": "适用季节",
                    "value": "冬季、秋季"
                },
                {
                    "name": "童装品类",
                    "value": "套装"
                }
            ]
        },
        "isPreSale": false,
        "isCollect": null,
        "recommends": null,
        "userAddresses": null,
        "similarProducts": [
            {
                "id": "3995195",
                "name": "毛茸茸暖意，儿童羊羔绒外套73-120cm",
                "desc": "宽松版型，搭出休闲风格",
                "price": "99.00",
                "picture": "https://yanxuan-item.nosdn.127.net/1661541f80bc9776e64125b7d586c9e6.jpg",
                "discount": null,
                "orderNum": 1
            },
            {
                "id": "3995846",
                "name": "加绒加厚，儿童保暖时尚卫衣套装73-120cm",
                "desc": "舒棉绒内里，抵御寒冬",
                "price": "199.00",
                "picture": "https://yanxuan-item.nosdn.127.net/21d2e9b754487aa3030ce105493a9473.jpg",
                "discount": null,
                "orderNum": 66
            },
            {
                "id": "3994471",
                "name": "甜酷运动风，儿童卫衣运动套装73-130cm",
                "desc": "轻松搭配，一套活力尽显",
                "price": "179.00",
                "picture": "https://yanxuan-item.nosdn.127.net/767fc11b88b1e7b795319cd78c65f72f.png",
                "discount": null,
                "orderNum": 65
            },
            {
                "id": "3994908",
                "name": "90%白鸭绒，儿童棒球领轻薄羽绒服73-140cm",
                "desc": "儿童棒球轻羽绒外套，保暖常备单品",
                "price": "159.00",
                "picture": "https://yanxuan-item.nosdn.127.net/6d8d6772df51fa60c2e899a16ac34718.png",
                "discount": null,
                "orderNum": 40
            }
        ],
        "hotByDay": [
            {
                "id": "3997974",
                "name": "入门首选，语音播报电子血压计",
                "desc": "全程语音指导，一键测量，监测心率，贴心守护爸妈健康",
                "price": "109.00",
                "picture": "https://yanxuan-item.nosdn.127.net/8f0c15f981c5cbcb1aa17215a259fa62.png",
                "discount": null,
                "orderNum": 22
            },
            {
                "id": "3996270",
                "name": "超能装多功能出行胸包",
                "desc": "小身材，大容量，时尚出行",
                "price": "49.00",
                "picture": "https://yanxuan-item.nosdn.127.net/59b98ddea6422e71de8cec507865984f.png",
                "discount": null,
                "orderNum": 20
            },
            {
                "id": "3994432",
                "name": "平台严选x敦煌博物馆鹿游仙踪植萃车载香氛",
                "desc": "复古敦煌色系，植萃天然香氛，安全健康孕婴可用",
                "price": "33.90",
                "picture": "https://yanxuan-item.nosdn.127.net/15db90ea8c8c7456c1fee4e18abb25da.png",
                "discount": null,
                "orderNum": 34
            },
            {
                "id": "4000277",
                "name": "21春季新品，宝宝舒适四季连体衣0-3岁",
                "desc": "拥抱新生，A类婴幼儿标准，安全放心",
                "price": "79.00",
                "picture": "https://yanxuan-item.nosdn.127.net/6efe85e63ab1e09896e1c99a9fe09d9e.png",
                "discount": null,
                "orderNum": 28
            }
        ],
        "evaluationInfo": {
            "id": "1480429705176813570",
            "orderInfo": null,
            "member": null,
            "score": 5,
            "tags": null,
            "content": "系统默认好评",
            "pictures": null,
            "officialReply": null,
            "praiseCount": 662,
            "createTime": "2022-01-10 14:42:01",
            "praisePercent": 1
        }
    }]
}
)
