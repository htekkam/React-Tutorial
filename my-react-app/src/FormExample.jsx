

import React, { useState } from 'react'

const FormExample = () => {
    const[userName,setUserName] = useState("")

    const getUserName = (event)=>{
        setUserName(event.target.value)
    }

    const [newUser, setNewUser] = useState("")

    const userDetails=()=>{
        setNewUser(userName)
    }
  return (
    <section className='formSection'>
        <h2>{newUser}</h2>
        <div className='inputDiv'>
            <input type='text' placeholder='Enter your name' onChange={getUserName}/>
            <br/>
            <button className='submitBtn' onClick={userDetails}>submit </button>
        </div>
    </section>
  )
}

export default FormExample
