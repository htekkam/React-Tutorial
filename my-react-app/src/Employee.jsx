

import React, { useState,useEffect } from 'react'
import { toast } from 'react-toastify'

const Employee = () => {

     const API_URL = "http://localhost:8080/api/v1/employees"
    const [empGrid,setEmpGrid] = useState([])
    const empGridData = async ()=>{
      alert('inside empGridData')
      const response = await fetch(API_URL)
      const  data = await response.json();
      alert(data)
      setEmpGrid(data)

    }
     useEffect(() =>{
        console.log(empGridData())
    },[])
    console.log(empGrid)
    
  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const [emailId,setEmailId] = useState("") 
  const confirm = () => toast("Employee  created successfully")

  const empDetails = {firstName,lastName,emailId}

  const empHandler = async(e)=>{
    /**e.preventDefault() */
    console.log(empDetails)
    
  try {
    const response = await fetch("http://localhost:8080/api/v1/create",{
      method:"POST",
      headers:{
        "Content-Type":"Application/json"
      },
      body:JSON.stringify(empDetails)
    })

    
    
  } catch (error) {
    
    
  }
    
   
  }
   
  
  return (
    <div className="empForm">
        <div className="formSection">
            <form onSubmit={empHandler}> 
                <label>First Name</label>
                <input type='text' name='firstName' onChange={(e)=>setFirstName(e.target.value)}></input><br></br>
                <label>Last Name</label>
                <input type='text' name='lastName' onChange={(e)=>setLastName(e.target.value)}></input><br></br>
                <label>Employee Email</label>
                <input type='email' name='emailId' onChange={(e)=>setEmailId(e.target.value)}></input> <br></br>
                               
                <button type='submit'>Submit</button>
            </form>
              <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {empGrid.map((row) => (
          <tr>
            <td align='center'>{row.firstName}</td>
            <td align='center'>{row.lastName}</td>
            <td align='center'>{row.emailId}</td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
        
    </div>
  )
}

export default Employee
