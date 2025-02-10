package com.pizza.repository;

import com.pizza.dto.OrderDTO;
import com.pizza.pojos.Cart;
import com.pizza.pojos.CartItem;
import com.pizza.pojos.Order;
import com.pizza.pojos.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    @Query("SELECT o FROM Order o LEFT JOIN FETCH o.orderItemList oi LEFT JOIN FETCH oi.selectedItem WHERE o.user = :user")
    List<Order> findByUserWithOrderItems(User user);

    List<Order> findByUser(User user);

//    @Query("SELECT o FROM Order o LEFT JOIN FETCH o.orderItemList oi LEFT JOIN FETCH oi.selectedItem")
//    List<Order> findAllOrdersWithItems();
//
//
//    @Query("SELECT new com.pizza.dto.OrderDTO(o.id, o.status, o.totalPrice, new com.pizza.dto.OrderItemDTO(oi.id, oi.quantity, oi.price, oi.selectedItem.size)) FROM Order o LEFT JOIN o.orderItemList oi WHERE o.user = :user")
//    List<OrderDTO> findOrderDTOsByUser(User user);






}


