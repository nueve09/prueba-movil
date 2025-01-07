import { useState } from "react";
import { Login } from "../../Domain/useCases/Login";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/user/userSlice";

export const useLogin = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  

  const submit = async (email:string, password:string) => {
    if (email === '' || password === '')
      return setError('Incomplete fields');

    const response = await Login(email, password);
    if (!response.success) return setError(response.message);

    dispatch(setUser(response.data));
  };

  return {
    error,

    submit,
  };
};