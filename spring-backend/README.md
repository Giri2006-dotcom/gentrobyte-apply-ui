# Gentrobyte OTP Backend (Spring Boot)

This is a standalone Spring Boot backend that provides email OTP verification for the Gentrobyte Internship Portal.

## Features

- MongoDB-based OTP persistence with automatic expiration (5 minutes)
- `/api/send-otp` and `/api/verify-otp` REST endpoints
- Email sending via Spring Mail (Gmail or any SMTP provider)

---

## Running

1. Set required environment variables or configure `application.yml`:

```yaml
spring:
  data:
    mongodb:
      uri: mongodb://localhost:27017/gentrobyte
  mail:
    host: smtp.gmail.com
    port: 465
    username: your.email@gmail.com
    password: your-app-password
```

2. Run the app:

```bash
mvn spring-boot:run
```

3. Test endpoints:

- `/send-otp` with `{ "email": "you@example.com" }`
- `/verify-otp` with `{ "email": "you@example.com", "otp": "123456" }`

---

## Notes

- OTP entries auto-expire after 5 minutes via MongoDB TTL index.
- The email body is plain text and contains a simple 6-digit OTP.
