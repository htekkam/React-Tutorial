

import React from 'react'

const secondCompDetails ={
  name:"second-component"
}

const SecondComponent = (props) => {
  const {model,year,dealer,color} = props.myCar
  return (
    <div>
     <h2>My car details</h2>
    <div>{model}</div>
    <div>{year}</div>
    <div>{dealer}</div>
    <div>{color}</div>
    </div>
  )
}

export default SecondComponent
