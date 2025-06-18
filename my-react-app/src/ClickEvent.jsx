

import React from 'react'
import { useState } from 'react'

const ClickEvent = () => {
    const [number,setNumber] = useState(0)
    const increment= ()=>{
        setNumber(number+1)
    }
    const decrement =()=>{
        if(number>0)
        setNumber(number-1)
    }
    const reset =()=>{
        setNumber(0)
    }
  return (
    <div>
      <h2>{number}</h2>
      <span>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </span>
    </div>
  )
}

export default ClickEvent
