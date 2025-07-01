

import { createContext, useContext, useState } from "react";

const GiftContext = createContext()

export const GiftProvider = ({children})=>{

    const [gift,setGift] = useState("Iphone")

    return(
        <GiftProvider.Provider value ={{gift,setGift}}>
            {children}
        </GiftProvider.Provider>
    )

}

export const useData = ()=> useContext(GiftContext)