package com.pizza.service;

import com.pizza.domain.ORDER_STATUS;
import com.pizza.dto.OrderDTO;
import com.pizza.dto.OrderItemDTO;
import com.pizza.dto.OrderStatus;
import com.pizza.pojos.*;
import com.pizza.repository.AddressRepository;
import com.pizza.repository.OrderRepository;
import com.pizza.repository.CartRepository;
import com.pizza.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.hibernate.Hibernate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
@AllArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final CartRepository cartRepository;
    private final UserRepository userRepository;
    private final AddressRepository addressRepository;

    public Order createOrder(Long userId, Address address) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        Cart cart = cartRepository.findByUserIdWithCartItems(userId).orElseThrow(() -> new RuntimeException("Cart not found"));

        if (address.getId() == null) {
            addressRepository.save(address);

        } else {
            address = addressRepository.findById(address.getId()).orElseThrow(() -> new RuntimeException("User not found"));
        }

        Order order = new Order();
        order.setUser(user);
        order.setAddress(address);
        order.setStatus(ORDER_STATUS.IN_PROGRESS);
        order.setTotalPrice(cart.getCartItems().stream().mapToDouble(item -> item.getItemSize().getPrice().doubleValue() * item.getQuantity()).sum());

        List<OrderItem> orderItems = cart.getCartItems().stream().map(cartItem -> {
            OrderItem orderItem = new OrderItem();
            orderItem.setOrder(order);
            orderItem.setUser(user);
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

    public void clearCartByUserId(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        Cart cart = cartRepository.findByUser(user);
        cartRepository.delete(cart);
    }

//    @Transactional
//    public List<OrderDTO> getAllOrders(Long id) {
//
//        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
//        return orderRepository.findOrderDTOsByUser(user);
//
//    }

    //    @Transactional
//    public List<Order> gOrders(Long id) {
//        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
//        List<Order> order = orderRepository.findByUserId(user);
//        for(Order o : order)
//            Hibernate.initialize(o.getOrderItemList());
//        return order;
//    }
    @Transactional
    public List<OrderDTO> byid(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        List<Order> orders = orderRepository.findByUser(user);
        List<OrderDTO> od = new ArrayList<OrderDTO>();
        int i;
        for (Order o : orders) {

            OrderDTO internalOd = new OrderDTO();

            i = o.getOrderItemList().size();
            internalOd.setId(o.getId());
            internalOd.setTotalPrice(o.getTotalPrice());
            internalOd.setStatus(o.getStatus().toString());

            List<OrderItemDTO> oid = new ArrayList<>();

            for (OrderItem internalODI : o.getOrderItemList()) {

                OrderItemDTO internaloid = new OrderItemDTO();

                internaloid.setId(internalODI.getId());
                internaloid.setPrice(internalODI.getPrice());
                internaloid.setQuantity(internalODI.getQuantity());
                internaloid.setItemSize(internalODI.getSelectedItem().getSize().toString());

                oid.add(internaloid);

            }
            internalOd.setOrderItemList(oid);

            od.add(internalOd);
        }

        return od;
    }

    @Transactional
    public List<OrderDTO> findAll() {
        List<Order> orders = orderRepository.findAll();
        List<OrderDTO> od = new ArrayList<OrderDTO>();
        int i;
        for (Order o : orders) {

            OrderDTO internalOd = new OrderDTO();

            i = o.getOrderItemList().size();
            internalOd.setId(o.getId());
            internalOd.setTotalPrice(o.getTotalPrice());
            internalOd.setStatus(o.getStatus().toString());

            List<OrderItemDTO> oid = new ArrayList<>();

            for (OrderItem internalODI : o.getOrderItemList()) {

                OrderItemDTO internaloid = new OrderItemDTO();

                internaloid.setId(internalODI.getId());
                internaloid.setPrice(internalODI.getPrice());
                internaloid.setQuantity(internalODI.getQuantity());
                internaloid.setItemSize(internalODI.getSelectedItem().getSize().toString());

                oid.add(internaloid);

            }
            internalOd.setOrderItemList(oid);

            od.add(internalOd);
        }

        return od;
    }

    public void updateStatus(OrderStatus orderStatus) {
        Order order = orderRepository.findById(orderStatus.getId()).orElseThrow(() -> new RuntimeException("Something's wrong"));
        order.setStatus(orderStatus.getStatus());
        orderRepository.save(order);
    }

    public String changeOrderStatus(Long orderId, String changedStatus) {
        Optional<Order> optionalOrder = orderRepository.findById(orderId);
        if (optionalOrder.isEmpty()) {
            return "Order not found";
        }
        Order order = optionalOrder.get();
        ORDER_STATUS orderStatus=ORDER_STATUS.valueOf(changedStatus);
        order.setStatus(orderStatus);
        orderRepository.save(order);

        return "Order Status changed successfully";
    }


}