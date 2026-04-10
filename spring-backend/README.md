# Gentrobyte Internship Backend (Spring Boot)

This Spring Boot backend provides email OTP verification, JWT authentication, MongoDB-backed application submission, and deployment-ready containerization.

## Features

- `/api/auth/send-otp` and `/api/auth/verify-otp` for email-based OTP verification
- Backward compatibility with legacy `/send-otp` and `/verify-otp` routes
- MongoDB entities: `User`, `OtpVerification`, and `Application`
- JWT authentication for protected routes
- Protected application creation and status retrieval
- SMTP mail support via Spring Mail
- Dockerfile for container deployment

## REST API Endpoints

- `POST /api/auth/send-otp`
  - Request body: `{ "email": "user@example.com" }`
- `POST /api/auth/verify-otp`
  - Request body: `{ "email": "user@example.com", "otp": "123456" }`
  - Response includes a JWT token
- `POST /api/applications/create`
  - Protected route; requires `Authorization: Bearer <token>`
  - Request body includes applicant details
- `GET /api/applications/status/{id}`
  - Protected route; requires `Authorization: Bearer <token>`

> Legacy frontend compatibility: the backend still handles `/send-otp` and `/verify-otp` so existing UI calls continue working.

## Configuration

Update `src/main/resources/application.properties` with your environment values:

```properties
spring.data.mongodb.uri=mongodb://localhost:27017/GENTROBYTE_db
spring.data.mongodb.database=GENTROBYTE_db

spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=YOUR_EMAIL@gmail.com
spring.mail.password=YOUR_SMTP_PASSWORD

spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true

security.jwt.secret=YOUR_SECRET_KEY_MINIMUM_32_CHARS
security.jwt.expiration-ms=3600000

server.port=8081
```

## Run Locally

```bash
cd spring-backend
mvn spring-boot:run
```

## Build and Run with Docker

```bash
cd spring-backend
docker build -t gentrobyte-backend .
docker run -p 8081:8081 --env-file .env gentrobyte-backend
```

`docker run` should include environment or mounted configuration for MongoDB and SMTP credentials.

## Redeploying the Updated Backend

1. Update `application.properties` or set environment variables for:
   - `spring.data.mongodb.uri`
   - `spring.mail.host`
   - `spring.mail.port`
   - `spring.mail.username`
   - `spring.mail.password`
   - `security.jwt.secret`
2. Rebuild the project:
   - `mvn clean package`
3. Rebuild the Docker image:
   - `docker build -t gentrobyte-backend .`
4. Restart the container or redeploy to your hosting environment.

## Notes for Frontend Integration

- Frontend can continue calling existing OTP endpoints without UI changes.
- After OTP verification, the backend returns a JWT token.
- Protected application endpoints require the token in the `Authorization` header.
