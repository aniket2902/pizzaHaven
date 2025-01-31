package com.blogs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blogs.pojos.Category;
import com.blogs.pojos.Employees;
import com.blogs.service.CategoryService;
import com.blogs.service.EmployeeService;

@RestController // =@Controller+@ResponseBody
@RequestMapping("/employees")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {
	//depcy
	@Autowired
	private EmployeeService employeeService;
	
	public EmployeeController() {
		System.out.println("in ctor " + getClass());
	}
	
	
	@GetMapping("/")
	public List<Employees> getAllEmployees(){
		System.out.println("in get all Employees");
		return employeeService.getAllEmployees();
	}
	
	@PostMapping("/")
	public String addNewEmployee(@RequestBody Employees employee) {
		
		System.out.println("In addNewEmployee" + getClass());
		return employeeService.addEmployee(employee);
		
	}
	
	@GetMapping("/{empId}")
	public Employees getEmployee(@PathVariable Long empId) {
		System.out.println("In get Employee by Id " + getClass());
		return employeeService.getEmployee(empId);
	}
	
	@PutMapping("/")
	public String updateEmployee(@RequestBody Employees employee) {
		System.out.println("In Update Employee" + getClass());
		return employeeService.updateEmployee(employee);
	}
	
	@DeleteMapping("/{empId}")
	public String deleteEmployee(@PathVariable Long empId) {
		System.out.println("In Delete Employee" + getClass());
		return employeeService.deleteEmployee(empId);
	}
	
	
	
	/*
	 * Desc - get all catgeories
	 * URL - http://host:port/categories
	 * Method - GET
	 * Payload - none
	 * Resp - JSON representation of List<Category>
	 */
//	@GetMapping
//	public List<Category> getAllCategories() {
//		System.out.println("in get all categories");
//		return categoryService.getAllCategories();
//	}	
	/*
	 * Desc - Add new Category
	 * URL - http://host:port/categories
	 * Method - POST
	 * Payload - JSON representation of Category
	 * Resp - string mesg
	 */
//	@PostMapping
//	public String addNewCategory(@RequestBody Category transientCategory) {
//		System.out.println("in add new category "+transientCategory);
//		return categoryService.addNewCategory(transientCategory);
//	}
	
	/*
	 * Desc - Delete Category by id
	 * URL - http://host:port/categories/{categoryId}
	 * Method - DELETE
	 * Payload - path variable( = URI template var) - categoryId
	 * Resp - string mesg (success | failure)
	 */
//	@DeleteMapping("/{categoryId}")
	/*
	 * @PathVariable - method arg levl annotation 
	 * To bind URI (path) variable to method arg
	 */
//	public String deleteCategoryById(@PathVariable Long categoryId) {	
//		
//		return categoryService.deleteById(categoryId);
//	}
	/*
	 * Desc - Get Category by id
	 * URL - http://host:port/categories/{categoryId}
	 * Method - GET
	 * Payload - path variable( = URI template var) - categoryId
	 * Resp - JSON representation of Category
	 */
//	@GetMapping("/{categoryId}")
//	public Category getCategoryById(@PathVariable Long categoryId) {
//		
//		return categoryService.getCategoryById(categoryId);
//	}
	
	/*
	 * Desc - Update Category Details 
	 * URL - http://host:port/categories/{categoryId}
	 * Method - PUT
	 * Payload - request body - JSON representation of updated category details
	 * Resp - a mesg
	 */
	
	
	
}
