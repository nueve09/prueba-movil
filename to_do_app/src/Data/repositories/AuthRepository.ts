import { login } from "../sources/api/remote/AuthApi";
import { ResponseAuthApi } from "../models/ResponseAuthApi";
import { User } from "../../Domain/entities/User";
import { AuthRepository } from "../../Domain/repository/AuthRepository";

export class AuthRepositoryImpl implements AuthRepository {
   async login(email: string, password: string): Promise<ResponseAuthApi> {
    try {
      const response = await login(email, password);
      return {
        message: 'success',
        data: response as User,
        success: true,
      };
    } catch (error) {
      return {
        message: error as string,
        data: null,
        success: false,
      };
    }
   }  
}