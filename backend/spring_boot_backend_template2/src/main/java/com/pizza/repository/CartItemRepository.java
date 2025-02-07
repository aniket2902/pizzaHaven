package com.pizza.repository;

import com.pizza.pojos.Cart;
import com.pizza.pojos.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {


    List<CartItem> findAllByCart(Cart cart);
}
