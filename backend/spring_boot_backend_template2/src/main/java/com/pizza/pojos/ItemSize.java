    package com.pizza.pojos;

    import com.fasterxml.jackson.annotation.JsonBackReference;
    import com.pizza.domain.AVAILABLE_SIZES;
    import jakarta.persistence.*;
    import lombok.AllArgsConstructor;
    import lombok.Data;
    import lombok.EqualsAndHashCode;
    import lombok.NoArgsConstructor;

    import java.math.BigDecimal;
    import java.time.LocalDateTime;

    @EqualsAndHashCode(callSuper = true)
    @Data
    @Entity
    @NoArgsConstructor
    @AllArgsConstructor
    @Table(name = "item_size")
    public class ItemSize extends BaseEntity{

        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "item_id")
        private Item item;

        @Enumerated(EnumType.STRING)
        private AVAILABLE_SIZES size;

        private BigDecimal price;
    }
