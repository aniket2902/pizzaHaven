package com.pizza.service;

import com.pizza.dto.FullUserDTO;
import com.pizza.pojos.User;
import com.pizza.response.ApiResponse;

public interface UserService {
	ApiResponse registerNewUser(FullUserDTO dto);

    User findUserProfileByJwt(String jwt);

    User findById(Long id);
}

