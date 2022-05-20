package com.vishalbrahmbhatt.CRUD_API.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vishalbrahmbhatt.CRUD_API.model.EmployeeModel;
import com.vishalbrahmbhatt.CRUD_API.service.EmpService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

	/*
	 * @Autowired private EmployeeRepo employeeRepo;
	 */
	@Autowired
	private EmpService empService;

	// get all employees
	@GetMapping("/employees")
	public List<EmployeeModel> getAllEmployees() {
		return empService.findAllEmployees();
	}

	// create employee rest api
	@PostMapping("/employees")
	public EmployeeModel createEmployee(@RequestBody EmployeeModel employee) {
		// return employeeRepo.save(employee);
		return empService.addEmp(employee);
	}

	// get employee by id rest api
	@GetMapping("/employees/{id}")
	public Optional<EmployeeModel> getEmployeeById(@PathVariable Long id) {
		return empService.findEmpById(id);
	}

	// update employee rest api

	@PutMapping("/employees/{id}")
	public ResponseEntity<EmployeeModel> updateEmployeeById(@PathVariable Long id, @RequestBody EmployeeModel model) {
		return empService.updateById(id, model);
//		return empService.addEmp(model);
	}

	// delete employee rest api
	@DeleteMapping("/employees/{id}")
	public void deleteEmployeebyId(@PathVariable Long id) {
		empService.delete(id);
	}
}
