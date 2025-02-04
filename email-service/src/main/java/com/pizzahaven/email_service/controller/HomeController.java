package com.pizzahaven.email_service.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/emails")
public class HomeController {
    @GetMapping
    public ResponseEntity<?> demoHello() {
        return ResponseEntity.ok("Hello World!");
    }
}
