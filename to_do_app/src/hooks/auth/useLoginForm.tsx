import { useState } from "react";

export const useLoginForm = () => {
  //TODO: Remoce credentials
    const [loginForm, setLogin] = useState({
        email: 'user2@example.com',
        password: 'pass456',
      });
    
      const setEmail = (val: string) => setLogin({...loginForm, email: val});
      
      const setPassword = (val: string) => setLogin({...loginForm, password: val});


      return {
        loginForm,
        setEmail,
        setPassword,
      };
    
}