import { login } from "../sources/api/AuthApi";
import { ResponseAuthApi } from "../sources/ResponseAuthApi";

export class AuthRepositoryImpl implements AuthRepositoryImpl {
  async login(email: string, password: string): Promise<ResponseAuthApi> {
    try {
      const response = await login(email, password);
      return {
        message: 'success',
        data: response,
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