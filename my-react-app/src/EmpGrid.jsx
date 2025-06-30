

import React from 'react'
import { useState,useEffect } from 'react'
const API_URL = "http://localhost:8080/api/v1/employees"
const EmpGrid = () => {

    
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
  return (
    <div>
        	<div>Existing employee details
        <label>First Name</label>
        <label>Last Name</label>
        <label>Email </label>
        <div>
          {empGrid.map((item)=>{
          return(
            <div>
              <label>{item.firstName}</label>
              <label>{item.lastName}</label>
               <label>{item.emailId}</label>
            </div>
          )
        })}
        </div>
      </div>
    </div>
  )
}

export default EmpGrid
