package com.pizza.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
public class ItemSizeDTO {
    private String size;
    private BigDecimal price;
}

