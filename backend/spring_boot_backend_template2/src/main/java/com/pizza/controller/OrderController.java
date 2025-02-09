package com.pizza.controller;


import com.pizza.exception.ApiException;
import com.pizza.pojos.*;
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
    public ResponseEntity<?> createOrder(@RequestHeader("Authorization") String jwt, @RequestBody Address address) {
//
        User user = userService.findUserProfileByJwt(jwt);
//        User user = userService.findById(1L);

        Long id = user.getId();
        Order order = orderService.createOrder(id);
        orderService.clearCartByUserId(id); // Clear the cart after creating the order
        return ResponseEntity.ok("done");

    }

    @GetMapping("/getAllOrdersOfUser")
    public ResponseEntity<?> getAllOrders(@RequestHeader("Authorization") String jwt) {
        User user = userService.findUserProfileByJwt(jwt);
        Long id = user.getId();
        List<Order> orders = orderService.getAllOrders(id);
        return ResponseEntity.ok(orders);

    }
}
