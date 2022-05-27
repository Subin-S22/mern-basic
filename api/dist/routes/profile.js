"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const profile_1 = __importDefault(require("src/models/profile"));
const routes = express_1.default.Router();
routes.get("/profile", profile_1.default);
//# sourceMappingURL=profile.js.map