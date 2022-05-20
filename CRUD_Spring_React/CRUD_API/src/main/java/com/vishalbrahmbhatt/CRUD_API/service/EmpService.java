package com.vishalbrahmbhatt.CRUD_API.service;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;

import com.vishalbrahmbhatt.CRUD_API.model.EmployeeModel;

public interface EmpService {

	EmployeeModel addEmp(EmployeeModel employee);

	List<EmployeeModel> findAllEmployees();

	Optional<EmployeeModel> findEmpById(Long id);

	void delete(Long id);

	ResponseEntity<EmployeeModel> updateById(Long id, EmployeeModel model);

}
