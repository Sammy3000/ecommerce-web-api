import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import dummySlice from "./dummySlice";

const Store = configureStore({
    reducer:{
        cart: cartReducer,
        add: dummySlice

    }
})
export default Store