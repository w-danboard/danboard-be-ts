"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../app"));
const http_1 = __importDefault(require("http"));
const port = process.env.PORT || 8000;
const server = http_1.default.createServer(app_1.default);
server.listen(port);
server.on('listening', () => {
    console.log('Listening on ' + port);
});
server.on('error', (error) => {
    console.error(error);
});
//# sourceMappingURL=www.js.map