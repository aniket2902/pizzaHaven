package com.pizza.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pizza.dto.FullUserDTO;
import com.pizza.pojo.User;
import com.pizza.repository.UserRepository;
import com.pizza.response.ApiResponse;

import custom_exceptions.ApiException;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public ApiResponse registerNewUser(FullUserDTO dto) {
		if(userRepository.existsByEmail(dto.getEmail()))
			throw new ApiException("User email already Exists");
		User user = modelMapper.map(dto, User.class);
		
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		User savedUser = userRepository.save(user);
		return new ApiResponse("User Registered with ID " + savedUser.getId());
	}

}
