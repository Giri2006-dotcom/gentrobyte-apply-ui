package com.gentrobyte.otp.controller;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gentrobyte.otp.model.Application;
import com.gentrobyte.otp.service.ApplicationService;

@RestController
@RequestMapping("/api/applications")
@Validated
public class ApplicationController {

    private final ApplicationService applicationService;

    public ApplicationController(ApplicationService applicationService) {
        this.applicationService = applicationService;
    }

    public static class CreateApplicationRequest {

        @NotBlank(message = "Name is required")
        private String name;

        @NotBlank(message = "Gender is required")
        private String gender;

        @NotBlank(message = "WhatsApp number is required")
        @Pattern(regexp = "^\\+?[0-9]{7,15}$", message = "WhatsApp number must be a valid phone number")
        private String whatsappNumber;

        @NotBlank(message = "College is required")
        private String college;

        @NotBlank(message = "Degree is required")
        private String degree;

        @NotBlank(message = "Academic year is required")
        private String year;

        private String portfolioUrl;

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
    }

    public static class ApplicationStatusResponse {

        private final String id;
        private final String status;
        private final String name;
        private final String submittedAt;

        public ApplicationStatusResponse(Application application) {
            this.id = application.getId();
            this.status = application.getStatus();
            this.name = application.getName();
            this.submittedAt = application.getSubmittedAt() != null ? application.getSubmittedAt().toString() : null;
        }

        public String getId() {
            return id;
        }

        public String getStatus() {
            return status;
        }

        public String getName() {
            return name;
        }

        public String getSubmittedAt() {
            return submittedAt;
        }
    }

    @PostMapping("/create")
    public ResponseEntity<ApplicationStatusResponse> createApplication(
            Authentication authentication,
            @Valid @RequestBody CreateApplicationRequest request) {
        String email = authentication.getName();
        Application application = applicationService.createApplication(
                email,
                request.getName(),
                request.getGender(),
                request.getWhatsappNumber(),
                request.getCollege(),
                request.getDegree(),
                request.getYear(),
                request.getPortfolioUrl());
        return ResponseEntity.ok(new ApplicationStatusResponse(application));
    }

    @GetMapping("/status/{id}")
    public ResponseEntity<ApplicationStatusResponse> getApplicationStatus(
            Authentication authentication,
            @PathVariable("id") String id) {
        String email = authentication.getName();
        Application application = applicationService.getApplicationStatus(id, email);
        return ResponseEntity.ok(new ApplicationStatusResponse(application));
    }
}
