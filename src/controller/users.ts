import express, { Router, Request, Response, NextFunction } from 'express'
// import createError from 'http-errors'
import { User } from '../model'
// import { find } from '../common/db'
let router: Router = express.Router()

// 获取所有用户 GET /users
router.post('/', async (request: Request, response: Response) => {
  // let result: any = await find(User, request.query)
  // response.json({
  //   success: true,
  //   data: result
  // })

  let user = request.body;
  User.create(user, (err) => { // doc为成功后的请求体
    if (!err) {
       response.status(201); // 创建 新增 状态码为201
       response.send({
            code: 0, 
            message: '注册成功!'
        });
    }
});
})

// 获取某个用户 GET /users/:id
router.get('/', async (_request: Request, _response: Response) => {
  // let id = request.params.id
  // let user = await User.findByPk(id)
  // response.json({
  //   success: true,
  //   data: user
  // })
})

// 获取某个用户 GET /users/:id
router.get('/', async (_request: Request, _response: Response) => {
  // let id = request.params.id
  // let user = await User.findByPk(id)
  // response.json({
  //   success: true,
  //   data: user
  // })
})

// 添加一个用户 POST /users
router.get('/', async (_request: Request, _response: Response) => {
  // let user = request.body
  // user = await User.create(user) // insert语句插到数据库
  // response.json({
  //   success: true,
  //   data: user
  // })
})

// 更新一个用户 PUT /users/:id
router.get('/', async (_request: Request, _response: Response, _next: NextFunction) => {
  // let id = request.params.id
  // let updateInfo = request.body
  // let user = await User.findByPk(id)
  // if (!user) {
  //   return next(createError()) // delete from users where id=?
  // }
  // user = await user.update(updateInfo)
  // response.json({
  //   success: true,
  //   data: user
  // })
})

export default router