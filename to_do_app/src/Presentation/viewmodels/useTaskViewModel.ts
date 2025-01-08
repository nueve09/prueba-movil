import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { filterList, removeTask } from '../store/slices/task/taskSlice';
import { Task } from '../../Domain/entities/Task';
import { getTaskList } from '../store/slices/task/thunks';

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

  const removeItem = (taskId:number) => {
    const newFilteredList = filteredList.filter(task=> task.id !== taskId)
    const newList = taskList.filter(task=> task.id !== taskId)

    dispatch(removeTask({filteredList:newFilteredList,taskList:newList}))
  };
  

  return {
    setValueToFind,
    find,
    removeItem,
    valueToFind,
    filteredList,
    error,
    isLoading,
  }
};
