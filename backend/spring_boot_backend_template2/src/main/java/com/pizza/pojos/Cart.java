package com.pizza.pojos;

import jakarta.persistence.*;

@Entity
public class Cart extends BaseEntity{
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "selected_item_id")
    private ItemSize selectedItem;
}
