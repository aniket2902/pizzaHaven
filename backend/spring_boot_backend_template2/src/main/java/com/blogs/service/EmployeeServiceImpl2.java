package com.blogs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.blogs.custom_exception.ResourceNotFoundException;
import com.blogs.dao.CategoryDao;
import com.blogs.dao.EmployeeDao;
import com.blogs.pojos.Category;
import com.blogs.pojos.Employees;

@Service // Spring bean containing B.L
@Transactional
public class EmployeeServiceImpl2 implements EmployeeService {
	// depcy - dao layer i/f
	@Autowired
	private EmployeeDao employeeDao;

	@Override
	public List<Employees> getAllEmployees() {
		return employeeDao.findAll();		
	}

	@Override
	public String addEmployee(Employees employee) {
		Employees emp = employeeDao.save(employee);
		return "Added new Employee with ID " + emp.getId();
	}

	@Override
	public Employees getEmployee(Long empId) {
		Employees emp = employeeDao.getById(empId);
				
		return emp;
	}

	@Override
	public String updateEmployee(Employees employee) {
		if(employeeDao.existsById(employee.getId())) {
			employeeDao.save(employee);
			return "Employee Updated";
		}
		return "Employee cant be updated, Invalid ID" ;
	}

	@Override
	public String deleteEmployee(Long empId) {
		if(employeeDao.existsById(empId)) {
			employeeDao.deleteById(empId);
			return "Employee Deleted";
		}
		return "Employee cant be deleted, Invalid ID";
	}
	
	
	
	

//	@Override
//	public List<Category> getAllCategories() {
//		// TODO Auto-generated method stub
//		return categoryDao.findAll();
//	}
//
//	@Override
//	public String addNewCategory(Category transientCategory) {
//		Category persistentCategory = categoryDao.save(transientCategory);
//		return "Added new catgroy with ID " + persistentCategory.getId();
//	}
//
//	@Override
//	public String deleteById(Long categoryId) {
//		if (categoryDao.existsById(categoryId)) {
//			categoryDao.deleteById(categoryId);
//		}
//		else {
//			return "Item Not Found";
//		}
//
//		return "Item Deletion Successfull";
//	}
//
//	@Override
//	public Category getCategoryById(Long categoryId) {
//		Category cat = categoryDao.findById(categoryId).orElseThrow(() -> new ResourceNotFoundException("Category Not Found"));
//		return cat;
//	}
//
//	@Override
//	public String udpateCategory(Category category) {
//		if(categoryDao.existsById(category.getId())) {
//			categoryDao.save(category);
//			return "Category Updated Successfully";
//		}
//		return "Category not found";
//	}
	
	

}
