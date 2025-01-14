import { login } from "../../api/AuthApi";
import { User } from "../../entities/User";
import { AuthRepository } from "../../Domain/repository/AuthRepository";
import { ResponseAuthApi } from "../../models/ResponseAuthApi";

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