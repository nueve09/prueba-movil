import { Dispatch } from "@reduxjs/toolkit"
import { setError, setTasks, startLoadingTask } from "./taskSlice";
import { GetTaskList } from "../../../../Domain/useCases/GetTaskList";

export const getTaskList = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(startLoadingTask());

      const response = await GetTaskList(50);

      if (response.data) dispatch(setTasks({taskList: response.data}));
    } catch (error) {
      dispatch(setError({error}))
    }
  };
};


