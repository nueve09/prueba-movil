import { useDispatch, useSelector } from 'react-redux'
import { removeTask } from '../store/slices/task/taskSlice';
import { AppDispatch, RootState } from '../store/store';
import { hideModal } from '../store/slices/modal/modalSlice';
import { TaskApi } from '../../Data/sources/api/remote/TaskApiSlice';
import { setLogOut } from '../store/slices/user/userSlice';

export const useGloblaModalViewModel = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { filteredList} = useSelector((state:RootState) => state.task);
    const { params , visible } = useSelector((state:RootState) => state.modal);

    const removeItem = (onHide:()=>void) => {
      if(!params?.taskId)return dispatch(setLogOut())
        const newFilteredList = filteredList.filter(task=> task.id !== params!.taskId)
        dispatch(removeInCacheData())
        dispatch(removeTask({filteredList:newFilteredList}))
        dispatch(hideModal());
        onHide();
      };


    const removeInCacheData = () => {
      return TaskApi.util.updateQueryData('getTasks',10,(draft) => {
        const newList = draft!.filter(task=> task.id !== params!.taskId)
        return newList
      })
    }

    const hide = () => dispatch(hideModal())

  return {visible, params ,hide, removeItem}
}
