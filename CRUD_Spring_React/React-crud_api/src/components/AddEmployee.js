import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const AddEmployee = () => {
  const redirect = useNavigate();
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });

  };
  const saveEmp = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
      .then((res) => {
        console.log(res);
        redirect("/")
      })
      .catch((err) => {
        console.log(err);
      });
    
  };
  const cleaEmp = (e)=>{
    e.preventDefault();
    setEmployee({
      id: "",
      firstName: "",
      lastName: "",
      emailId: "",
    })
  }

  return (
    <div className="flex max-w-2xl shadow border-b mx-auto ">
      <div className="px-8 py-8 ">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add New Employee</h1>
        </div>
        <div className="item-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            className="h-10 w-96 border mt-2 px-2 py-2"
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
        </div>
        <div className="item-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={(e) => {
              handleChange(e);
            }}
            className="h-10 w-96 border mt-2 px-2 py-2"
            required
          />
        </div>
        <div className="item-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Email
          </label>
          <input
            type="email"
            name="emailId"
            value={employee.email}
            onChange={(e) => {
              handleChange(e);
            }}
            className="h-10 w-96 border mt-2 px-2 py-2"
            required
          />
        </div>
        <div className="item-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={saveEmp}
            className="text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-700"
          >
            Save
          </button>
          <button onClick={cleaEmp} className="text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-700">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
