package com.pizza.dto;

import com.pizza.domain.AVAILABLE_SIZES;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class OrderItemDTO {
    private Long id;
    private int quantity;
    private Double price;
    private String itemSize;

    public OrderItemDTO(Long id, int quantity, Double price, String itemSize) {
        this.id = id;
        this.quantity = quantity;
        this.price = price;
        this.itemSize = itemSize;
    }
    public OrderItemDTO(){}
}