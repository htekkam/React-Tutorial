

import React from 'react'

import {useState, useEffect } from 'react'

const StateManagement = () => {

    const [city,setCity] =  useState("Hyderabad")
    useEffect(()=>{
        (city==="Mumbai")?setCity("Bangalore"): setCity("Delhi")
    },[city])
  return (
    <div>
      <h2>I am living in {city}</h2>
    </div>
  )
}

export default StateManagement
