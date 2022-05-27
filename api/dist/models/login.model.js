"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const login_1 = require("../validations/login");
const Login = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: true,
        validate: [login_1.emailValidate, "Please fill the valid email address"],
    },
    password: {
        type: String,
        required: true,
    },
});
const LoginModel = mongoose_1.default.model("LoginModel", Login);
exports.default = LoginModel;
//# sourceMappingURL=login.model.js.map