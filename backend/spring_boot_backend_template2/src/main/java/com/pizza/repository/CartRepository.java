package com.pizza.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pizza.pojos.Cart;

public interface CartRepository extends JpaRepository<Cart, Long> {
	
		
	
}
