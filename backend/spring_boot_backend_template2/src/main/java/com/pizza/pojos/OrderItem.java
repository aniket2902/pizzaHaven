package com.pizza.pojos;


import com.pizza.domain.ORDER_STATUS;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "order_items")
public class OrderItem extends BaseEntity{
    private int quantity;
    private Double price;

    @Enumerated(EnumType.STRING)
    private ORDER_STATUS status;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "selected_item_id")
    private ItemSize selectedItem;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id")
    private Order order;
}