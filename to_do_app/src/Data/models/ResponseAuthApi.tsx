import { User } from "../../Domain/entities/User";

export interface ResponseAuthApi {
    success: boolean;
    message: string;
    data: User |  null;
}