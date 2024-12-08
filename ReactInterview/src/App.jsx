import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(1);
  let mulValue=value*5;
  const multiply=()=>{
    setValue(value+1);
  }
  return (
    <>
      <h1>Main Value: {value}</h1>
     <button onClick={multiply}>
      Click to multiply by 5
     </button>
     <h1>MultiPlied Value:{mulValue}</h1>
    </>
  )
}

export default App
