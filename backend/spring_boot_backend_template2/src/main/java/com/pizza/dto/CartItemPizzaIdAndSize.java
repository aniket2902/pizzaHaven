package com.pizza.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CartItemPizzaIdAndSize {
    private Long id;
    private String itemSize;
}
