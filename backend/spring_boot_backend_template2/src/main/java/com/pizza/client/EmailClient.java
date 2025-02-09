package com.pizza.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.pizza.dto.EmailUserDTO;
import com.pizza.dto.UserRequestDTO;

@FeignClient(name = "email-service")
public interface EmailClient {
	
	@PostMapping("/api/emails/sendMailData")
    ResponseEntity<EmailUserDTO> createUser(@RequestBody UserRequestDTO userRequestDTO);
	
	@GetMapping("/api/emails/myfirst")
     void getUser();
	
}
