package com.gentrobyte.otp.exception;

import java.time.Instant;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

/**
 * Global exception handler to ensure all API responses are JSON and meaningful.
 */
@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(
            MethodArgumentNotValidException ex,
            HttpHeaders headers,
            HttpStatusCode status,
            WebRequest request) {
        Map<String, String> errors = ex.getBindingResult().getFieldErrors().stream()
                .collect(Collectors.toMap(FieldError::getField, FieldError::getDefaultMessage, (a, b) -> a + "; " + b));

        ApiResponse response = new ApiResponse(false, "Validation failed", errors);
        return ResponseEntity.badRequest().body(response);
    }

    @ExceptionHandler(MailException.class)
    public ResponseEntity<ApiResponse> handleMailException(MailException ex) {
        ApiResponse response = new ApiResponse(false, "Failed to send email: " + ex.getMessage());
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
    }

    @ExceptionHandler({InvalidOtpException.class, OtpExpiredException.class})
    public ResponseEntity<ApiResponse> handleOtpExceptions(RuntimeException ex) {
        ApiResponse response = new ApiResponse(false, ex.getMessage());
        return ResponseEntity.badRequest().body(response);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiResponse> handleAll(Exception ex) {
        ApiResponse response = new ApiResponse(false, "Unexpected error: " + ex.getMessage());
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
    }

    /**
     * Standard API response payload.
     */
    public static class ApiResponse {

        private final boolean success;
        private final String message;
        private final Map<String, String> errors;
        private final Instant timestamp;

        public ApiResponse(boolean success, String message) {
            this(success, message, null);
        }

        public ApiResponse(boolean success, String message, Map<String, String> errors) {
            this.success = success;
            this.message = message;
            this.errors = errors;
            this.timestamp = Instant.now();
        }

        public boolean isSuccess() {
            return success;
        }

        public String getMessage() {
            return message;
        }

        public Map<String, String> getErrors() {
            return errors;
        }

        public Instant getTimestamp() {
            return timestamp;
        }
    }
}
