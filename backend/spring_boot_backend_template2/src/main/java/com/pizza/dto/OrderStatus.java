package com.pizza.dto;

import com.pizza.domain.ORDER_STATUS;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class OrderStatus {
    private Long id;
    private ORDER_STATUS status;

}
