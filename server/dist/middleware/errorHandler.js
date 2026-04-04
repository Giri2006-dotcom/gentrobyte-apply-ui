'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
function errorHandler(err, _req, res, _next) {
    console.error(err);
    const statusCode = err?.statusCode ?? 500;
    const message = err?.message ?? 'Internal Server Error';
    res.status(statusCode).json({ success: false, message });
}
