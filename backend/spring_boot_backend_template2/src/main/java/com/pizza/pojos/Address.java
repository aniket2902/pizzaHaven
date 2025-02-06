package com.pizza.pojos;


import com.pizza.pojos.User;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "addresses")
public class Address extends BaseEntity {
    private String street;
    private String city;
    private String state;
    private String zipCode;
    private String country;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
}

