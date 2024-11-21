import React,{useEffect,useState} from 'react'
import ThemeBtn from './Components/ThemeBtnUi/ThemeBtnUi'
import Card from './Components/Card/Card'
import { ThemeContextProvider } from './Context/Theme'
import './App.css'

function App() {
  const [themeMode,setThemeMode]=useState('light');
  const lightMode=()=>{
    setThemeMode('light');
  }
  const darkMode=()=>{
    setThemeMode('dark');
  }
  useEffect(()=>{
    const htmlDom=document.querySelector('html');
    htmlDom.classList.remove('light' ,'dark');
    htmlDom.classList.add(themeMode);
  },[themeMode])
  
  return (
    <ThemeContextProvider value={{themeMode,lightMode,darkMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  )
}

export default App
