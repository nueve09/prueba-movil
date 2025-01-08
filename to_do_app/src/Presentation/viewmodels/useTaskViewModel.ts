import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { filterList, removeTask } from '../store/slices/task/taskSlice';
import { Task } from '../../Domain/entities/Task';
import { getTaskList } from '../store/slices/task/thunks';
import { showModal } from '../store/slices/modal/modalSlice';

export const useTaskViewModel = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { taskList , error , isLoading, filteredList} = useSelector((state:RootState) => state.task);
  const [valueToFind, setValueToFind] = useState('');

  useEffect(() => {
    const findData = setTimeout(() => {
      find(valueToFind);
    }, 1000);
    return () => clearTimeout(findData);
  }, [valueToFind]);

  useEffect(()=>{
    dispatch(getTaskList())
  },[])

  const find = (searchValue: string) => {
    if (searchValue === '') return dispatch(filterList({taskList}));

    const newArr = taskList.filter(
      (task: Task) =>
        task.userId.toString().includes(searchValue) ||
        task.title.toLocaleLowerCase().includes(searchValue.toLowerCase()),
    );
    dispatch(filterList({taskList: newArr}));
  };

  const removeItem = (taskId:number,taskName:string) => {
    dispatch(showModal({
        visible:true,
        title:'Estas apunto de eliminar esta tarea.',
        message:`Estas seguro que deseas eliminat la tarea "${taskName}"`,
        actionText:'Eliminar',
        params:{taskId,taskName},
        action:'removeItem'
    }))
  };

  const requestExitConfirmation = () =>{
    dispatch(showModal({
        visible:true,
        title:'Estas apunto de cerrar sesion.',
        message:'Estas seguro que deseas cerrar tu sesion?',
        actionText:'Salir',
        params:null,
        action:'logout'
    }))
  }
  

  return {
    setValueToFind,
    find,
    removeItem,
    requestExitConfirmation,
    valueToFind,
    filteredList,
    error,
    isLoading,
  }
};
