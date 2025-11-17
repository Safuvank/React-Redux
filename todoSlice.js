import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todo : []
    },
    reducers : {
        addTodo: (state,action) => {
            state.todo.push(action.payload)
        }, 
        deleteTodo : (state,action) => {
            state.todo = state.todo.filter((item) => item !== state.payload)
        },
        editTodo : (state,action) => {
            const {oldValue, newValue} = action.payload
            const index = state.todo.indexOf(oldValue)
            if(index !== -1 ){
                state.item[index] = newValue
            }
        }
    }
})

export const {addTodo, editTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;