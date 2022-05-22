"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const profile_route_1 = __importDefault(require("./routes/profile.route"));
const app = (0, express_1.default)();
app.use("/", profile_route_1.default);
const url = process.env.mongodb_url;
function main() {
    mongoose_1.default.connect(url, () => {
        console.log("connected");
    });
    app.listen(process.env.PORT, () => console.log("server is running"));
    app.get("/", (_, res) => {
        res.send("hello world");
    });
}
main();
//# sourceMappingURL=index.js.map