import app from '../app'
import chai, { expect } from 'chai'

describe('测试用户的restful接口', async () => {
  let result = await chai.request(app)
    .post('/users') // 以POST方式请求/users路径
    .set('Content-Type', 'application/json') // 设置请求头的类型
    .send({ username: 'zhangsan', password: '123456', mail: 'zhangsan@qq.com' })

  expect(result).to.have.status(200) // 期待返回200的状态码
  expect(result.body).to.have.property('success')
  expect(result.body).to.have.property('data')
  expect(result.body.success).to.equal(true)
  expect(result.body.data.id).to.equal(1)
})

describe('GET /users 查看所有用户', async () => {
  await chai.request(app)
    .post('/users') // 以POST方式请求/users路径
    .set('Content-Type', 'application/json') // 设置请求头的类型
    .send({ username: 'zhangsan', password: '123456', mail: 'zhangsan@qq.com' })

  await chai.request(app)
    .post('/users') // 以POST方式请求/users路径
    .set('Content-Type', 'application/json') // 设置请求头的类型
    .send({ username: 'lisi', password: '123456', mail: 'lisi@qq.com' })

  let result = await chai.request(app)
    .get('/users')
  
  expect(result).to.have.status(200) // 期待返回200的状态码
  expect(result.body.success).to.equal(true)
  expect(result.body.data).to.have.lengthOf(2)
})