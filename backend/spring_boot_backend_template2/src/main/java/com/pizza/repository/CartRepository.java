package com.pizza.repository;

import com.pizza.pojos.User;
import org.springframework.data.jpa.repository.JpaRepository;

import com.pizza.pojos.Cart;

import java.util.Optional;

public interface CartRepository extends JpaRepository<Cart, Long> {


    Cart findByUser(User user);

    Optional<Object> findByUserId(Long userId);
}
