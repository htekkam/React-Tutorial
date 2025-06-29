

import React, { useState } from 'react'

const FormExample2 = () => {

    const [userName,setUserName] = useState("")
    const getUserName = (event)=>{
       setUserName(event.target.value)

    }
    const [newUser, setNewUser] = useState()
    const userDetails = (e)=>{
        e.preventDefault()
        setNewUser(userName)
    }

  return (
    <section className='formSection'>
        <h2>Hello,{newUser} welcome to React learning</h2>
        <div>
         <form>
            <input type='text' placeholder='Enter your name' onChange={getUserName} />
         <br/>
         <button className='submitBtn' onClick={userDetails}>Submit</button>
         </form>
         
        </div>
    </section>
    
  )
}

export default FormExample2
