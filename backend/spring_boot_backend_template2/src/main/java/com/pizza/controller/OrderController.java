package com.pizza.controller;


import com.pizza.domain.ORDER_STATUS;
import com.pizza.pojos.*;
import com.pizza.service.CartItemListService;
import com.pizza.service.CartService;
import com.pizza.service.OrderService;
import com.pizza.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

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

    @GetMapping("/changeStatus")
    public ResponseEntity<?> changeOrderStatus(@RequestHeader("Authorization") String jwt,
                                               @RequestParam Long orderId,
                                               @RequestParam String changedStatus){

        User user = userService.findUserProfileByJwt(jwt);
//        if (user == null || (!user.getRole().equals("ADMIN") && !user.getRole().equals("OUTLET_MANAGER"))) {
//            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Unauthorized action");
//        }

        ORDER_STATUS orderStatus;
        try {
            orderStatus = ORDER_STATUS.valueOf(changedStatus.toUpperCase());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("Invalid order status: " + changedStatus);
        }

        return ResponseEntity.ok(orderService.changeOrderStatus(orderId,changedStatus));
    }
}
