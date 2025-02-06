package com.pizza.security;

import com.pizza.dto.FullUserDTO;
import com.pizza.exception.ApiException;
import com.pizza.pojos.User;
import com.pizza.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class CustomUserDetailsServiceImpl implements UserDetailsService {


	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		User user = userRepository.findByEmail(email)
				.orElseThrow(() -> new ApiException("Email not found !!!!"));
		FullUserDTO userDto = modelMapper.map(user, FullUserDTO.class);
		return new CustomUserDetailsImpl(userDto);
	}

}
