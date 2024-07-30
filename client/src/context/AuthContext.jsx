import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext({
  currentUser: null,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/login",
        inputs
      );
      setCurrentUser(res.data);
    } catch (error) {
      throw error;
    }
  };

  const logout = async (inputs) => {
    await axios.post("http://localhost:8800/api/auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  const valueProp = {
    currentUser,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={valueProp}>{children}</AuthContext.Provider>
  );
};
