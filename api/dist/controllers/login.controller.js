"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.login = void 0;
async function login(req, res) {
    try {
        if (req.body.email === "subin@gmail.com" && req.body.password === "1234") {
            res.status(200).json({ message: "successfully logged in" });
        }
        else {
            res.status(400).json({ message: "Login crendentials is not valid" });
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}
exports.login = login;
function auth(req, res, next) {
    if (req.body.email && req.body.password)
        next();
    else
        res.status(400).send({ message: "Provide valid credentials" });
}
exports.auth = auth;
//# sourceMappingURL=login.controller.js.map