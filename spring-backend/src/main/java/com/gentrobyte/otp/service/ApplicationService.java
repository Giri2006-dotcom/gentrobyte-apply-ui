package com.gentrobyte.otp.service;

import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import com.gentrobyte.otp.model.Application;
import com.gentrobyte.otp.repository.ApplicationRepository;

@Service
public class ApplicationService {

    private final ApplicationRepository applicationRepository;
    private final UserService userService;

    public ApplicationService(ApplicationRepository applicationRepository, UserService userService) {
        this.applicationRepository = applicationRepository;
        this.userService = userService;
    }

    @Transactional
    public Application createApplication(String email, String name, String gender, String whatsappNumber,
            String college, String degree, String year, String portfolioUrl) {
        if (!userService.isVerified(email)) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Only verified users can submit applications.");
        }

        Application application = new Application(
                email,
                name,
                gender,
                whatsappNumber,
                college,
                degree,
                year,
                portfolioUrl,
                "PENDING",
                new Date());

        return applicationRepository.save(application);
    }

    public Application getApplicationStatus(String applicationId, String email) {
        Application application = applicationRepository.findById(applicationId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Application not found."));

        if (!application.getApplicantEmail().equalsIgnoreCase(email)) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Cannot access application status for another email.");
        }

        return application;
    }
}
