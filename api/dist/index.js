"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: ".env.local" });
const profile_route_1 = __importDefault(require("./routes/profile.route"));
const login_route_1 = __importDefault(require("./routes/login.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: false,
}));
app.use("/profile", profile_route_1.default);
app.use("/login", login_route_1.default);
const url = process.env.mongodb_url;
function main() {
    try {
        mongoose_1.default.connect(url, () => {
            console.log("connected", url);
        });
    }
    catch (err) {
        console.log(err);
    }
    app.listen(process.env.PORT, () => console.log("server is running"));
    app.get("/", (_, res) => {
        res.send("hello world");
    });
}
main();
//# sourceMappingURL=index.js.map