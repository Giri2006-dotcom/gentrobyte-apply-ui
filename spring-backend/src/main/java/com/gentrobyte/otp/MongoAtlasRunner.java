package com.gentrobyte.otp;

import java.util.Date;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.gentrobyte.otp.model.OtpVerification;
import com.gentrobyte.otp.repository.OtpVerificationRepository;

@Component
public class MongoAtlasRunner implements CommandLineRunner {

    private final OtpVerificationRepository otpVerificationRepository;

    public MongoAtlasRunner(OtpVerificationRepository otpVerificationRepository) {
        this.otpVerificationRepository = otpVerificationRepository;
    }

    @Override
    public void run(String... args) {
        OtpVerification sample = new OtpVerification(
                "sample@example.com",
                "123456",
                new Date(System.currentTimeMillis() + 300_000),
                false);

        otpVerificationRepository.save(sample);
        System.out.println("MongoAtlasRunner: Saved sample OtpVerification document with email=" + sample.getEmail());
    }
}
