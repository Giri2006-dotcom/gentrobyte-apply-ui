package com.gentrobyte.otp.service;

import java.security.SecureRandom;
import java.util.Date;
import java.util.Optional;

import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gentrobyte.otp.exception.InvalidOtpException;
import com.gentrobyte.otp.exception.OtpExpiredException;
import com.gentrobyte.otp.model.OtpEntry;
import com.gentrobyte.otp.repository.OtpRepository;

/**
 * Business logic for generating, sending, and verifying one-time passwords (OTPs).
 */
@Service
public class OtpService {

    private static final int OTP_LENGTH = 6;
    private static final SecureRandom SECURE_RANDOM = new SecureRandom();

    private final OtpRepository otpRepository;
    private final JavaMailSender mailSender;

    public OtpService(OtpRepository otpRepository, JavaMailSender mailSender) {
        this.otpRepository = otpRepository;
        this.mailSender = mailSender;
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

        saveOtp(normalizedEmail, otp);
        sendOtpEmail(normalizedEmail, otp);
    }

    /**
     * Stores the OTP record in MongoDB.
     */
    private void saveOtp(String email, String otp) {
        OtpEntry entry = new OtpEntry(email, otp, new Date());
        otpRepository.save(entry);
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
     * Verifies the provided OTP for the given email.
     */
    @Transactional
    public void verifyOtp(String email, String otp) {
        String normalizedEmail = email.toLowerCase().trim();
        String normalizedOtp = otp.trim();

        Optional<OtpEntry> optional = otpRepository.findByEmailAndOtp(normalizedEmail, normalizedOtp);

        if (optional.isEmpty()) {
            throw new InvalidOtpException();
        }

        OtpEntry entry = optional.get();
        if (isExpired(entry.getCreatedAt())) {
            otpRepository.deleteByEmailAndOtp(normalizedEmail, normalizedOtp);
            throw new OtpExpiredException();
        }

        otpRepository.deleteByEmailAndOtp(normalizedEmail, normalizedOtp);
    }

    private boolean isExpired(Date createdAt) {
        if (createdAt == null) {
            return true;
        }
        long ageMs = new Date().getTime() - createdAt.getTime();
        return ageMs > 300_000; // 5 minutes
    }
}
