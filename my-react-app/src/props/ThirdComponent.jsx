

import React from 'react'
//importing custom hook here
import { useData } from '../context/ExampleContext'

const ThirdComponent = (props) => {
  //de structure the hook value here
  const {surprise} = useData()
  return (
    <div>
    this is third component
   <h2>using the use context value here {surprise.age} </h2>
    </div>
  )
}

export default ThirdComponent
