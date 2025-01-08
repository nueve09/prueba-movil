import { useState } from "react";

export const useForm = () => {
    const [loginForm, setLogin] = useState({
        email: '',
        password: '',
      });
    
      const setEmail = (val: string) => setLogin({...loginForm, email: val});
      
      const setPassword = (val: string) => setLogin({...loginForm, password: val});


      return {
        loginForm,
        setEmail,
        setPassword,
      };
    
}