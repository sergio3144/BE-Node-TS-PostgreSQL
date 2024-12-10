"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
var pg_1 = __importDefault(require("pg"));
var config_1 = require("./config/config");
exports.pool = new pg_1.default.Pool({
    user: config_1.DB_USER,
    host: config_1.DB_HOST,
    password: config_1.DB_PASSWORD,
    database: config_1.DB_DATABASE,
    port: config_1.DB_PORT,
});
//# sourceMappingURL=db.js.map