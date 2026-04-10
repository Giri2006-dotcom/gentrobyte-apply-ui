package com.gentrobyte.otp.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "otp_verifications")
public class OtpVerification {

    @Id
    private String id;

    private String email;

    private String otp;

    @Indexed(name = "expiryTime", expireAfterSeconds = 0)
    private Date expiryTime;

    private boolean verified;

    public OtpVerification() {
        // Default constructor for Spring Data
    }

    public OtpVerification(String email, String otp, Date expiryTime, boolean verified) {
        this.email = email;
        this.otp = otp;
        this.expiryTime = expiryTime;
        this.verified = verified;
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

    public Date getExpiryTime() {
        return expiryTime;
    }

    public void setExpiryTime(Date expiryTime) {
        this.expiryTime = expiryTime;
    }

    public boolean isVerified() {
        return verified;
    }

    public void setVerified(boolean verified) {
        this.verified = verified;
    }
}
