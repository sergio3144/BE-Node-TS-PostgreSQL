"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
var swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.2',
        tags: [
            {
                name: 'Users',
                description: 'API operations to users'
            }
            //Pueden ir mas tags, ejm: 'Users', 'Orders', 'Categories', Auth, etc
        ],
        info: {
            title: 'REST API Node.js, Express, TypeScript',
            version: '1.0.0',
            description: 'API Docs for users'
        }
    },
    apis: ['./src/routes/users.routes.ts']
};
var swaggerSpec = (0, swagger_jsdoc_1.default)(swaggerOptions);
exports.default = swaggerSpec;
//# sourceMappingURL=swagger.js.map