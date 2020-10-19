"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
let sequelize = new sequelize_1.Sequelize('api', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    logging: true
});
exports.sequelize = sequelize;
//# sourceMappingURL=sequelize.js.map