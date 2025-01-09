import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLogOut } from '../store/slices/user/userSlice';
import { removeTask } from '../store/slices/task/taskSlice';
import { RootState } from '../store/store';
import { hideModal, setActionDone } from '../store/slices/modal/modalSlice';

export const useGloblaModalViewModel = () => {

    const dispatch = useDispatch();
    const { taskList ,  filteredList} = useSelector((state:RootState) => state.task);
    const { params , visible , actionDone} = useSelector((state:RootState) => state.modal);

    const removeItem = () => {
        const newFilteredList = filteredList.filter(task=> task.id !== params!.taskId)
        const newList = taskList.filter(task=> task.id !== params!.taskId)
    
        dispatch(removeTask({filteredList:newFilteredList,taskList:newList}))
        dispatch(setActionDone({actionDone:true}))
        dispatch(hideModal());
        
      };
    
    const editItem = () => {
      
    }

    const actionsHandler:Record<string,any> = {
        'logout':()=>{
            dispatch(setLogOut());
            dispatch(hideModal())
        },
        'removeItem':()=>removeItem(),
        'editItem':()=>editItem(),
        'hide':()=>dispatch(hideModal()),
    }



  return {actionsHandler, visible, params ,actionDone}
}
