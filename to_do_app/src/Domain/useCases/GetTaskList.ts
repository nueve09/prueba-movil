import { TaskrepositoryImpl } from "../../Data/repositories/TaskRepository"

const { getTasks } = new TaskrepositoryImpl();

export const GetTaskList =  async (limit:number) => {
    return await getTasks(limit);
}