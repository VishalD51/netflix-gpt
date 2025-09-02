import { configureStore } from "@reduxjs/toolkit";
import signInReducer from './userSlice'

export const store = configureStore({
    reducer:{
       signIn: signInReducer
    }
})