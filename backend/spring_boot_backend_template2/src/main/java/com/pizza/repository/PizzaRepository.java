package com.pizza.repository;

import com.pizza.pojos.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PizzaRepository extends JpaRepository<Item, Long> {

    @Query("SELECT i FROM Item i LEFT JOIN FETCH i.itemSizes WHERE i.id = :id")
    Optional<Item> findByIdWithItemSizes(Long id);
}
