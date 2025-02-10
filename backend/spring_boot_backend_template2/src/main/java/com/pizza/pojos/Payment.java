package com.pizza.pojos;

import com.pizza.domain.PAYMENT_METHOD;
import com.pizza.domain.PAYMENT_STATUS;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
@Table(name = "payments")
public class Payment extends BaseEntity{
    private BigDecimal amount;

    @Enumerated(EnumType.STRING)
    private PAYMENT_METHOD paymentMethod;

    @Enumerated(EnumType.STRING)
    private PAYMENT_STATUS paymentStatus;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id")
    private Order order;
}
