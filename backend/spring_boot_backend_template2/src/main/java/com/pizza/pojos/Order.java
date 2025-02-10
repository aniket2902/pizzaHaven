package com.pizza.pojos;

import com.pizza.domain.ORDER_STATUS;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
@Table(name = "orders")
public class Order extends BaseEntity{

    private Double totalPrice;

    @Enumerated(EnumType.STRING)
    private ORDER_STATUS status;

    @ManyToOne
    private User user;

    @OneToMany(mappedBy = "order", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderItem> orderItemList;

    @ManyToOne
    @ToString.Exclude
    private Address address;



}

