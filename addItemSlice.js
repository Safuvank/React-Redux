// import { createSlice } from "@reduxjs/toolkit";

// const addItemSlice = createSlice({
//     name:"addItem",
//     initialState: {
//         item : []
//     },
//     reducers : {
//         addItem : (state,action) => {
//             state.item.unshift(action.payload)
//         },
//         deleteItem : (state, action) => {
//             state.item = state.item.filter((item) => item !== action.payload)
//         },
//         editItem : (state, action) => {
//             const {oldValue, newValue } = action.payload;
//             const index = state.item.indexOf(oldValue);
//             if(index !== -1){
//                 state.item[index] = newValue
//             }
//         }
//     }
// })

// export const {addItem,deleteItem,editItem} = addItemSlice.actions;
// export default addItemSlice.reducer;