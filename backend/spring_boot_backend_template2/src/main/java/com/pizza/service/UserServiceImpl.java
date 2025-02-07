package com.pizza.service;

import com.pizza.security.JwtProvider;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pizza.dto.FullUserDTO;
import com.pizza.pojos.User;
import com.pizza.repository.UserRepository;
import com.pizza.response.ApiResponse;

import com.pizza.exception.ApiException;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
	

	private final UserRepository userRepository;
	private final ModelMapper modelMapper;
	private final PasswordEncoder passwordEncoder;
	private final JwtProvider jwtProvider;

	@Override
	public ApiResponse registerNewUser(FullUserDTO dto) {
		if(userRepository.existsByEmail(dto.getEmail()))
			throw new ApiException("User email already Exists");
		User user = modelMapper.map(dto, User.class);
		
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		User savedUser = userRepository.save(user);
		return new ApiResponse("User Registered with ID " + savedUser.getId());
	}

	@Override
	public User findUserProfileByJwt(String jwt) {
		String email = jwtProvider.getEmailFromJwtToken(jwt);
        return userRepository.findByEmail(email).orElseThrow(() -> new ApiException("User not found with email: " + email));
	}


}
