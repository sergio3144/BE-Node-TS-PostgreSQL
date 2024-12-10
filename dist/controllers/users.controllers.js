"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserPut = exports.deleteUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
var db_1 = require("../db");
var getUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var rows;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_1.pool.query('SELECT * FROM users')];
            case 1:
                rows = (_a.sent()).rows;
                res.json(rows);
                return [2 /*return*/];
        }
    });
}); };
exports.getUsers = getUsers;
var getUserById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, rows, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, db_1.pool.query('SELECT * FROM users WHERE id = $1', [id])];
            case 1:
                rows = (_a.sent()).rows;
                if (rows.length === 0) {
                    return [2 /*return*/, res.status(404).json({ message: 'User not found' })];
                }
                res.json(rows[0]);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUserById = getUserById;
var createUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, rows, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                user = req.body;
                return [4 /*yield*/, db_1.pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [user.name, user.email])];
            case 1:
                rows = (_a.sent()).rows;
                return [2 /*return*/, res.status(201).json({
                        message: 'User created',
                        user: rows[0]
                    })];
            case 2:
                error_2 = _a.sent();
                if ((error_2 === null || error_2 === void 0 ? void 0 : error_2.code) === '23505') {
                    return [2 /*return*/, res.status(409).json({ message: 'Email already exists' })];
                }
                console.log(error_2);
                return [2 /*return*/, res.status(500).json({ message: 'Internal server error' })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createUser = createUser;
var deleteUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, rowCount;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, db_1.pool.query('DELETE FROM users WHERE id = $1', [id])];
            case 1:
                rowCount = (_a.sent()).rowCount;
                if (rowCount === 0) {
                    return [2 /*return*/, res.status(404).json({ message: 'User not found' })];
                }
                return [2 /*return*/, res.json({ message: 'User deleted' })];
        }
    });
}); };
exports.deleteUser = deleteUser;
var updateUserPut = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, user, rows;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                user = req.body;
                return [4 /*yield*/, db_1.pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *', [user.name, user.email, id])];
            case 1:
                rows = (_a.sent()).rows;
                return [2 /*return*/, res.json(rows[0])];
        }
    });
}); };
exports.updateUserPut = updateUserPut;
//# sourceMappingURL=users.controllers.js.map