

import React, { useEffect, useReducer } from 'react'

//types
const FETCH_INIT = "FETCH_INIT"
const FETCH_START = "FETCH_START"
const FETCH_ERROR = "FETCH_ERROR"

//declaring initial state

const initialState = {
    loading:true,
    data: null,
    error: null
}

const dataReducer = (state,action)=>{

    switch (action.type) {
        case FETCH_INIT:
            return {...state, loading:true, error:null}
        case FETCH_START:
            return {...state, loading:false, data:action.payload}
        case FETCH_ERROR:
            return {...state, loading:false, error:action.payload}
    
        default:
            return state;
    }
}

const MultiState = () => {

   const [state,dispatch]  =useReducer(dataReducer,initialState)
   const dataHandler = async()=>{
    try {
        //dispatch based on the  type info
    dispatch({type:FETCH_INIT})
    const response = await fetch("http://localhdddost:8080/api/v1/employees")
    const empData = await response.json()
    dispatch({type:FETCH_START,payload:empData})

    } catch (error) {
      dispatch({type:FETCH_ERROR,payload:error})  
    }    

   }
   useEffect(()=>{
        dataHandler()
    },[])
  return (
    <div>
      {state.loading && <p>Data loading...</p>}
      {state.data && <div>
        {state.data.map((item)=>{
          return(
            <div>
                <h2>{item.firstName}</h2>
            </div>
          )
        })}
        </div>}
        {state.error && <div>{alert(state.error)}</div>}
    </div>
  )
}

export default MultiState
