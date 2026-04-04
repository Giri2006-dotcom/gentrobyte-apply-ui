package com.gentrobyte.otp.config;

import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

/**
 * Logs the connected MongoDB database name at startup.
 */
@Component
public class MongoStartupLogger {

    private final MongoTemplate mongoTemplate;

    public MongoStartupLogger(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @EventListener(ApplicationReadyEvent.class)
    public void onApplicationReady() {
        System.out.println("Connected to DB: " + mongoTemplate.getDb().getName());
    }
}
