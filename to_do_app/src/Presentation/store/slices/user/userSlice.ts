import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:'user',
    initialState:{
        email:'',
        userId:''
    },
    reducers:{
        setUser : (state, action) =>{
            state.email = action.payload.email;
            state.userId = action.payload.userId
        },
    
        setLogOut : (state) =>{
            state.email = '';
            state.userId = ''
        },
    
    }
});

export const { setUser , setLogOut } = userSlice.actions;