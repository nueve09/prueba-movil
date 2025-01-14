import { User } from "../../entities/User";
import { ResponseAuthApi } from "../../models/ResponseAuthApi";

export interface AuthRepository {

    login(email:string, password:string): Promise<ResponseAuthApi>;


}