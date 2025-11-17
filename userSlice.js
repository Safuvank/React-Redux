import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "users",
    initialState : {
        user : "",
        password : ""
    },
    reducers : {
        addName : (state, action) => {
            state.user = action.payload
        },
        addPassword : (state,action) => {
            state.password = action.payload
        }
    }
})


export default userSlice.reducer
export const {addName, addPassword} = userSlice.actions 


