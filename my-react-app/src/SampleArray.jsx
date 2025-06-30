

import React from 'react'
import { userData } from './data'

console.log(userData)

let sampleArray = ["hari",35,{job:"job-less"},{hobbies:"playing cricket"}]
let personalInfo = [
    {
        dish:"chicken",
        player:"sachin"
    }
]
let eductionDetails=[
  {
    ssc:"bvk school",
    inter:"Sri Chaitanya",
    btech:"Ranga reddy",
    
  },
  {
    sscmarks:90,
    intermarks:90,
    btechmarks:70
  }
]


const SampleArray = () => {
  return (
    <div>
      <h2>Arrays demonstration</h2>
      <h3>My name is {sampleArray[0]}</h3>
      <h3>My age : {sampleArray[1]}</h3>
      {personalInfo.map((item) =>{
        return(
            <div>
                <h3>Favourite dish : {item.dish}</h3>
                <h3>Favourite player:{item.player}</h3>
            </div>
        )
      })}
      <div>
        {
          userData.map((data) =>{
            return(
               <div style={{border:"1px solid green"}}> 
                <div>User Name :{data.username}</div>
                <div>Eamil :{data.email}</div>
                <div>Address: {data.address.street}</div>
                <div>location: {data.address.geo.lat}</div>
               </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default SampleArray
