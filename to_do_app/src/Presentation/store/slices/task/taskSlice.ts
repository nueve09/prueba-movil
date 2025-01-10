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
        resetTaskState: (state) => {
            state.isLoading= false,
            state.taskList= [],
            state.error= '',
            state.filteredList= []
        },
        startLoadingTask : (state) =>{
           state.isLoading = true;
        },
    
        setTasks : (state, action) =>{
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
            state.filteredList = action.payload.filteredList
        },
        createTask : (state, action) =>{
            state.taskList = action.payload.taskList
            state.filteredList = action.payload.filteredList
        },
        filterList : (state, action) => {
            state.filteredList = action.payload.taskList
        }
         
    }
});

export const { resetTaskState, startLoadingTask , setTasks , removeTask , setError , editTask, filterList} = taskSlice.actions;