package com.pizza.controller;

import com.pizza.domain.AVAILABLE_SIZES;
import com.pizza.dto.CartItemPizzaIdAndSize;
import com.pizza.pojos.Cart;
import com.pizza.pojos.CartItem;
import com.pizza.pojos.ItemSize;
import com.pizza.pojos.User;
import com.pizza.service.CartService;
import com.pizza.service.PizzaService;
import com.pizza.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
@AllArgsConstructor
public class CartController {
    private final CartService cartService;
    private final UserService userService;
    private final PizzaService pizzaService;

    @PostMapping("/addItem")
    @Transactional
    public ResponseEntity<?> addItemToOrder( @RequestBody CartItemPizzaIdAndSize cartItemPizzaIdAndSize) {
//        @RequestHeader("Authorization") String jwt,
        User user = userService.findById(1L);
//        User user = userService.findUserProfileByJwt(jwt);

        Cart cart = cartService.findCartByUser(user);
        if (cart == null) {
            cart = new Cart();
            cart.setUser(user);
            cartService.saveCart(cart);
        }

        AVAILABLE_SIZES incomingSize;
        try {
            incomingSize = AVAILABLE_SIZES.valueOf(cartItemPizzaIdAndSize.getItemSize().toUpperCase());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid size");
        }

        ItemSize itemSize = pizzaService.getPizzaDetailsItemCart(cartItemPizzaIdAndSize.getId()).getItemSizes().stream()
                .filter(size -> size.getSize().equals(incomingSize))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Invalid size"));

        CartItem existingCartItem = cart.getCartItems().stream()
                .filter(cartItem -> cartItem.getItemSize().equals(itemSize))
                .findFirst()
                .orElse(null);

        if (existingCartItem != null) {
            existingCartItem.setQuantity(existingCartItem.getQuantity() + 1);
        } else {
            CartItem newCartItem = new CartItem();
            newCartItem.setCart(cart);
            newCartItem.setItemSize(itemSize);
            newCartItem.setQuantity(1); // Default quantity
            cart.getCartItems().add(newCartItem);
        }

        cartService.saveCart(cart);

        return ResponseEntity.status(HttpStatus.CREATED).body("Item added to cart successfully");
    }
}