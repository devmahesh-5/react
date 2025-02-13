react Series

#### 01vitereact
 - I learn about react and vite 
# how react works?
   - first create a react app
   - create root and render (in index.html)
   - create react component
   - inside render method return jsx(eg : App.jsx)
   - inside app your code (return html code)
   - for any jsx component : [
                  function name(){
                      define your logic variables and functions eg: const [counter, setCounter] = useState(0)
                      return (
                          html code
                  )} 
    ]
   - 
#### useState hook
 - use for state management
 - use for ui update
 - use for optimization
 - eg : const [counter, setCounter] = useState(0)   
 - counter is a variable and setCounter is a function to update the value of counter
 - whenever count is changed it will rerender the ui so every count in ui will be updated
#### useEffect hook
 - use for side effects
 - use for api calls
 - use for optimization
 - eg : useEffect(() => {
                // api calls or other logic
 },[this is called dependencies (variables or function whose value on change will make component re-render)])
 - if only dependencies changed,then only component will re-render else this specific component will not be recreated at the time of vdom and real dom comparision

#### useCallback hook
 - use for optimization(avoiding re-rendering(if the value for certain dependencies has not changed,the component will not re-render as it was saved in the cache which will be used in future))
 - for eg : one function is in anothr function and something in parent function is changed but inner function is not changed so we can use useCallback hook to avoid re-rendering of inner function
#### useRef hook
 - use for getting access to the element
 - variable_name =useRef(null)
 - later use the variabel_name  in ref = variable_name of any field you want to access

### useContext hook
 - use for passing data between components
 - use for global state management
 - steps:
 - create a context ---> const UserContext = React.createContext();
 - create a provider ---> {UserContext.Provider value = {contexts value you are going to use in multiple components(set or get)} } 
 - create a consumer ---> wrap your components in <UserContextProvider> and use value prop to get the value from provider
 - use in components : const {your wanted variable} = useContext(UserContext); and set or get with your logic
 - eg : const {user} = useContext(UserContext);
 - console.log(user);


#### React Router
 - use for routing
 - for this we need to install react-router-dom
 - steps:
 - create a router ---> const router = createBrowserRouter([
                {
                    path:'/',
                    element:<Layout/>,
                    children:[
                        {
                            ....
                        }
                    ]
                }
 ])
 - create router provider ---> <RouterProvider router={router}/>
 - create layout ---> <Layout/> in this, outlet is used to show the children of layout


### redux 
* For creating store we use redux- toolkit and for connection across the components we use react-redux
#### redux toolkit
 - use for state management among multiple components
 - use for global state management
 - it is better than useContext hook
 - steps:
 - create a store ---> const store = configureStore({
     
 })[check store.js](./reduxToolkitTodo/src/App/store.js)
 - create slice ---> const authSlice = createSlice({
     name:'auth',
     initialState:{},
     reducers:{}
 })[check todoSlice.js](./reduxToolkitTodo/src/Features/Todo/todoSlice.js)
 - Defining slices (state + reducers + actions in one place).
 - Configuring the store with reducers, middleware, and dev tools.

#### react-redux
 - use for passing data between components
 - Connecting the Redux store to your React app using the Provider component.
 - Allowing components to interact with the store using hooks like useSelector and useDispatch.

## useForm hook
 - use for form management
 - use for validation
 - use for form submission
 - we get handleSubmit,register,formState,errors from useForm hook
 - handleSubmit wrap the form and onSubmit={handleSubmit(function we have written logic for form submission)}
 - register wrap the input and {...register('name of input',{validation rules})}
 - the 'function we have written logic for form submission' get form data as parameter in the function we use this data in our logic