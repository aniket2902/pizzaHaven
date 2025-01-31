package com.pizza.pojo;

import jakarta.persistence.Embeddable;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ContactInformation {
    @Id
    private Long id;
    private String email;
    private String mobile;
    private String twitter;
    private String instagram;

   
}
