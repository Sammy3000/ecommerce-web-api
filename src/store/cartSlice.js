import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        add: (state,action)=>{
            state.push(action.payload)
        },
        remove: (state,action)=>{
            return state.filter(newState=>newState!==action.payload)
        }
    }

})

export const {add} = cartSlice.actions;
export default cartSlice.reducer