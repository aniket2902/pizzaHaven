package com.pizza.service;


import com.pizza.pojos.Cart;
import com.pizza.pojos.CartItem;
import com.pizza.repository.CartItemRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class CartItemListService {
    private final CartItemRepository cartItemRepository;

    public List<CartItem> findAllByCart(Cart cart){
        List<CartItem> list= cartItemRepository.findAllByCart(cart);
        return list;
    }
}
