package com.pizza.pojos;


import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Table(name = "items")
public class Item extends BaseEntity{
    private String name;
    private String description;
    private String imageUrl;

    @OneToMany(mappedBy = "item", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<ItemSize> itemList;
}

