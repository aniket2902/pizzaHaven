package com.pizza.pojos;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.LocalDateTime;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
@Table(name = "outlet")
public class Outlet extends BaseEntity{
    @OneToOne
    @JoinColumn(name = "manager_id")
    private User manager;

    @OneToOne
    @JoinColumn(name = "address_id")
    private Address address;
    private double latitude;
    private double longitude;
    
}