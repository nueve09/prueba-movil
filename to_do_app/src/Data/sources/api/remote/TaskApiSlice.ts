import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Task } from '../../../../Domain/entities/Task';
import { TaskMapper } from '../../../mappers/taskMapper';
import { TaskModel } from '../../../models/TaskModel';
import { setTasks } from '../../../../Presentation/store/slices/task/taskSlice';

export const TaskApi = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  tagTypes: ['Task'],
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], any>({
      query: ({limit, userId}) => `todos?_limit=${limit}`, 
      providesTags: ['Task'],  
      transformResponse:((response: TaskModel[], meta, {userId} )=> {
        console.log(TaskMapper.toDomainList(response,userId).length , userId)
        return TaskMapper.toDomainList(response,userId);
      }),
      
    }),
  }),
});

export const { useGetTasksQuery } = TaskApi;