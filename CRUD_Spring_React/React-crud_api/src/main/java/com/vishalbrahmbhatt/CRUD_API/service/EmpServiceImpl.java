package com.vishalbrahmbhatt.CRUD_API.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.vishalbrahmbhatt.CRUD_API.exception.ResourceNotFoundException;
import com.vishalbrahmbhatt.CRUD_API.model.EmployeeModel;
import com.vishalbrahmbhatt.CRUD_API.repositories.EmployeeRepo;

@Service
public class EmpServiceImpl implements EmpService {

	@Autowired
	private EmployeeRepo employeeRepo;

	@Override
	public EmployeeModel addEmp(EmployeeModel employee) {

		return employeeRepo.save(employee);
	}

	@Override
	public List<EmployeeModel> findAllEmployees() {
		return employeeRepo.findAll();
	}

	@Override
	public Optional<EmployeeModel> findEmpById(Long id) {
		return employeeRepo.findById(id);
	}

	@Override
	public void delete(Long id) {
		employeeRepo.deleteById(id);
	}

	@Override
	public ResponseEntity<EmployeeModel> updateById(Long id, EmployeeModel model) {
		EmployeeModel employee = employeeRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("" + id));
		employee.setFirstName(model.getFirstName());
		employee.setLastName(model.getLastName());
		employee.setEmailId(model.getEmailId());
		EmployeeModel updatedEmployee = employeeRepo.save(employee);
//		EmployeeModel ee = employeeRepo.save(e);
		return ResponseEntity.ok(updatedEmployee);
	}

}
