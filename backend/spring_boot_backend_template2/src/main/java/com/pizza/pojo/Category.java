package com.pizza.pojo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Category {
    @Id
    private Long id;
}
