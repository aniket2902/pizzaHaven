package com.pizza.pojos;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "reviews")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    private String review;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "selected_item_id")
    private ItemSize selectedItem;

    @Column(name = "created_at")
    private final LocalDateTime createdAt = LocalDateTime.now();
}
