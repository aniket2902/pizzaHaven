package com.pizza.service;

import com.pizza.dto.FullUserDTO;
import com.pizza.pojos.User;
import com.pizza.response.ApiResponse;

import java.util.List;

public interface UserService {
	ApiResponse registerNewUser(FullUserDTO dto);

    User findUserProfileByJwt(String jwt);

    User findById(Long id);


    List<User> findAll();


    void save(User existingUser);

    void delete(User user);
}

