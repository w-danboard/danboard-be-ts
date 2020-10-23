import chai from 'chai'
import chaiHTTP from 'chai-http'
import { mongoose, User } from '../model'

chai.use(chaiHTTP)

// 会在所有的单元测试之前执行
before(async () => {
  // 模型里的定义和数据库里的定义同步一下
  // mongoose.sync()
})

// 会在每个单元测试之前执行
beforeEach(async () => {
  await User.remove({}) // 清空表
})

// 会在每个单元测试之后执行
afterEach(async () => {
  await User.remove({}) // 清空表
})

// 会在所有的单元测试之后执行
after(async () => {

})