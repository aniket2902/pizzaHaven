package com.pizza.pojos;

import com.pizza.domain.AVAILABLE_SIZES;
import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "item_size")
public class ItemSize {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_id")
    private Item item;


    private AVAILABLE_SIZES size;
    private BigDecimal price;

    @Column(name = "created_at")
    private final LocalDateTime createdAt = LocalDateTime.now();
}
