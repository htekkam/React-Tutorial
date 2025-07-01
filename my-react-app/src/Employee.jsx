

import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import './EmployeeTable.css'; // import the CSS file 

const Employee = () => {

  const API_URL = "http://localhost:8080/api/v1/employees"
  const [empGrid, setEmpGrid] = useState([])
  const empGridData = async () => {

    const response = await fetch(API_URL)
    const data = await response.json();

    setEmpGrid(data)

  }
  useEffect(() => {
    console.log(empGridData())
  }, [])
  console.log(empGrid)

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [emailId, setEmailId] = useState("")
  const confirm = () => toast("Employee  created successfully")

  const empDetails = { firstName, lastName, emailId }

  const empHandler = async (e) => {
    /**e.preventDefault() */
    console.log(empDetails)

    try {
      const response = await fetch("http://localhost:8080/api/v1/create", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json"
        },
        body: JSON.stringify(empDetails)
      })



    } catch (error) {


    }


  }


  return (
    <div className="empForm">
      <div className="formSection">
        <form onSubmit={empHandler}>
          <table>
            <tbody>
              <tr>
                <td><label>First Name</label></td>
                <td><input type='text' name='firstName' onChange={(e) => setFirstName(e.target.value)}></input></td>
              </tr>
              <tr>
                <td><label>Last Name</label></td>
                <td><input type='text' name='lastName' onChange={(e) => setLastName(e.target.value)}></input></td>
              </tr>
              <tr>
                <td><label>Employee Email</label></td>
                <td><input type='email' name='emailId' onChange={(e) => setEmailId(e.target.value)}></input> </td>
              </tr>
              <tr>
                <td colSpan={2} align='center'>
                  <button type='submit'>Submit</button>
                </td>
              </tr>
            </tbody>
          </table>



        </form>
        <div className="table-container">
          <table className="employee-table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {empGrid.length > 0 ? (
                empGrid.map((row, index) => (
                  <tr key={index}>
                    <td>{row.firstName}</td>
                    <td>{row.lastName}</td>
                    <td>{row.emailId}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="no-data">No employee records found</td>
                </tr>
              )}

            </tbody>
          </table>
        </div>

      </div>

    </div>
  )
}

export default Employee
