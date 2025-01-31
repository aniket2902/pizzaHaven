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
import com.blogs.service.CategoryService;

@RestController // =@Controller+@ResponseBody
@RequestMapping("/categories")
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryController {
	//depcy
	@Autowired
	private CategoryService categoryService;
	
	public CategoryController() {
		System.out.println("in ctor " + getClass());
	}
	/*
	 * Desc - get all catgeories
	 * URL - http://host:port/categories
	 * Method - GET
	 * Payload - none
	 * Resp - JSON representation of List<Category>
	 */
	@GetMapping
	public List<Category> getAllCategories() {
		System.out.println("in get all categories");
		return categoryService.getAllCategories();
	}	
	/*
	 * Desc - Add new Category
	 * URL - http://host:port/categories
	 * Method - POST
	 * Payload - JSON representation of Category
	 * Resp - string mesg
	 */
	@PostMapping
	public String addNewCategory(@RequestBody Category transientCategory) {
		System.out.println("in add new category "+transientCategory);
		return categoryService.addNewCategory(transientCategory);
	}
	
	/*
	 * Desc - Delete Category by id
	 * URL - http://host:port/categories/{categoryId}
	 * Method - DELETE
	 * Payload - path variable( = URI template var) - categoryId
	 * Resp - string mesg (success | failure)
	 */
	@DeleteMapping("/{categoryId}")
	/*
	 * @PathVariable - method arg levl annotation 
	 * To bind URI (path) variable to method arg
	 */
	public String deleteCategoryById(@PathVariable Long categoryId) {	
		
		return categoryService.deleteById(categoryId);
	}
	/*
	 * Desc - Get Category by id
	 * URL - http://host:port/categories/{categoryId}
	 * Method - GET
	 * Payload - path variable( = URI template var) - categoryId
	 * Resp - JSON representation of Category
	 */
	@GetMapping("/{categoryId}")
	public Category getCategoryById(@PathVariable Long categoryId) {
		
		return categoryService.getCategoryById(categoryId);
	}
	
	/*
	 * Desc - Update Category Details 
	 * URL - http://host:port/categories/{categoryId}
	 * Method - PUT
	 * Payload - request body - JSON representation of updated category details
	 * Resp - a mesg
	 */
	@PutMapping
	public String updateCategory(@RequestBody Category category) {
		return categoryService.udpateCategory(category);
	}
	
	
}
