import { useDispatch } from "react-redux";
import { resetTaskState } from "../store/slices/task/taskSlice";
import { setLogOut, setUser } from "../store/slices/user/userSlice";
import { useEffect, useState } from "react";
import { Login } from "../../Domain/useCases/Login";
import { hideModal } from "../store/slices/modal/modalSlice";
import { TaskApi } from "../../Data/sources/api/remote/TaskApiSlice";

export const useSessionViewModel = () => {
  const dispatch = useDispatch();

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const logout = () => {
    dispatch(resetTaskState());
    dispatch(setLogOut());
    dispatch(hideModal());
    dispatch(TaskApi.util.resetApiState());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (error !== '') setError('');
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [error]);

  const submit = async (email: string, password: string) => {
    if (email === '' || password === '')
      return setError('Completa todos los campos.');

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email))
      return setError('Verifica que el email tenga el formato adecuado.');

    setIsLoading(true);

    const response = await Login(email, password);
    if (!response.success) {
      setIsLoading(false);
      return setError(response.message);
    }

    setIsLoading(false);
    dispatch(setUser(response.data));
  };

  return {
    logout,
    submit,
    error,
    isLoading,
  };
};
