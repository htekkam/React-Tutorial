
import React from 'react'
import './App.css' 
import FirstComponent from './props/FirstComponent'
import SecondComponent from './props/SecondComponent'
import ThirdComponent from './props/ThirdComponent'
import FourthComponent from './props/FourthComponent'

let a = "Thriller"
let b = "Suspense"

const user ={
  firstName: "Hari",
  lastName: "k",
  surName:"Tekkam"
}

function App() {
  return (
     <div className='container'>
     <h1>I like {a} and {b} movies</h1>
      <p className='para'>This is a paragraph</p>
      <img className='images' src="https://images.freeimages.com/image/previews/492/unapologetic-pride-vectorial-art-5690995.png"/>
      <img className='images' src='images/forest.jpg'/>
      <FirstComponent name={user.firstName} />
      <SecondComponent name ={user.lastName}/>
      <ThirdComponent name ="tekkam"/>
      <FourthComponent name= "atchut" />
    </div>
  )
}

export default App
