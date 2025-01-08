import { Task } from "../../Domain/entities/Task";
import { Taskrepository } from "../../Domain/repository/TaskRepository";
import { ResponseTaskApi } from "../models/ResponseTaskApi";
import { TaskApi } from "../sources/api/TaskApi";

export class TaskrepositoryImpl implements Taskrepository{
    async getTasks(limit:number): Promise<ResponseTaskApi> {

        try{
            const response= await TaskApi.get(`/todos?_limit=${limit}`);
            return {
                data:response.data,
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