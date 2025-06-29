

import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const FormExample2 = () => {

    const [userName,setUserName] = useState("")
    const getUserName = (event)=>{
       setUserName(event.target.value)

    }
    const [newUser, setNewUser] = useState()
    const userDetails = (e)=>{
        e.preventDefault()
        setNewUser(userName)
        notify()
    }

    const notify = () => toast("user details saved  successfully")
  return (
    <section className='formSection'>
        <h2>Hello,{newUser} welcome to React learning</h2>
        <ToastContainer/>
        <div>
         <form onSubmit={userDetails}>
            <input type='text' placeholder='Enter your name' onChange={getUserName} />
         <br/>
         <button className='submitBtn'>Submit</button>
         </form>
         
        </div>
    </section>
    
  )
}

export default FormExample2
