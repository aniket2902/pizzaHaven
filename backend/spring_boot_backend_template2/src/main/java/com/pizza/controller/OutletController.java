package com.pizza.controller;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pizza.dto.OutletDto;
import com.pizza.pojos.Outlet;
import com.pizza.repository.OutletRepository;
import com.pizza.response.ApiResponse;

@RestController
@RequestMapping("/outlet")
@CrossOrigin(origins = "http://localhost:5173") // Allow React Frontend
public class OutletController {

    private final OutletRepository outletRepository;
    @Autowired
    ModelMapper modelMapper;

    public OutletController(OutletRepository outletRepository) {
        this.outletRepository = outletRepository;
    }

    @GetMapping("/nearest")
    public ResponseEntity<?> getNearestRestaurant(
            @RequestParam double latitude,
            @RequestParam double longitude) {
        Outlet outlet=outletRepository.findNearestOutlet(latitude, longitude);
        	try {
        			return ResponseEntity.status(HttpStatus.CREATED).body(modelMapper.map(outlet,OutletDto.class));
        		} catch (RuntimeException e) {
        			return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponse(e.getMessage()));
        		} 
   }
}

