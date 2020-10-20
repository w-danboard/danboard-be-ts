/**
 * 查询 https://mongoosejs.com/docs/api/model.html#model_Model.find
 * @param {model} modelName 模型名称 
 * @param {object|objectId} filter 查询条件 {name: 'wanglin', age: { $gte: 18 }}
 * @param {object|string|Array<string>} projection 包含字段 'name friends'
 * @param {object} options { skip: 10 }
 */
function find (modelName, filter = {}, projection = null, options = null) {
  return new Promise((resolve, reject) => {
    modelName.find(filter, projection, options).exec((err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}

export {
  find
}