import { useState } from "react";

export const useForm = () => {
    const [login, setLogin] = useState({
        email: '',
        password: '',
      });
    
      const setEmail = (val: string) => setLogin({...login, email: val});
      
      const setPassword = (val: string) => setLogin({...login, password: val});


      return {
        login,
        setEmail,
        setPassword,
      };
    
}