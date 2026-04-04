'use strict';

import mongoose, { Document, Schema } from 'mongoose';

export interface OTPDocument extends Document {
  email: string;
  otp: string;
  createdAt: Date;
}

const otpSchema = new Schema<OTPDocument>(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    otp: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: () => new Date(),
      expires: '5m', // TTL index: document expires 5 minutes after creation
    },
  },
  {
    timestamps: true,
  }
);

// Ensure TTL index exists
otpSchema.index({ createdAt: 1 }, { expireAfterSeconds: 0 });

export const OTPModel = mongoose.model<OTPDocument>('OTP', otpSchema);
