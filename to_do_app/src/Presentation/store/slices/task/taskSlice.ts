import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../../../../Domain/entities/Task";

interface TaskState {
    isLoading:boolean;
    taskList:Task[];
    error:string;
    filteredList:Task[]
}

const initialState:TaskState = {
    isLoading:false,
    taskList:[],
    error:'',
    filteredList:[]
}

export const taskSlice = createSlice({
    name:'task',
    initialState,
    reducers:{
        startLoadingTask : (state) =>{
           state.isLoading = true;
        },
    
        setTasks : (state, action) =>{
            state.isLoading = false;
            state.taskList = action.payload.taskList
            state.filteredList = action.payload.taskList
        },
        setError : (state,action) => {
            state.isLoading = false,
            state.error = action.payload.error
        },
        removeTask : (state, action)=>{
            state.taskList = action.payload.taskList
            state.filteredList = action.payload.filteredList
        },
        editTask : (state, action)=>{
            state.taskList = action.payload.taskList
        },
        filterList : (state, action) => {
            state.filteredList = action.payload.taskList
        }
         
    }
});

export const { startLoadingTask , setTasks , removeTask , setError , editTask, filterList} = taskSlice.actions;