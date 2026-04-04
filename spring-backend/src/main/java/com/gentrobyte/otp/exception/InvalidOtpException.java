package com.gentrobyte.otp.exception;

/**
 * Exception thrown when an OTP is invalid.
 */
public class InvalidOtpException extends RuntimeException {

    public InvalidOtpException() {
        super("Invalid OTP. Please check your code and try again.");
    }
}
