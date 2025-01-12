import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../../entities/User";

const initialState : User = {
    email:'',
    userId:0,
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser : (state, action) =>{
            state.email = action.payload.email;
            state.userId = action.payload.userId
        },
    
        setLogOut : (state) =>{
            state.email = '';
            state.userId = null
        },
    
    }
});

export const { setUser , setLogOut } = userSlice.actions;