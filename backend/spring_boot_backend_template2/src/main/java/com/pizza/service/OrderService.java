package com.pizza.service;

import com.pizza.pojos.Cart;
import com.pizza.pojos.CartItem;
import com.pizza.pojos.Order;
import com.pizza.pojos.OrderItem;
import com.pizza.pojos.User;
import com.pizza.repository.OrderRepository;
import com.pizza.repository.CartRepository;
import com.pizza.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@AllArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final CartRepository cartRepository;
    private final UserRepository userRepository;

    public Order createOrder(Long userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        Cart cart = (Cart) cartRepository.findByUserId(userId).orElseThrow(() -> new RuntimeException("Cart not found"));

        Order order = new Order();
        order.setUser(user);
        order.setTotalPrice(cart.getCartItems().stream().mapToDouble(item -> item.getItemSize().getPrice().doubleValue() * item.getQuantity()).sum());

        List<OrderItem> orderItems = cart.getCartItems().stream().map(cartItem -> {
            OrderItem orderItem = new OrderItem();
            orderItem.setOrder(order);
            orderItem.setSelectedItem(cartItem.getItemSize());
            orderItem.setQuantity(cartItem.getQuantity());
            orderItem.setPrice(cartItem.getItemSize().getPrice().doubleValue() * cartItem.getQuantity());
            return orderItem;
        }).collect(Collectors.toList());

        order.setOrderItemList(orderItems);

        cart.getCartItems().clear(); // Clear the cart after creating the order
        cartRepository.save(cart);

        return orderRepository.save(order);
    }
}