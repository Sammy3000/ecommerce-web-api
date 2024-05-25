import { createSlice } from "@reduxjs/toolkit";

const initialState = [0]

const dummy = createSlice({
  name:'dummy',
  initialState,
  reducers:{
    addition:(state)=>{
        return state + 1
    }
  }


})
export const {addition} = dummy.actions