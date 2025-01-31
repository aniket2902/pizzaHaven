package com.blogs.pojos;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "employees")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class Employees {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name="first_name", length=50)
	private String firstName;
	@Column(name="last_name",  length=50)
	private String lastName;
	@Column(name="email", unique=true, length=50)
	private String email;
	@Column(name="password", length=50)
	private String password;
	@Column(name="salary")
	private Double salary;
	@Column(name="join_date")
	private LocalDate joinDate;
	@Column(name="location", length=50)
	private String location;
	@Column(name="department",  length=50)
	private String department;
	public Employees(Long id, String firstName, String lastName, String email, String password, Double salary,
			LocalDate joinDate, String location, String department) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.salary = salary;
		this.joinDate = joinDate;
		this.location = location;
		this.department = department;
	}
	public Employees(String firstName, String lastName, String email, String password, Double salary,
			LocalDate joinDate, String location, String department) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.salary = salary;
		this.joinDate = joinDate;
		this.location = location;
		this.department = department;
	}
	
	
}
