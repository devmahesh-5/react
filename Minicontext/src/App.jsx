
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login/login'
import Profile from './Components/Profile/Profile'

function App() {
 

  return (
    <UserContextProvider>
    <h1>Minicontext</h1>
    <Login />
    <Profile />
    </UserContextProvider>
    
      
  )
}

export default App
