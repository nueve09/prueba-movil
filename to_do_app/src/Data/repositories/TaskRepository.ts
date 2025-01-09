import { AxiosResponse } from "axios";
import { Task } from "../../Domain/entities/Task";
import { Taskrepository } from "../../Domain/repository/TaskRepository";
import { ResponseTaskApi } from "../models/ResponseTaskApi";
import { TaskApi } from "../sources/api/TaskApi";
import { TaskModel } from "../models/TaskModel";
import { TaskMapper } from "../mappers/taskMapper";

export class TaskrepositoryImpl implements Taskrepository{
    async getTasks(limit:number): Promise<ResponseTaskApi> {

        try{
            const response:AxiosResponse<TaskModel[]>= await TaskApi.get(`/todos?_limit=${limit}`);            
            return {
                data:TaskMapper.toDomainList(response.data),
                message:'task list',
                success:true
            }
            
        }catch(error){
            return {
                data:[],
                message:'task list',
                success:true
            }
            
        }
    }
}