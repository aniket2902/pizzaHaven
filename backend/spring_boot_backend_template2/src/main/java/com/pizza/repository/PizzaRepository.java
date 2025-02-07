package com.pizza.repository;

import com.pizza.pojos.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PizzaRepository extends JpaRepository<Item, Long> {
}
