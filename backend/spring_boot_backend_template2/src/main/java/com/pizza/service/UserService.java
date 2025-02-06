package com.pizza.service;

import com.pizza.dto.FullUserDTO;
import com.pizza.response.ApiResponse;

public interface UserService {
	ApiResponse registerNewUser(FullUserDTO dto);
	}

