"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var config_1 = require("./config/config");
var users_routes_1 = __importDefault(require("./routes/users.routes"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var swagger_1 = __importDefault(require("./config/swagger"));
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, cors_1.default)({
    origin: ['http://localhost:3000', 'https://tudominio.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use((0, morgan_1.default)('dev')); //Nos sirve para ver los llamados en consola
app.use(express_1.default.json());
app.use(users_routes_1.default);
app.listen(config_1.PORT);
console.log("Server on port", config_1.PORT);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default));
//# sourceMappingURL=index.js.map