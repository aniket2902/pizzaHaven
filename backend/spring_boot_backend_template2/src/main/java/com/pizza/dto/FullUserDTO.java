package com.pizza.dto;

import com.pizza.domain.USER_ROLE;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FullUserDTO {
    private Long id;
    @NotBlank
    private String name;
    @Email
    private String email;
    @NotBlank
    private String password;
    private String phoneNumber;
    @NotNull
	private USER_ROLE role;
    private String status;

}

