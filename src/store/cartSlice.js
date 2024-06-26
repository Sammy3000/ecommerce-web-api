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
            return state.filter(newState=>newState.id!==action.payload)
        }
    }

})

export const {add,remove} = cartSlice.actions;
export default cartSlice.reducer

//thunk api is a middleware that can be used to handle side effects in redux toolkit eg. fetching data from external api
