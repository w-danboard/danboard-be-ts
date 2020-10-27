import express, { Express, Request, Response, NextFunction } from 'express'
import createError from 'http-errors'
import logger from 'morgan'
import { getMessage } from './common/utils'
const app: Express = express()

import { User } from './controller'

app.use(logger('dev')) // 打印请求日志
app.use(express.json()) // 解析JSON格式的请求体
app.use(express.urlencoded({ extended: true })) // 解析表单格式的请求体

// 路由相关
app.use('/users', User)

app.use(function(_req: Request, _res: Response, next: NextFunction) {
  next(createError(getMessage(404)))
})
app.use(function(error: any, _req: Request, res: Response, _next: NextFunction) {
  res.status(error.status || getMessage(500))
  res.json({
    success: false,
    error
  })
})

export default app