'use strict';

import { NextFunction, Request, Response, Router } from 'express';
import { OTPModel } from '../models/otp.model';
import { createMailer } from '../config/mailer';
import { generateOtp } from '../utils/createOtp';

export const otpRouter = Router();

interface SendOtpRequest {
  email?: string;
}

interface VerifyOtpRequest {
  email?: string;
  otp?: string;
}

otpRouter.post(
  '/send-otp',
  async (req: Request<{}, {}, SendOtpRequest>, res: Response, next: NextFunction) => {
    try {
      const email = req.body.email?.toLowerCase().trim();

      if (!email) {
        return res.status(400).json({ success: false, message: 'Email is required' });
      }

      const otp = generateOtp();

      // Store OTP; TTL index expires it automatically after 5 minutes.
      await OTPModel.create({ email, otp });

      const transporter = createMailer();

      await transporter.sendMail({
        to: email,
        from: process.env.EMAIL_FROM ?? process.env.EMAIL_USER,
        subject: 'Your Gentrobyte Application OTP',
        text: `Your verification code is: ${otp}\n\nThis code will expire in 5 minutes.`,
        html: `<p>Your verification code is: <strong>${otp}</strong></p><p>This code will expire in <strong>5 minutes</strong>.</p>`,
      });

      return res.json({ success: true, message: 'OTP sent successfully' });
    } catch (error) {
      next(error);
    }
  }
);

otpRouter.post(
  '/verify-otp',
  async (req: Request<{}, {}, VerifyOtpRequest>, res: Response, next: NextFunction) => {
    try {
      const email = req.body.email?.toLowerCase().trim();
      const otp = req.body.otp?.trim();

      if (!email || !otp) {
        return res.status(400).json({ success: false, message: 'Email and OTP are required' });
      }

      const record = await OTPModel.findOne({ email, otp }).exec();

      if (!record) {
        return res.status(400).json({ success: false, message: 'Invalid or expired OTP' });
      }

      // Optionally delete used OTP to prevent replay usage.
      await record.deleteOne();

      return res.json({ success: true, message: 'OTP verified successfully' });
    } catch (error) {
      next(error);
    }
  }
);
