package com.pizza.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pizza.client.EmailClient;

import com.pizza.domain.USER_ROLE;
import com.pizza.dto.EmailUserDTO;
import com.pizza.dto.UserRequestDTO;
import com.pizza.exception.UserException;
import com.pizza.pojos.Cart;
import com.pizza.pojos.User;
import com.pizza.repository.CartRepository;
import com.pizza.repository.UserRepository;
import com.pizza.request.LoginRequest;
import com.pizza.response.AuthResponse;
import com.pizza.security.CustomUserDetailsService;
import com.pizza.security.JwtProvider;

import feign.FeignException;
import jakarta.validation.Valid;


@RestController
@RequestMapping("/auth")
public class AuthController {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private JwtProvider jwtProvider;
	
	@Autowired
	private CustomUserDetailsService customUserDetails;
	
	@Autowired
	private CartRepository cartRepository;
	
	@Autowired
	EmailClient emailClient;
	
	ResponseEntity<EmailUserDTO> emailUserDTO;
		
	@PostMapping("/signup")
	public ResponseEntity<AuthResponse> createUserHandler(@Valid @RequestBody User user) throws UserException {

		String email = user.getEmail();
		String password = user.getPassword();
		String fullName = user.getName();
		USER_ROLE role=user.getRole();
		String phoneNumber = user.getPhoneNumber();
		
		 String emailId ="yashawatade38@gmail.com";
	     String subject="Hi from SpringBoot Common Service";
	     String text = "Tested!!";
	      
	       

		User isEmailExist = userRepository.findByEmail(email).orElse(null);

		if (isEmailExist!=null) {

			throw new UserException("Email Is Already Used With Another Account");
		}

		// Create new user
		User createdUser = new User();
		createdUser.setEmail(email);
		createdUser.setName(fullName);
		createdUser.setPassword(passwordEncoder.encode(password));
		createdUser.setRole(role);
		createdUser.setPhoneNumber(phoneNumber);

		User savedUser = userRepository.save(createdUser);
		System.out.println(new UserRequestDTO(emailId,subject,text) + "Email CALL");

//		try {
//			emailUserDTO=emailClient.createUser(new UserRequestDTO(email,subject,text));
//
//		}
//		catch(FeignException.Conflict ce) {
//			   System.out.println("Email not sent");
//
//		}
		
		
		Cart cart = new Cart();
		cart.setUser(savedUser);
		//Cart savedCart = cartRepository.save(cart);
//		savedUser.setCart(savedCart);

		List<GrantedAuthority> authorities=new ArrayList<>();

		authorities.add(new SimpleGrantedAuthority(role.toString()));


		Authentication authentication = new UsernamePasswordAuthenticationToken(email, password,authorities);
		SecurityContextHolder.getContext().setAuthentication(authentication);

		String token = jwtProvider.generateToken(authentication);

		AuthResponse authResponse = new AuthResponse();
		authResponse.setJwt(token);
		authResponse.setMessage("Register Success");
		authResponse.setRoles(role);
		authResponse.setName(email);

		return new ResponseEntity<>(authResponse, HttpStatus.OK);

	}
	
	@PostMapping("/signin")
	public ResponseEntity<AuthResponse> signin(@RequestBody LoginRequest loginRequest) {

		String username = loginRequest.getEmail();
		String password = loginRequest.getPassword();

		System.out.println(username + " ----- " + password);

		Authentication authentication = authenticate(username, password);
		SecurityContextHolder.getContext().setAuthentication(authentication);

		String token = jwtProvider.generateToken(authentication);
		AuthResponse authResponse = new AuthResponse();

		authResponse.setMessage("Login Success");
		authResponse.setJwt(token);
		Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();


		String roleName = authorities.isEmpty() ? null : authorities.iterator().next().getAuthority();


		authResponse.setRoles(USER_ROLE.valueOf(roleName));
		authResponse.setName(username);

		return new ResponseEntity<AuthResponse>(authResponse, HttpStatus.OK);
	}
	
	private Authentication authenticate(String username, String password) {
		UserDetails userDetails = customUserDetails.loadUserByUsername(username);

		System.out.println("sign in userDetails - " + userDetails);

		if (userDetails == null) {
			System.out.println("sign in userDetails - null " + userDetails);
			throw new BadCredentialsException("Invalid username or password");
		}
		if (!passwordEncoder.matches(password, userDetails.getPassword())) {
			System.out.println("sign in userDetails - password not match " + userDetails);
			throw new BadCredentialsException("Invalid username or password");
		}
		return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
	}
	
	
	
	
	
	
}
