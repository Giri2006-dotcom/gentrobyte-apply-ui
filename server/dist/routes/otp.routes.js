'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.otpRouter = void 0;
const express_1 = require("express");
const otp_model_1 = require("../models/otp.model");
const mailer_1 = require("../config/mailer");
const createOtp_1 = require("../utils/createOtp");
exports.otpRouter = (0, express_1.Router)();
exports.otpRouter.post('/send-otp', async (req, res, next) => {
    try {
        const email = req.body.email?.toLowerCase().trim();
        if (!email) {
            return res.status(400).json({ success: false, message: 'Email is required' });
        }
        const otp = (0, createOtp_1.generateOtp)();
        // Store OTP; TTL index expires it automatically after 5 minutes.
        await otp_model_1.OTPModel.create({ email, otp });
        const transporter = (0, mailer_1.createMailer)();
        await transporter.sendMail({
            to: email,
            from: process.env.EMAIL_FROM ?? process.env.EMAIL_USER,
            subject: 'Your Gentrobyte Application OTP',
            text: `Your verification code is: ${otp}\n\nThis code will expire in 5 minutes.`,
            html: `<p>Your verification code is: <strong>${otp}</strong></p><p>This code will expire in <strong>5 minutes</strong>.</p>`,
        });
        return res.json({ success: true, message: 'OTP sent successfully' });
    }
    catch (error) {
        next(error);
    }
});
exports.otpRouter.post('/verify-otp', async (req, res, next) => {
    try {
        const email = req.body.email?.toLowerCase().trim();
        const otp = req.body.otp?.trim();
        if (!email || !otp) {
            return res.status(400).json({ success: false, message: 'Email and OTP are required' });
        }
        const record = await otp_model_1.OTPModel.findOne({ email, otp }).exec();
        if (!record) {
            return res.status(400).json({ success: false, message: 'Invalid or expired OTP' });
        }
        // Optionally delete used OTP to prevent replay usage.
        await record.deleteOne();
        return res.json({ success: true, message: 'OTP verified successfully' });
    }
    catch (error) {
        next(error);
    }
});
