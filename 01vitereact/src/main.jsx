import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
const reactElement =(
  <input type="text" placeholder='Enter your name'/>
)
const anotherElement =React.createElement(
  'input',
  {
    type:'text',
    placeholder:'Enter your name',
    required:true
  }
  //content directly here
)
createRoot(document.getElementById('root')).render(
 
    // <App />

    // reactElement

    anotherElement
)
