import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const EditEmployee = () => {
    const nav = useNavigate()
    const {id} =  useParams();
    const [employee, setEmployee] = useState({
        id: id,
        firstName: "",
        lastName: "",
        emailId: "",
      });

      const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({ ...employee, [e.target.name]: value });
      };
    const updateEmp=(e)=>{
        e.preventDefault();
        EmployeeService.updateEmployee(employee,id)
        .then((response)=>{
            nav("/employeeList")
        })
        .catch(err=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const res = await EmployeeService.getEmployeeByID(id)
                setEmployee(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    },[])
  return (
    <div className="flex max-w-2xl shadow border-b mx-auto ">
      <div className="px-8 py-8 ">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Edit Employee</h1>
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
            value={employee.emailId}
            onChange={(e) => {
              handleChange(e);
            }}
            className="h-10 w-96 border mt-2 px-2 py-2"
            required
          />
        </div>
        <div className="item-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={updateEmp}
            className="text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-700"
          >
            Update
          </button>
          <button  onClick={()=>nav("/")} className="text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-700">
            Cancel
          </button>
        </div>
      </div>
    </div>

  )
}

export default EditEmployee