import express, { Router, Request, Response } from 'express'
let router: Router = express.Router()

router.get('/', (_request: Request, response: Response) => {
  response.json({
    success: true,
    data: 'user'
  })
})

export default router