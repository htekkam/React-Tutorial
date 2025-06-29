

import React from 'react'

let sampleArray = ["hari",35,{job:"job-less"},{hobbies:"playing cricket"}]
let personalInfo = [
    {
        dish:"chicken",
        player:"sachin"
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
    </div>
  )
}

export default SampleArray
