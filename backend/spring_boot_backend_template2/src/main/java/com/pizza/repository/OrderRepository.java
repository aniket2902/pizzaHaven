package com.pizza.repository;

import com.pizza.pojos.Cart;
import com.pizza.pojos.CartItem;
import com.pizza.pojos.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {



}
