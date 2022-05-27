"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profile = void 0;
async function profile(_, res) {
    new Promise((resolve) => {
        res.json({ success: "success" });
        resolve("success");
    });
}
exports.profile = profile;
//# sourceMappingURL=profile.controller.js.map