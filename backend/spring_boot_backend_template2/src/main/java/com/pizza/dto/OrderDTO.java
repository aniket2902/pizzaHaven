package com.pizza.dto;

import com.pizza.domain.ORDER_STATUS;
import com.pizza.pojos.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
public class OrderDTO {
//    private Long id;
//    private ORDER_STATUS status;
//    private Double totalPrice;
//    private List<OrderItemDTO> orderItemList;


    private Long id;
    private String status;
    private Double totalPrice;
    private List<OrderItemDTO> orderItemList;

    public OrderDTO(Long id, String status, Double totalPrice, List<OrderItemDTO> orderItemList) {
        this.id = id;
        this.status = status;
        this.totalPrice = totalPrice;
        this.orderItemList = orderItemList;
    }

    public OrderDTO() {

    }
}