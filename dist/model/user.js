"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("./sequelize");
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    username: sequelize_1.DataTypes.STRING,
    password: sequelize_1.DataTypes.STRING,
    email: sequelize_1.DataTypes.STRING
}, { sequelize: sequelize_2.sequelize, modelName: 'user' });
sequelize_2.sequelize.sync().then(() => {
    User.create({
        username: 'zahgnsan',
        password: '123456',
        email: 'zhangsan@qq.com'
    });
}).then((result) => {
    console.log(result);
});
//# sourceMappingURL=user.js.map