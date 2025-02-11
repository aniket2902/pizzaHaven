package com.pizza.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.pizza.pojos.Outlet;


public interface OutletRepository extends JpaRepository<Outlet, Long>{
	@Query(value = """
	        SELECT * FROM outlet
	         ORDER BY (6371 * 
	            acos(
	                cos(radians(:latitude)) * 
	                cos(radians(latitude)) * 
	                cos(radians(longitude) - radians(:longitude)) + 
	                sin(radians(:latitude)) * 
	                sin(radians(latitude))
	            )
	        ) 
	        ASC 
	        LIMIT 1
	    """, nativeQuery = true)
	    Outlet findNearestOutlet(@Param("latitude") double latitude, @Param("longitude") double longitude);
}
