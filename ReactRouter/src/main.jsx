import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import ContactUs from './Components/ContactUs/ContactUs'
import User from './Components/User/User'
import Github,{ githubInfo } from './Components/Github/Github'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
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
      },
      {
        path:'contactus',
        element:<ContactUs />
      },
      {
        path:'user/:id',
        element:<User />
      },
      {
        loader:githubInfo,
        path:'github',
        element:<Github />
      }
    ]
  }
])

// const router=createBrowserRouter([
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}>
//       <Route path='' element={<Home/>}/>
//       <Route path='about' element={<About/>}/>
//       <Route path='contactus' element={<ContactUs/>}/>
//       </Route>
//   )
// ])
createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
  // <App/></BrowserRouter>,
  <StrictMode>
  <RouterProvider router={router}/>
 
  </StrictMode>,
)
