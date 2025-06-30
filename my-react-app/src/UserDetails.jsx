

import React, { useEffect, useState } from 'react'

const userDetails ="https://jsonplaceholder.typicode.com/posts"

console.log(userDetails)

const UserDetails = () => {

    const [user,setUser] = useState([])
    const userHandler = async()=>{

        const response = await fetch(userDetails)
        const newData = await response.json()
        setUser(newData)

    }
    useEffect(()=>{
        console.log(userHandler())
    },[])

    //console.log(user)
  return (
    <div>
       {
        user.map((item)=>{
          return(
            <div className='userSection'>
                <h2 style={{color:'green'}}>{item.title}</h2>
                <h3 style={{color:'blue'}}>{item.body}</h3>
            </div>
          )
        })
       }
    </div>
  )
}

export default UserDetails
