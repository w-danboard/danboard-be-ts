#!/usr/bin/env node

import app from '../app'
import http from 'http'
import chalk from 'chalk'

/**
 *  遇到问题: chalk颜色不变
 *  https://blog.csdn.net/zemprogram/article/details/104159342
 */
chalk.level = 1

const port = process.env.PORT || 8000
const server = http.createServer(app)
server.listen(port)

server.on('listening', () => {
  console.log(chalk.greenBright('Listening on '), port)
})

server.on('error', (error) => {
  console.error(chalk.redBright(error))
})