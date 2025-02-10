package com.pizza.repository;

import com.pizza.pojos.Address;
import com.pizza.pojos.Item;
import com.pizza.pojos.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {


    List<Address> findAllByUser(User user);
}
