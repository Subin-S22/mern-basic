"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const profile = new mongoose_1.default.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        required: true,
    },
    photo: {
        type: Object,
        required: true,
    },
});
const Profile = mongoose_1.default.model("profile", profile);
exports.default = Profile;
//# sourceMappingURL=profile.js.map