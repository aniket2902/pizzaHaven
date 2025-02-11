package com.pizza.controller;

import com.pizza.pojos.Item;
import com.pizza.response.ApiResponse;
import com.pizza.service.PizzaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pizzas")
public class PizzaController {

    @Autowired
    public PizzaService pizzaService;

    @GetMapping
    public ResponseEntity<?> getAllPizzas(){
        return ResponseEntity.ok(pizzaService.getAllPizzas());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getPizzaDetails(@PathVariable Long id){
        try {
            return ResponseEntity.ok(pizzaService.getPizzaDetails(id));
        }
        catch (RuntimeException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
        }
    }

    @PostMapping
    public ResponseEntity<?> addPizza(@RequestBody Item pizza){
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(pizzaService.addPizza(pizza));
        } catch (RuntimeException e) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponse(e.getMessage()));
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updatePizzaDetails(@PathVariable long id, @RequestBody Item updatedPizzaDetails){
        try{
            return ResponseEntity.status(HttpStatus.OK)
                .body(pizzaService.updatePizzaDetails(id,updatedPizzaDetails));
        } catch (RuntimeException e) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponse(e.getMessage()));
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePizzaDetails(@PathVariable long id) {
        try{
            return ResponseEntity.status(HttpStatus.OK).body(pizzaService.deletePizzaDetails(id));
        }catch (RuntimeException e) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponse(e.getMessage()));
        }
    }
}
