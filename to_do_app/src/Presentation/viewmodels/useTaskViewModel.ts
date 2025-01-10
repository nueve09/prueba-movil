import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { editTask, filterList, removeTask, setTasks } from '../store/slices/task/taskSlice';
import { Task } from '../../Domain/entities/Task';
import { getTaskList } from '../store/slices/task/thunks';
import { showModal } from '../store/slices/modal/modalSlice';
import { TaskApi, useGetTasksQuery } from '../../Data/sources/api/remote/TaskApiSlice';

export const useTaskViewModel = () => {

  const { userId } = useSelector((state: RootState) => state.user);
  const { data: taskList, isLoading, error } = useGetTasksQuery({limit:50, userId});

   const dispatch = useDispatch<AppDispatch>();
  const [valueToFind, setValueToFind] = useState('');


  useEffect(() => {
    const findData = setTimeout(() => {
      find(valueToFind);
    }, 1000);
    return () => clearTimeout(findData);
  }, [valueToFind]);

  useEffect(()=>{
    if(taskList){
      dispatch(setTasks({taskList:[...taskList]}))
    }
  },[
    taskList, dispatch
  ])

  
  const find = (searchValue: string) => {
    if(!taskList) return;
    if (searchValue === '') return dispatch(filterList({taskList}));

    const newArr = taskList?.filter(
      (task: Task) =>
        task.id.toString().includes(searchValue) ||
        task.title.toLocaleLowerCase().includes(searchValue.toLowerCase()) || 
        task.completed.toLocaleLowerCase().includes(searchValue)
    );
    dispatch(filterList({taskList: newArr}));
  };

  const removeItem = (taskId:number,taskName:string) => {
    dispatch(showModal({
        visible:true,
        title:'Estas apunto de eliminar esta tarea.',
        message:`¿Estas seguro que deseas eliminar la tarea "${taskName}" ?`,
        actionText:'Eliminar',
        params:{taskId,taskName},
        action:'removeItem'
    }))
  };

  const requestExitConfirmation = () =>{
    dispatch(showModal({
        visible:true,
        title:'Estas apunto de cerrar sesion.',
        message:'¿Estas seguro que deseas cerrar tu sesion?',
        actionText:'Salir',
        params:null,
        action:'logout'
    }))
  }

  const editItem = (task:Task) => {
    const indexOf = taskList!.findIndex((item:Task) => item.id === task.id)

    if(indexOf < 0 ) return;

    const auxList = [... taskList as Task[]];

    auxList[indexOf] = task
    
    dispatch(editInCacheData(auxList));
  }

  const editInCacheData = (newArr:Task[]) => {
    return TaskApi.util.updateQueryData('getTasks',10,(draft) => {
      return newArr
    })
  }
  
  const saveItem = (task:Task) => {
    const lastId = taskList![taskList!.length-1].id+1
    const auxList = [ {...task,id:lastId,userId:userId!}, ... taskList as Task[]]
    dispatch(addInCacheData(auxList))
  }
  
  const addInCacheData = (newArr:Task[]) => {
    return TaskApi.util.updateQueryData('getTasks',10,(draft) => {
      return newArr
    })
  }

  const oddOrEven = (odd:string) => {
    if(!taskList) return;
    if(odd.toLowerCase() === 'all') return  dispatch(setTasks({taskList:[...taskList as Task[]]}));
    if(odd.toLowerCase() === 'inpar') return  dispatch(setTasks({taskList:[...taskList!.filter(item=>item.id%2)]}));
    if(odd.toLowerCase() === 'par') return  dispatch(setTasks({taskList:[...taskList!.filter(item=>item.id%2 === 0)]}));

  }

  return {
    setValueToFind,
    find,
    removeItem,
    requestExitConfirmation,
    editItem,
    saveItem,
    valueToFind,
    error,
    isLoading,
    taskList,
    oddOrEven
  }
};
