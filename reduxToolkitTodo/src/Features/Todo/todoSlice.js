import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{
        id:1,
        text:"todo1",
        completed:false
    }],
    input:''
}
export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        deleteTodo:(state,action)=>{
            const id=action.payload;
            state.todos=state.todos.filter((todo)=>todo.id!==id)
        },
        updateTodo:(state,action)=>{
            const id=action.payload;
            const text=action.payload;
            state.todos=state.todos.map((todo)=>todo.id===id?{...todo,text}:todo)
        },
        completeToggle:(state,action)=>{
            const id=action.payload;
            state.todos=state.todos.map((todo)=>id===todo.id ? {...todo,completed: !todo.completed} : todo)
        },
        setInput:(state,action)=>{
            state.input=action.payload
        }
    }
})
export const {addTodo,deleteTodo,updateTodo,completeToggle,setInput}=todoSlice.actions;
export default todoSlice.reducer