package com.gentrobyte.otp.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.gentrobyte.otp.model.OtpEntry;

@Repository
public interface OtpRepository extends MongoRepository<OtpEntry, String> {

    Optional<OtpEntry> findByEmailAndOtp(String email, String otp);

    void deleteByEmailAndOtp(String email, String otp);
}
