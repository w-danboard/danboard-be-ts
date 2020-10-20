import mongoose from 'mongoose'

// 定义用户集合的骨架模型
let UserSchema = new mongoose.Schema({
  createAt: {
    type: Date,
    default: (Date.now)
  },
  username: {
    type: String,
    required: true, // 是否必须
    trim: true      // 删除左右两边的空格
  },
  password: String,
  email: String
})

// 定义用户模型
let User = mongoose.model('User', UserSchema)

export default User