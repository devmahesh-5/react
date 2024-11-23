# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
Redux-toolkit
//how to make store??only one for a project
1.store.js
2.configureStore from redux
3.export store = configureStore({}) (create store like context) and indicates the reducers cause only reducers can make change in store
4.make slice(here todoSlice.js)
4.1. now create initialState.
4.2. create slice with name,initialstate,reducers(remember reducers are function to make change in store) reducers: object with key value pair of functions
4.3.here the function have definition unlike in context
4.3. in definition,state and action are passed where state gives current state of initialState(like how many objects in todos array) and action for any action to be performed in it.
5.export individual reducers as well as all reducers
6.now define reducer in configureStore in store
7.now in addTodo we can useDispatch() for adding value in store using reducer for this we can directly call reducer in dispatch method with required parameter.
8.useSelector from reducx-toolkit is used for getting value from store. use callback inslide useSelector method to get from state(like (state)=>state.todos)
9.