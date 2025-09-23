import Mock from 'mockjs'

// 登录接口模拟
Mock.mock('/mock/login', 'post', (options) => {
  const body = JSON.parse(options.body)
  const { account, password } = body

  if (account === 'test' && password === '123456') {
    return Mock.mock({
      code: 200,
      message: '登录成功',
      data: {
        token: '@string(16)', // 随机生成 token
        user: {
          id: '@integer(1, 1000)',
          name: '@name',
          account: account
        }
      }
    })
  } else {
    return {
      code: 401,
      message: '账号或密码错误'
    }
  }
})
