

import React from 'react'

const FirstComponent = (props) => {
    const {firstName,lastName,surName} = props.myDetails
  return (
    <div>
      <h2>My details</h2>
      <div>{firstName}</div>
      <div>{lastName}</div>
      <div>{surName}</div>
      
    </div>
  )
}

export default FirstComponent
