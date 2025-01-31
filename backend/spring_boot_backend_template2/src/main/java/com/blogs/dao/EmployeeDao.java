package com.blogs.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blogs.pojos.Employees;

public interface EmployeeDao extends JpaRepository<Employees, Long> {

	
	
}
