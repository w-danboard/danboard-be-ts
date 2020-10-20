import chai from 'chai'
import chaiHTTP from 'chai-http'
// import { sequelize, User } from '../model/index1'

chai.use(chaiHTTP)

// 会在所有的单元测试之前执行
before(async () => {
  // 先让模型里的定义和数据库里的定义同步一下
  // sequelize.sync()
})

// 会在每个单元测试之前执行
beforeEach(async () => {

})

// 会在每个单元测试之后执行
afterEach(async () => {

})

// 会在所有的单元测试之后执行
after(async () => {

})