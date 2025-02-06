package com.pizza.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pizza.dto.FullUserDTO;
import com.pizza.service.UserService;
import com.pizza.utils.JwtUtils;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
		@Autowired
		private  UserService userService;
		@Autowired
	    private  AuthenticationManager authenticationManager;
		@Autowired
	    private JwtUtils jwtUtils;
		
		@PostMapping("/signup")
		@Operation(description = "User signup")
		public ResponseEntity<?> registerUser(@RequestBody @Valid FullUserDTO dto) {
			System.out.println("Registered user "+dto);
			return ResponseEntity.status(HttpStatus.CREATED)
					.body(userService.registerNewUser(dto));
			
		}
	    
	    
}
