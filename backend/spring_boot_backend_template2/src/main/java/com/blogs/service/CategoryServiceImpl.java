package com.blogs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.blogs.custom_exception.ResourceNotFoundException;
import com.blogs.dao.CategoryDao;
import com.blogs.pojos.Category;

@Service // Spring bean containing B.L
@Transactional
public class CategoryServiceImpl implements CategoryService {
	// depcy - dao layer i/f
	@Autowired
	private CategoryDao categoryDao;

	@Override
	public List<Category> getAllCategories() {
		// TODO Auto-generated method stub
		return categoryDao.findAll();
	}

	@Override
	public String addNewCategory(Category transientCategory) {
		Category persistentCategory = categoryDao.save(transientCategory);
		return "Added new catgroy with ID " + persistentCategory.getId();
	}

	@Override
	public String deleteById(Long categoryId) {
		if (categoryDao.existsById(categoryId)) {
			categoryDao.deleteById(categoryId);
		}
		else {
			return "Item Not Found";
		}

		return "Item Deletion Successfull";
	}

	@Override
	public Category getCategoryById(Long categoryId) {
		Category cat = categoryDao.findById(categoryId).orElseThrow(() -> new ResourceNotFoundException("Category Not Found"));
		return cat;
	}

	@Override
	public String udpateCategory(Category category) {
		if(categoryDao.existsById(category.getId())) {
			categoryDao.save(category);
			return "Category Updated Successfully";
		}
		return "Category not found";
	}
	
	

}
