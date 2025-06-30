

import React from 'react'

const persons = ["hari","krishna","tekkam"]
const employees =["vishnu","vardhan","gunnu"]

const people =[...persons, ...employees]



const SpreadOpreator = () => {
  return (
    <div>
      <h2>Spread operator usage for string array: {people}</h2>
      
    </div>
  )
}

export default SpreadOpreator
