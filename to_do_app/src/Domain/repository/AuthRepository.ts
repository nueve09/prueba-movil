import { ResponseAuthApi } from "../../Data/models/ResponseAuthApi";
import { User } from "../entities/User";

export interface AuthRepository {

    login(email:string, password:string): Promise<ResponseAuthApi>;


}