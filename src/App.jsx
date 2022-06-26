import { useState } from 'react'
import './App.css'
import QuoteBox from './components/quoteBox'

function App() {
    
  //TODO CHANGE OF THE BACKCGROUNDCOLOR AND COLOR BY RANDOM WAY INCLUDE BACKGROUNDS'S BODY
  
  const colors = ["#023047" ,"#264653" ,"#fb5607" ,"#606c38" ,"#006d77" ,"#d62828" ,"#3a86ff"]
  const colorRandom = Math.floor(Math.random() * colors.length)
  const [color, setColor] = useState(colors[colorRandom])

  //TODO CREATE A ARROW FUNCTION TO ADD ON THE BUTTON'S ONCLICK
  const changeColor = () => {
    const colorRandomForChangeColor = Math.floor(Math.random() * colors.length)
    setColor (colors[colorRandomForChangeColor])

  }

  return (
    <div className='App' style={{backgroundColor: color}}>
      <QuoteBox changeColor={changeColor} color={color}/>
    </div>
  )
  
}

export default App
