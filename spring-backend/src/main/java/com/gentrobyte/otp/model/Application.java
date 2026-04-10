package com.gentrobyte.otp.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "applications")
public class Application {

    @Id
    private String id;

    private String applicantEmail;

    private String name;

    private String gender;

    private String whatsappNumber;

    private String college;

    private String degree;

    private String year;

    private String portfolioUrl;

    private String status;

    private Date submittedAt;

    public Application() {
        // default constructor for Spring Data
    }

    public Application(String applicantEmail,
                       String name,
                       String gender,
                       String whatsappNumber,
                       String college,
                       String degree,
                       String year,
                       String portfolioUrl,
                       String status,
                       Date submittedAt) {
        this.applicantEmail = applicantEmail;
        this.name = name;
        this.gender = gender;
        this.whatsappNumber = whatsappNumber;
        this.college = college;
        this.degree = degree;
        this.year = year;
        this.portfolioUrl = portfolioUrl;
        this.status = status;
        this.submittedAt = submittedAt;
    }

    public String getId() {
        return id;
    }

    public String getApplicantEmail() {
        return applicantEmail;
    }

    public void setApplicantEmail(String applicantEmail) {
        this.applicantEmail = applicantEmail;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getWhatsappNumber() {
        return whatsappNumber;
    }

    public void setWhatsappNumber(String whatsappNumber) {
        this.whatsappNumber = whatsappNumber;
    }

    public String getCollege() {
        return college;
    }

    public void setCollege(String college) {
        this.college = college;
    }

    public String getDegree() {
        return degree;
    }

    public void setDegree(String degree) {
        this.degree = degree;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getPortfolioUrl() {
        return portfolioUrl;
    }

    public void setPortfolioUrl(String portfolioUrl) {
        this.portfolioUrl = portfolioUrl;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getSubmittedAt() {
        return submittedAt;
    }

    public void setSubmittedAt(Date submittedAt) {
        this.submittedAt = submittedAt;
    }
}
