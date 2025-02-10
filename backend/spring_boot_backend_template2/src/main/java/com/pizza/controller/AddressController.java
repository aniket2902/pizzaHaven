package com.pizza.controller;

import com.pizza.dto.AddressDTO;
import com.pizza.pojos.Address;
import com.pizza.pojos.User;
import com.pizza.service.AddressService;
import com.pizza.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/address")
@AllArgsConstructor
public class AddressController {

    private final AddressService addressService;
    private final UserService userService;

    @GetMapping("/")
    public ResponseEntity<?> getUserById(@RequestHeader("Authorization") String jwt) {
        try {

            User user = userService.findUserProfileByJwt(jwt);
            System.out.println(user);
            List<AddressDTO> address = addressService.findAllByUser(user);

            if(address==null || address.isEmpty())
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("There is no address for the user");

            return ResponseEntity.status(HttpStatus.OK).body(address);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Something Went Wrong");
        }
    }

    @PutMapping("/")
    public ResponseEntity<?> updateAddress(@RequestBody Address incomingAddress) {
        try {
            addressService.updateAddress(incomingAddress);
            return ResponseEntity.status(HttpStatus.OK).body("Address Updated");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Unable to update address");
        }
    }


    @GetMapping("/test")
    public ResponseEntity<?> test(@RequestHeader("Authorization") String jwt) {
        System.out.println(jwt);
        User user = userService.findUserProfileByJwt(jwt);
        System.out.println(user);

        return ResponseEntity.status(HttpStatus.OK).body(user);
    }
}
