import mongoose from './mongoose'
const Schema = mongoose.Schema

// 定义用户集合的骨架模型
const UserSchema = new Schema({
  createTime: {
    type: Date,
    default: Date.now
  },
  username: {
    type: String,
    required: true, // 是否必须
    trim: true      // 删除左右两边的空格
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  }
})

// 定义用户模型
const User = mongoose.model('User', UserSchema)

export default User