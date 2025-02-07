package com.pizza.dto;

import com.pizza.domain.USER_ROLE;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AuthResp {
	private String message;
	private String jwt;
	private USER_ROLE role;
}
