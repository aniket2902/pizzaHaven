package com.pizza.service;

import com.pizza.dto.ItemDTO;
import com.pizza.dto.ItemSizeDTO;
import com.pizza.exception.ApiException;
import com.pizza.pojos.Item;
import com.pizza.repository.PizzaRepository;
import com.pizza.response.ApiResponse;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class PizzaServiceImpl implements PizzaService {



    @Autowired
    private PizzaRepository pizzaRepository;

    @Autowired
    private ModelMapper modelMapper;



    @Override
    public Item getPizzaDetailsItem(Long id) {
        return pizzaRepository.findById(id).orElseThrow(() -> new ApiException("pizza not found"));
    }
@Override
@Transactional(readOnly = true)
    public Item getPizzaDetailsItemCart(Long id) {
        return pizzaRepository.findByIdWithItemSizes(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid pizza ID"));
    }


    @Override
    @Transactional(readOnly = true)
    public List<ItemDTO> getAllPizzas() {
        List<Item> pizzas = pizzaRepository.findAll();
        return pizzas.stream().map(item -> modelMapper.map(item, ItemDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public ItemDTO getPizzaDetails(Long id) {
        Item pizza=pizzaRepository.findById(id).orElseThrow(()->new ApiException("pizza not found"));

        ItemDTO itemDTO = modelMapper.map(pizza, ItemDTO.class);

        if (pizza.getItemSizes() != null) {
            itemDTO.setItemSizes(pizza.getItemSizes().stream()
                    .map(itemSize -> modelMapper.map(itemSize, ItemSizeDTO.class)).collect(Collectors.toList()));
        }

        return itemDTO;
    }



    @Override
    public ApiResponse addPizza(Item pizza) {
        if (pizza.getItemSizes() != null) {
            pizza.getItemSizes().forEach(size -> size.setItem(pizza));
        }
        pizzaRepository.save(pizza);
        return new ApiResponse("Pizza added successfully");
    }

    @Override
    public ApiResponse updatePizzaDetails(long id, Item updatedPizzaDetails) {
        Item pizza = pizzaRepository.findById(id)
                .orElseThrow(() -> new ApiException("pizza not found"));

        pizza.setName(updatedPizzaDetails.getName());
        pizza.setDescription(updatedPizzaDetails.getDescription());
        pizza.setImageUrl(updatedPizzaDetails.getImageUrl());

        if (updatedPizzaDetails.getItemSizes() != null) {
            updatedPizzaDetails.getItemSizes().forEach(size -> size.setItem(pizza));
            pizza.setItemSizes(updatedPizzaDetails.getItemSizes());
        }

        pizzaRepository.save(pizza);
        return new ApiResponse("Pizza updated successfully");
    }

    @Override
    public ApiResponse deletePizzaDetails(long id) {
        Item pizza = pizzaRepository.findById(id).orElseThrow(() -> new ApiException("pizza not found"));
        pizzaRepository.delete(pizza);
        return new ApiResponse("Pizza deleted successfully");
    }
}
