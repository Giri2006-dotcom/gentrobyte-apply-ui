'use strict';

import crypto from 'crypto';

/**
 * Generates a cryptographically secure 6-digit OTP (100000-999999).
 */
export function generateOtp(): string {
  const value = crypto.randomInt(100000, 1000000);
  return value.toString();
}
