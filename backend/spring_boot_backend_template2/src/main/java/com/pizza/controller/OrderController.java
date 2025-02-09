package com.pizza.controller;


import com.pizza.exception.ApiException;
import com.pizza.pojos.Cart;
import com.pizza.pojos.CartItem;
import com.pizza.pojos.Order;
import com.pizza.pojos.User;
import com.pizza.service.CartItemListService;
import com.pizza.service.CartService;
import com.pizza.service.OrderService;
import com.pizza.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/orders")
@AllArgsConstructor
public class OrderController {

    private final OrderService orderService;
    private final UserService userService;
    private final CartService cartService;
    private final CartItemListService cartItemListService;


    @PostMapping("/create")
    public ResponseEntity<?> createOrder(@RequestHeader("Authorization") String jwt) {
        User user = userService.findUserProfileByJwt(jwt);
        Long id = user.getId();
        Order order = orderService.createOrder(id);
        return ResponseEntity.ok(order);
    }
}
