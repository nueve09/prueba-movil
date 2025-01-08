import { useEffect, useState } from "react";
import { Login } from "../../Domain/useCases/Login";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/user/userSlice";

//TODO: Convert to view model
export const useLogin = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    
    const timer = setTimeout(()=>{
      if(error!=='') setError('');
        },2000)
    

    return ()=> {clearTimeout(timer)}
  },[error])
  

  const submit = async (email:string, password:string) => {
    if (email === '' || password === '') return setError('Completa todos los campos.');
    
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(!regex.test(email))return setError('Verifica que el email tenga el formato adecuado.');

    setIsLoading(true);
    const response = await Login(email, password);
   
    if (!response.success) {
      setIsLoading(false);
      return setError(response.message)
    };

    setIsLoading(false);
    dispatch(setUser(response.data));
  };


  return {
    error,
    isLoading,
    submit,
  };
};