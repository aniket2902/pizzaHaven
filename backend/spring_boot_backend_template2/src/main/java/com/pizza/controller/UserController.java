package com.pizza.controller;

import com.pizza.pojos.User;
import com.pizza.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@AllArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id) {
        try {
            User user = userService.findById(id);

            return ResponseEntity.status(HttpStatus.OK).body(user);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Something went Wrong");
        }
    }

    @GetMapping("/allUsers")
    public ResponseEntity<?> getAllUsers() {
        try {
            List<User> user = userService.findAll();

            return ResponseEntity.status(HttpStatus.OK).body(user);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Something went Wrong");
        }
    }


    @PutMapping("/updateUser")
    public ResponseEntity<?> updateUser(@RequestBody User incomingUser) {
        try {
            User existingUser = userService.findById(incomingUser.getId());
            existingUser.setName(incomingUser.getName());
            existingUser.setEmail(incomingUser.getEmail());
            existingUser.setPassword(incomingUser.getPassword());
            existingUser.setPhoneNumber(incomingUser.getPhoneNumber());
            existingUser.setStatus(incomingUser.getStatus());
            existingUser.setRole(incomingUser.getRole());

            userService.save(existingUser);
            
            return ResponseEntity.status(HttpStatus.OK).body("User is Updated");

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went Wrong");
        }
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteUserById(@PathVariable Long id) {
        try{
            User user = userService.findById(id);
            userService.delete(user);
            return ResponseEntity.status(HttpStatus.OK).body("User is Deleted");
        }
        catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Could not delete the User");
        }

    }
}
