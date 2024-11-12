import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import users from "../data/users.json";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserSession = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("user");
        if (storedUser) {
          const user = JSON.parse(storedUser);
          setUser(user);
        }
      } catch (error) {
        console.error("Error al recuperar la sesion del usuario");
      } finally {
        setLoading(false);
      }
    };
    checkUserSession();
  }, []);

  const login = async (email, password) => {
    try {
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (!user) {
        throw new Error("Credenciales incorrectas");
      }

      await AsyncStorage.setItem("user", JSON.stringify(user));
      setUser(user);

      return {
        userId: user.userId,
        email: user.email,
        password: user.password,
      };
    } catch (error) {
      console.error("Error de login:", error);
      throw error;
    }
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
