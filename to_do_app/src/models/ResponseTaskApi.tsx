import { Task } from "../entities/Task";

export interface ResponseTaskApi {
    data: Task[];
    success: boolean;
    message: string;
}