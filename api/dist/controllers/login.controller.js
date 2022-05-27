"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.login = void 0;
const login_model_1 = __importDefault(require("../models/login.model"));
async function login(req, res) {
    try {
        if (!req.body.id)
            return res.status(400).json({ error: "Bad request" });
        const users = await login_model_1.default.findById(req.body.id);
        console.log("users in login", users);
        if (!users)
            return res
                .status(400)
                .json({ message: "Login crendentials is not valid" });
        res.json({ message: "successfully logged in" });
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
    return;
}
exports.login = login;
function auth(req, res, next) {
    console.log(req);
    if (req.body.email)
        next();
    res.status(400).send({ error: "error" });
    return;
}
exports.auth = auth;
//# sourceMappingURL=login.controller.js.map