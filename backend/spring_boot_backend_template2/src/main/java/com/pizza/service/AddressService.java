package com.pizza.service;


import com.pizza.pojos.Address;
import com.pizza.pojos.Cart;
import com.pizza.pojos.User;
import com.pizza.repository.AddressRepository;
import com.pizza.repository.CartRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class AddressService {

    private final AddressRepository addressRepository;


    public List<Address> findByUser(User user) {
        return addressRepository.findAllByUser(user);
    }

    public void updateAddress(Address incomingAddress) {
        Address existingAddress = addressRepository.findById(incomingAddress.getId())
                .orElseThrow(() -> new IllegalArgumentException("Address not found"));
        existingAddress.setStreet(incomingAddress.getStreet());
        existingAddress.setCity(incomingAddress.getCity());
        existingAddress.setState(incomingAddress.getState());
        existingAddress.setZipCode(incomingAddress.getZipCode());
        addressRepository.save(existingAddress);
    }
}
