package com.pizza.service;


import com.pizza.pojos.Cart;
import com.pizza.pojos.User;
import com.pizza.repository.CartRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@AllArgsConstructor
public class CartService {

    private final CartRepository cartRepository;


    public Cart findCartByUser(User user){
        return cartRepository.findByUser(user);
    }

    public void saveCart(Cart cart) {
        cartRepository.save(cart);
    }
}
