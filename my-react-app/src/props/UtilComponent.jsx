

import React from 'react'
import { useUtil } from '../context/UtilityContext'

const UtilComponent = (props) => {
   const {threshold} = useUtil()
  return (
    <div>
       threshold is {threshold}
    </div>
  )
}

export default UtilComponent
