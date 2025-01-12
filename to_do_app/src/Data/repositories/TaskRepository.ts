import { AxiosResponse } from "axios";
import { Taskrepository } from "../../Domain/repository/TaskRepository";
import { TaskApi } from "../sources/api/remote/TaskApi";
import { TaskMapper } from "../../helpers/taskMapper";
import { ResponseTaskApi } from "../../models/ResponseTaskApi";
import { TaskModel } from "../../models/TaskModel";

export class TaskrepositoryImpl implements Taskrepository{
    async getTasks(limit:number): Promise<ResponseTaskApi> {

        try{
            const response:AxiosResponse<TaskModel[]>= await TaskApi.get(`/todos?_limit=${limit}`);            
            return {
                data:TaskMapper.toDomainList(response.data,0),
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