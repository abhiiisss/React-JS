import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Using React hooks in this project, getting hands-on and understanding how hooks work by creating a no. game

// iN this game you can add values uptill 20 and remove it till 0.

function App() {
  // let counter = 15
  
  let [counter, setCounter] = useState(15)

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
     
    }

    console.log("Value is Added", counter);
  
  }

  const removeValue = () => {

    if (counter > 0) {
      setCounter(counter - 1)
    }
    
    console.log("Value is Removed", counter);

  }

  return (
    <>
      <h1>Number Game</h1>
      <h2>Counter is: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value </button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value</button>

      
    </>
  )
}


export default App
