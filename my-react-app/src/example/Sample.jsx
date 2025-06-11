import React from 'react'
import TestComp from './TestComp'

const Mango=()=>{
    return(
        <h2>Mangoes are sweet</h2>
    )
}

const Alphonso=()=>{
    return(
        <h2>Alphonso mangoes are sweetest</h2>
    )
}

function Sample() {
  return (
    <div>Sample
      <Mango/>
      <Alphonso/>
      <TestComp/>
    </div>
  )
}

export default Sample

