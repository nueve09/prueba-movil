import { Task } from "../../Domain/entities/Task";
import { TaskModel } from "../models/TaskModel";

export class TaskMapper {
  static toDomain(taskModel: TaskModel): Task {
    return { 
        id:taskModel.id,
        title: taskModel.title,
        userId: taskModel.userId,
        completed:taskModel.completed  ? 'completado' : 'pendiente'
    }
  }

  static toDomainList(taskList:TaskModel[]):Task[]{
    return taskList.map(this.toDomain);
  }

 
}