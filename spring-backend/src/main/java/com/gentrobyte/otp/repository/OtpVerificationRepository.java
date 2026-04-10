package com.gentrobyte.otp.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.gentrobyte.otp.model.OtpVerification;

@Repository
public interface OtpVerificationRepository extends MongoRepository<OtpVerification, String> {

    Optional<OtpVerification> findByEmailAndOtp(String email, String otp);

    void deleteByEmailAndOtp(String email, String otp);
}
