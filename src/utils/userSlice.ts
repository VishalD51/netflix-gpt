import { createSlice } from "@reduxjs/toolkit";

export const singInSlice = createSlice({
    name: 'signIn',
    initialState:null,
    reducers:{
        addUser:(state, action) => {
            return action.payload;
        },
        removeUser:(state, action) => {
            return null;
        } 

    }
})

export const {addUser, removeUser} = singInSlice.actions

export default singInSlice.reducer;