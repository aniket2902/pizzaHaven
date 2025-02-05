package com.pizza.security;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.pizza.dto.FullUserDTO;

public class CustomUserDetailsImpl implements UserDetails {
	
	private FullUserDTO userEntity;
	
	public CustomUserDetailsImpl(FullUserDTO userEntity) {
		super();
		this.userEntity = userEntity;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		
		return List.of
				(new SimpleGrantedAuthority(
						userEntity.getRole().name()));
		
	}

	@Override
	public String getPassword() {
		return userEntity.getPassword();
	}

	@Override
	public String getUsername() {
		return userEntity.getEmail();
	}
	
	public FullUserDTO getUserEntity() {
		return userEntity;
	}

}
