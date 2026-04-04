package com.gentrobyte.otp.config;

import org.springframework.boot.autoconfigure.mail.MailProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;

/**
 * Enables configuration properties for Spring Boot Mail support.
 *
 * To configure Gmail, add the following values to application.yml or application.properties:
 *
 * spring.mail.host=smtp.gmail.com
 * spring.mail.port=465
 * spring.mail.username=your.email@gmail.com
 * spring.mail.password=your-app-password
 * spring.mail.properties.mail.smtp.auth=true
 * spring.mail.properties.mail.smtp.starttls.enable=true
 * spring.mail.properties.mail.smtp.ssl.enable=true
 *
 * Notes:
 * - For Gmail, enable 2-Step Verification and generate an App Password:
 *   https://support.google.com/accounts/answer/185833
 * - For other providers (SendGrid/Mailgun), use the provider's SMTP credentials
 *   or API key as the password, and update host/port accordingly.
 */
@Configuration
@EnableConfigurationProperties(MailProperties.class)
public class MailPropertiesConfig {
    // This class enables support for Spring Boot "spring.mail.*" properties.
}
