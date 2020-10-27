// mongoose是一个ORM工具 就是对象模型工具 可以让我们像操作对象一样操作数据库
import mongoose from 'mongoose'
import chalk from 'chalk'
import config from '../config'

let env = process.env.NODE_ENV || 'prod'
let { username, password, db_name } = config[env]

let db = `mongodb://${username}:${password}@152.136.24.175:27017/${db_name}?authSource=admin`

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })

// 连接成功
mongoose.connection.on('connected', function() {
  console.log(chalk.greenBright('Mongoose connection open to '), db_name)
})

// 连接异常
mongoose.connection.on('error', function(err) {
  console.log(chalk.redBright('Mongoose connection error '), err)
})

// 连接断开
mongoose.connection.on('disconnected', function() {
  console.log(chalk.redBright('Mongoose connection disconnected'))
})

export default mongoose