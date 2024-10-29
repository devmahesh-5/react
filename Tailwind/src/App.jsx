import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'
function App() {
  let [count, setCount] = useState(0)
  // let myObj={
  //   sub1
  // }
  const subArr=["Chemistry","Physics","Maths"]
  return (
    <>
      <h2 className="text-3xl font-bold underline bg-red-500 text-white p-5 rounded-lg">Test ,TailWind</h2>
      <Card sub={subArr[0]} rating="4.2"/>
      <Card sub={subArr[1]} rating ="4.5"/>
      <Card sub={subArr[2]} rating="4.7"/>
      <Card/>
    </>
  )
}

export default App
