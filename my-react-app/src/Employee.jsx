

import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Employee = () => {
  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const [emailId,setEmailId] = useState("") 
  const confirm = () => toast("Employee  created successfully")

  const empDetails = {firstName,lastName,emailId}

  const empHandler = async(e)=>{
    e.preventDefault()
    console.log(empDetails)
    
  try {
    const response = await fetch("http://localhost:8080/api/v1/create",{
      method:"POST",
      headers:{
        "Content-Type":"Application/json"
      },
      body:JSON.stringify(empDetails)
    })

    alert('data posted successfully')
    
  } catch (error) {
    
    alert('could not post the data')
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
        </div>
    </div>
  )
}

export default Employee
