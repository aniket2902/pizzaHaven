package com.pizza.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@Data
@NoArgsConstructor
public class ItemDTO {
    private Long id;
    private String name;
    private String description;
    private String imageUrl;
    private List<ItemSizeDTO> itemSizes;

}
