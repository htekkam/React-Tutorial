

import React, { useState } from 'react'

const Circuit = () => {
    const [game, setGame] = useState(true)
    const MyGame = ()=>{
        return(
            <div>I Like Sachin</div>
        )
    }
  return (
    <div>
      {game && <MyGame/>}
    </div>
  )
}

export default Circuit
