package com.pizza.dto;

import com.pizza.pojos.Address;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OutletDto {
	AddressDTO address;
}
