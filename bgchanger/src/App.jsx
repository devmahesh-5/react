import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Color,setColor] = useState('olive');
const setit=()=>{
  setColor('grey');
}
 
  return (
    //onClick needs a whole function not the return value so we use call back function inside a function (i.e, when onClick=setColor('red') it inject a return value to onClick which is not the required case so using a arrow function here is the actual function to onClick and now inside this function we can use setColor('red') directly as call back function) 
      <div className="w-full h-screen duration-200 m-0 p-0" style={{backgroundColor:Color}}>
       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
       <div className="flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
        <button className="outline-none px-4 py-2 rounded-3xl" style={{backgroundColor:'red'}}onClick={()=>setColor('red')}>red</button>
        <button className="outline-none px-4 py-2 rounded-3xl" style={{backgroundColor:'green'}}onClick={()=>setColor('green')}>green</button>
        <button className="outline-none px-4 py-2 rounded-3xl" style={{backgroundColor:'blue'}}onClick={()=>setColor('blue')}>Blue</button>
        <button className="outline-none px-4 py-2 rounded-3xl" style={{backgroundColor:'black'}}onClick={()=>setColor('black')}>black</button>
        <button className="outline-none px-4 py-2 rounded-3xl" style={{backgroundColor:'yellow'}} onClick={()=>setColor('yellow')}>yellow</button>
        <button className="outline-none px-4 py-2 rounded-3xl" style={{backgroundColor:'grey'}}onClick={setit}>grey</button>
       </div>
        </div>
      </div>
   
  )
}

export default App
