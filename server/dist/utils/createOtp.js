'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOtp = generateOtp;
const crypto_1 = __importDefault(require("crypto"));
/**
 * Generates a cryptographically secure 6-digit OTP (100000-999999).
 */
function generateOtp() {
    const value = crypto_1.default.randomInt(100000, 1000000);
    return value.toString();
}
