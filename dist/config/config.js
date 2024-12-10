"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.DB_PORT = exports.DB_DATABASE = exports.DB_PASSWORD = exports.DB_HOST = exports.DB_USER = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.DB_USER = process.env.DB_USER;
exports.DB_HOST = process.env.DB_HOST;
exports.DB_PASSWORD = process.env.DB_PASSWORD;
exports.DB_DATABASE = process.env.DB_DATABASE;
exports.DB_PORT = parseInt(process.env.DB_PORT || '5432');
exports.PORT = process.env.PORT || 3000;
//# sourceMappingURL=config.js.map