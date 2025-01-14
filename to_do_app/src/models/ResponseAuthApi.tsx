import { User } from "../entities/User";

export interface ResponseAuthApi {
    success: boolean;
    message: string;
    data: User |  null;
}