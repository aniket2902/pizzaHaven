package com.pizza.pojo;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
public class Outlet {
    @Id
    private Long id;
	private String name;
    private String description;
    
    @ManyToOne
    @JoinColumn(name = "address_id")
    private Address address;
    
    @Embedded
    private ContactInformation contactInformation;
    
    private String openingHours; 
    
    @JsonIgnore
    @OneToMany(mappedBy="outlet",cascade=CascadeType.ALL,orphanRemoval = true)
    
    private List<Order> orders=new ArrayList<>();
    
    private LocalDateTime registrationDate;
    
    private boolean open;
    
    @JsonIgnore
    @OneToMany(mappedBy = "outlet",cascade = CascadeType.ALL)
    private List<Food> foods=new ArrayList<>();
}
