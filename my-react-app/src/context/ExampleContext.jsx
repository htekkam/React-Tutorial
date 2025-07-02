

import { createContext, useContext, useState } from "react";

//creating context
const GiftContext = createContext()

//creating provider function with children as property
export const GiftProvider = ({children})=>{

//creating use state to set the values for property
const [surprise, setSurprise] = useState({name:"hari",age:30,gender:"male"})

//returning Gift context with provider by passing children and value as use state

return (
    <GiftContext.Provider value={{surprise, setSurprise}}>
        {children}
    </GiftContext.Provider>
)

}
//creating custom hook by using use context and by assigning already created context to it
//name should start with 'use'

export const useData = ()=> useContext(GiftContext)

//we need to export both custom hook and function by using the key word export
