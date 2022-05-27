"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailValidate = void 0;
function emailValidate(email) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
}
exports.emailValidate = emailValidate;
//# sourceMappingURL=login.js.map