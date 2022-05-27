"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const profile_controller_1 = require("../controllers/profile.controller");
const routes = express_1.default.Router();
routes.get("/", profile_controller_1.profile);
exports.default = routes;
//# sourceMappingURL=profile.route.js.map