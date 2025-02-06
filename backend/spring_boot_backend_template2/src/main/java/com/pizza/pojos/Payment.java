package com.pizza.pojos;

import com.pizza.domain.PAYMENT_METHOD;
import com.pizza.domain.PAYMENT_STATUS;
import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "payments")
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private BigDecimal amount;

    @Enumerated(EnumType.STRING)
    private PAYMENT_METHOD paymentMethod;

    @Enumerated(EnumType.STRING)
    private PAYMENT_STATUS paymentStatus;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id")
    private Order order;

    @Column(name = "created_at")
    private final LocalDateTime createdAt = LocalDateTime.now();
}
