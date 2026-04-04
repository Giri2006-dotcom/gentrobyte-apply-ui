package com.gentrobyte.otp.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Represents an OTP entry stored in MongoDB.
 *
 * The createdAt field is indexed with a TTL so documents expire automatically
 * after 5 minutes.
 */
@Document(collection = "otps")
public class OtpEntry {

    @Id
    private String id;

    private String email;

    private String otp;

    @Indexed(name = "otpCreatedAt", expireAfterSeconds = 300)
    private Date createdAt;

    public OtpEntry() {
        // Default constructor required by Spring Data
    }

    public OtpEntry(String email, String otp, Date createdAt) {
        this.email = email;
        this.otp = otp;
        this.createdAt = createdAt;
    }

    public String getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getOtp() {
        return otp;
    }

    public void setOtp(String otp) {
        this.otp = otp;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
}
