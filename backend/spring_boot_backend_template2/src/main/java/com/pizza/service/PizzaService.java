package com.pizza.service;

import com.pizza.dto.ItemDTO;
import com.pizza.pojos.Item;
import com.pizza.repository.PizzaRepository;
import com.pizza.response.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public interface PizzaService {

    public List<ItemDTO> getAllPizzas();

    public ItemDTO getPizzaDetails(Long id);

    public Item getPizzaDetailsItem(Long id);

    public ApiResponse addPizza(Item pizza);

    public ApiResponse updatePizzaDetails(long id, Item updatedPizzaDetails);

    public ApiResponse deletePizzaDetails(long id);

    public Item getPizzaDetailsItemCart(Long id);
}
