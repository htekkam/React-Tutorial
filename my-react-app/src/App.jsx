
import React, { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css' 
import FirstComponent from './props/FirstComponent'
import SecondComponent from './props/SecondComponent'
import ThirdComponent from './props/ThirdComponent'
import FourthComponent from './props/FourthComponent'
import StateManagement from './StateManagement'
import ClickEvent from './ClickEvent'
import FormExample from './FormExample'
import FormExample2 from './FormExample2'
import SampleArray from './SampleArray'
import TemplateString from './TemplateString'
import UserDetails from './UserDetails'
import Employee from './Employee'
import Circuit from './Circuit'
import SpreadOpreator from './SpreadOpreator'
import MultiState from './MultiState'
import FirstPage from './routing/FirstPage'
import SecondPage from './routing/SecondPage'
import ThirdPage from './routing/ThirdPage'
import FourthPage from './routing/FourthPage'
import Navbar from './Navbar'
import EmpGrid from './EmpGrid'
import { GiftProvider } from './context/ExampleContext'
import { UtilProvider } from './context/UtilityContext'
import UtilComponent from './props/UtilComponent'

let a = "Thriller"
let b = "Suspense"

const user ={
  firstName: "Hari",
  lastName: "krishna",
  surName:"Tekkam"
}

const car ={
  model:"Magnite",
  year:"2018",
  dealer:"Nissan",
  color:"Red"
}

function App() {

  const [flag,setFlag] = useState(false)
  return (
     <div className='container'>
    {/**
     <h1>I like {a} and {b} movies</h1>
      <p className='para'>This is a paragraph</p>
      <img className='images' src="https://images.freeimages.com/image/previews/492/unapologetic-pride-vectorial-art-5690995.png"/>
      <img className='images' src='images/forest.jpg'/>
      <FirstComponent myDetails ={user}/>
      <SecondComponent myCar ={car}/>
      <StateManagement/>
      <h2> {
        flag?<ThirdComponent/> : <FourthComponent/>
      }</h2>
      <ClickEvent/>
      <br/>
     
      <FormExample2/>
      <SampleArray/>
      <TemplateString/>
       <UserDetails/> 
      <Employee/>
      <Circuit/>
      <SpreadOpreator/>
      <MultiState/>
      <Navbar/>
     */}
     
     <GiftProvider>
      <ThirdComponent/>
           </GiftProvider>
     <UtilProvider>
       <UtilComponent/>
     </UtilProvider>
     
     <Routes>
      <Route path='/first' element ={ <Employee/>}/>
      <Route path='/second' element ={ <SecondPage/>}/>
      <Route path='/third' element ={ <ThirdPage/>}/>
      <Route path='/fourth' element ={ <FourthPage/>}/>
      <Route path='/user-details' element={<UserDetails/>}/>

     </Routes>
   
    </div>
  )
}

export default App
