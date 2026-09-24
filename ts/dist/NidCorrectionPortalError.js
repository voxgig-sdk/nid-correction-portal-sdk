"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NidCorrectionPortalError = void 0;
class NidCorrectionPortalError extends Error {
    isNidCorrectionPortalError = true;
    sdk = 'NidCorrectionPortal';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.NidCorrectionPortalError = NidCorrectionPortalError;
//# sourceMappingURL=NidCorrectionPortalError.js.map