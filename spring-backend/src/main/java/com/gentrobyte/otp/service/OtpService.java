package com.gentrobyte.otp.service;

import java.security.SecureRandom;
import java.util.Date;
import java.util.Optional;

import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gentrobyte.otp.config.JwtTokenProvider;
import com.gentrobyte.otp.exception.InvalidOtpException;
import com.gentrobyte.otp.exception.OtpExpiredException;
import com.gentrobyte.otp.model.OtpVerification;
import com.gentrobyte.otp.repository.OtpVerificationRepository;

/**
 * Business logic for generating, sending, and verifying one-time passwords (OTPs).
 */
@Service
public class OtpService {

    private static final int OTP_LENGTH = 6;
    private static final SecureRandom SECURE_RANDOM = new SecureRandom();

    private final OtpVerificationRepository otpVerificationRepository;
    private final UserService userService;
    private final JavaMailSender mailSender;
    private final JwtTokenProvider jwtTokenProvider;

    public OtpService(OtpVerificationRepository otpVerificationRepository,
                      UserService userService,
                      JavaMailSender mailSender,
                      JwtTokenProvider jwtTokenProvider) {
        this.otpVerificationRepository = otpVerificationRepository;
        this.userService = userService;
        this.mailSender = mailSender;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    /**
     * Generates a secure, 6-digit OTP.
     */
    public String generateOtp() {
        int value = SECURE_RANDOM.nextInt(900_000) + 100_000;
        return String.valueOf(value);
    }

    /**
     * Saves the OTP to MongoDB and sends it via email.
     */
    @Transactional
    public void sendOtp(String email) {
        String normalizedEmail = email.toLowerCase().trim();
        String otp = generateOtp();

        userService.createOrGetUser(normalizedEmail);
        saveOtp(normalizedEmail, otp);
        sendOtpEmail(normalizedEmail, otp);
    }

    /**
     * Stores the OTP record in MongoDB.
     */
    private void saveOtp(String email, String otp) {
        Date expiryTime = new Date(System.currentTimeMillis() + 300_000);
        OtpVerification entry = new OtpVerification(email, otp, expiryTime, false);
        otpVerificationRepository.save(entry);
    }

    /**
     * Sends the OTP email.
     */
    private void sendOtpEmail(String email, String otp) {
        String subject = "Gentrobyte Internship Portal - Email Verification";
        String body = "Your verification code is " + otp + ".\n"
            + "Please use this code to verify your email for the Gentrobyte Internship Portal.\n"
            + "This code is valid for 5 minutes.";

        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject(subject);
        message.setText(body);

        try {
            mailSender.send(message);
        } catch (MailException ex) {
            throw new RuntimeException("Failed to send OTP email", ex);
        }
    }

    /**
     * Verifies the provided OTP for the given email and returns a JWT token.
     */
    @Transactional
    public String verifyOtp(String email, String otp) {
        String normalizedEmail = email.toLowerCase().trim();
        String normalizedOtp = otp.trim();

        Optional<OtpVerification> optional = otpVerificationRepository.findByEmailAndOtp(normalizedEmail, normalizedOtp);

        if (optional.isEmpty()) {
            throw new InvalidOtpException();
        }

        OtpVerification entry = optional.get();
        if (isExpired(entry.getExpiryTime())) {
            otpVerificationRepository.deleteByEmailAndOtp(normalizedEmail, normalizedOtp);
            throw new OtpExpiredException();
        }

        otpVerificationRepository.deleteByEmailAndOtp(normalizedEmail, normalizedOtp);
        userService.markVerified(normalizedEmail);
        return jwtTokenProvider.createToken(normalizedEmail);
    }

    private boolean isExpired(Date expiryTime) {
        if (expiryTime == null) {
            return true;
        }
        return expiryTime.before(new Date());
    }
}
