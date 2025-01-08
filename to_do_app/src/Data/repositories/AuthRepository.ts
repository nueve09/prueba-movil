import { login } from "../sources/api/AuthApi";
import { ResponseAuthApi } from "../models/ResponseAuthApi";
import { User } from "../../Domain/entities/User";

export class AuthRepositoryImpl implements AuthRepositoryImpl {
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