package com.gentrobyte.otp.exception;

/**
 * Exception thrown when an OTP has expired.
 */
public class OtpExpiredException extends RuntimeException {

    public OtpExpiredException() {
        super("OTP has expired. Please request a new code.");
    }
}
