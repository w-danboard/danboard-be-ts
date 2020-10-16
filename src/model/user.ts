import { Model, DataTypes } from 'sequelize'
import { sequelize } from './sequelize'

/**
 * 每个数据库表会对应一个模型Model
 * Model里面封装了针对数据库的各种操作
 */
 class User extends Model {}
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, { sequelize, modelName: 'user' })

  // sync就是同步，把我们定义的模型结构同步到数据库里
  // sequelize.sync().then(() => {
  //   User.create({
  //     username: 'zahgnsan',
  //     password: '123456',
  //     email: 'zhangsan@qq.com' 
  //   })
  // }).then((result: void) => {
  //   console.log(result)
  // })

  export { User }