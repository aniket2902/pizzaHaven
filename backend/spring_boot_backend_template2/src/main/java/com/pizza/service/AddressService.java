package com.pizza.service;


import com.pizza.dto.AddressDTO;
import com.pizza.dto.ItemDTO;
import com.pizza.pojos.Address;
import com.pizza.pojos.Cart;
import com.pizza.pojos.User;
import com.pizza.repository.AddressRepository;
import com.pizza.repository.CartRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class AddressService {

    private final AddressRepository addressRepository;
    private final ModelMapper modelMapper;

    public List<AddressDTO> findAllByUser(User user) {

        List<Address> add = addressRepository.findAllByUser(user);
        List<AddressDTO> ad = new ArrayList<>();
        for (Address a : add) {
            AddressDTO adto = modelMapper.map(a, AddressDTO.class);
            ad.add(adto);
        }


        return ad;
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
