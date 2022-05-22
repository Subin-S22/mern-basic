"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profile = void 0;
async function profile(req, res) {
    new Promise((resolve) => {
        res.json(req.body);
        resolve("success");
    });
}
exports.profile = profile;
//# sourceMappingURL=profile.controller.js.map