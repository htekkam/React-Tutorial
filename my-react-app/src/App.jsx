
import React, { useState } from 'react'
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
      {/* <UserDetails/> */}
      <Employee/>
    </div>
  )
}

export default App
