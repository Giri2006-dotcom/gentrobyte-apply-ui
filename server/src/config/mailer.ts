'use strict';

import nodemailer from 'nodemailer';

/**
 * Creates a nodemailer transporter using SMTP credentials from environment variables.
 *
 * To use Gmail:
 * 1) Create an App Password (recommended) at https://myaccount.google.com/security
 * 2) Set EMAIL_HOST=smtp.gmail.com, EMAIL_PORT=465 (or 587), and EMAIL_SECURE=true
 * 3) Set EMAIL_USER to your Gmail address and EMAIL_PASS to the app password.
 *
 * Alternatively, configure any SMTP provider by setting the same variables.
 */
export function createMailer() {
  const host = process.env.EMAIL_HOST;
  const port = Number(process.env.EMAIL_PORT ?? 587);
  const secure = process.env.EMAIL_SECURE === 'true';
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!host || !user || !pass) {
    throw new Error(
      'Missing email configuration. Please set EMAIL_HOST, EMAIL_USER, and EMAIL_PASS in your environment.'
    );
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });
}

export type Mailer = ReturnType<typeof createMailer>;
