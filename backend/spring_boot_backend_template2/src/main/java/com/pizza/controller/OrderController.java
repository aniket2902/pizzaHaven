package com.pizza.controller;


import com.pizza.pojos.*;
import com.pizza.service.CartItemListService;
import com.pizza.service.CartService;
import com.pizza.service.OrderService;
import com.pizza.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/order")
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
        Order order = orderService.createOrder(id, address);
        orderService.clearCartByUserId(id); // Clear the cart after creating the order
        return ResponseEntity.ok("done");

    }

//    @GetMapping("/getAllOrdersOfUser")
//    public ResponseEntity<?> getAllOrders() {

    /// /  @RequestHeader("Authorization") String jwt,
    /// /        User user = userService.findUserProfileByJwt(jwt);
//        User user = userService.findById(1L);
//        Long id = user.getId();
//        List<OrderDTO> orders = orderService.getAllOrders(id);
//
//        return ResponseEntity.ok(orders);
//
//    }
    @GetMapping("/getOrders")
    public ResponseEntity<?> getOrders(@RequestHeader("Authorization") String jwt) {
        User user = userService.findUserProfileByJwt(jwt);
        return ResponseEntity.ok(orderService.byid(user.getId()));
    }
}
