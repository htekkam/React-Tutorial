import { createContext, useContext, useState } from "react";


const UtilContext  = createContext()

export const UtilProvider = ({children})=>{

    const [threshold,setThreshold] = useState(40)

    return(
        <UtilContext.Provider value={{threshold,setThreshold}}>
            {children}
        </UtilContext.Provider>
    )
}
export const useUtil = ()=> useContext(UtilContext)