import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children :[
      {
        path:'',
        element:<Home />
      },
      {
        path:'about',
        element:<About />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
  // <App/></BrowserRouter>,
  <StrictMode>
  <RouterProvider router={router}/>
 
  </StrictMode>,
)
