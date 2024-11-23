import { useState } from 'react'
import AddTodos from './Components/AddTodos'
import Todos from './Components/Todos'
import './App.css'

function App() {

  return (
   <>
   <h1>ReduxToolkit</h1>
   <AddTodos/>
   <Todos />
   </>
  )
}

export default App
