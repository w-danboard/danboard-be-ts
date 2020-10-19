"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const http_status_code_1 = require("http-status-code");
const morgan_1 = __importDefault(require("morgan"));
let app = express_1.default();
const index_1 = __importDefault(require("./routes/index"));
const users_1 = __importDefault(require("./routes/users"));
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/', index_1.default);
app.use('/users', users_1.default);
app.use(function (_req, _res, next) {
    next(http_errors_1.default(http_status_code_1.NOT_FOUND));
});
app.use(function (error, _req, res, _next) {
    res.status(error.status || http_status_code_1.INTERNAL_SERVER_ERROR);
    res.json({
        success: false,
        error
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map