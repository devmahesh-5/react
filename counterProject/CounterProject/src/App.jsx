import { useState } from 'react'//usestate is a hook in react for state management(hooks used for ui update)
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //use usestate hook as 
  let [counter,setCounter]=useState(0)//0 is the default value for counter variable 
  //here counter is a variable and setCounter is a function to update the value of counter
  // let counter=0;
  const add=()=>{
    // counter++;//now this is not a way to update the value of counter
   counter==20?setCounter(20):setCounter(counter+1);//dont increase the value of counter more than 20
    // if(counter==20){
    //   return null;
    // }else{
    //   setCounter(++counter);
    // }
    console.log("added");
    
    
  }
  const decrease=()=>{
    counter==0?setCounter(0):setCounter(counter-1);
    
    console.log("decreased", counter);
 
   
  }
  return (
    <>
      <h1>Counter with React</h1>
      <h2>Counter Value={counter}</h2>
    <button onClick={add}>Add Value</button>
    <button onClick={decrease}>Decrease value</button>
    </>
  )
}

export default App
