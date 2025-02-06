package com.pizza.pojos;

import com.pizza.domain.AVAILABLE_SIZES;
import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "item_size")
public class ItemSize extends BaseEntity{
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_id")
    private Item item;

    private AVAILABLE_SIZES size;
    private BigDecimal price;
}
