package com.pizza.response;

import com.pizza.domain.USER_ROLE;

import lombok.Data;

@Data
public class AuthResponse {
	private String jwt;
	
	private String message;
	
	private USER_ROLE roles;
	
	private String name;
}
