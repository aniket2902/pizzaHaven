package com.pizza.repository;

import com.pizza.pojos.User;
import org.springframework.data.jpa.repository.JpaRepository;

import com.pizza.pojos.Cart;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {


    Cart findByUser(User user);

    Optional<Cart> findByUserId(Long userId);
    @Query("SELECT c FROM Cart c LEFT JOIN FETCH c.cartItems ci LEFT JOIN FETCH ci.itemSize WHERE c.user.id = :userId")
    Optional<Cart> findByUserIdWithCartItems(Long userId);
}
