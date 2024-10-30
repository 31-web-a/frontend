import { createContext, useState, useContext, useEffect } from "react";

/**
 * 1.- Componente Provider ✅
 * 2.- customhook ✅
 */

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const localToken = localStorage.getItem("token") || null;

  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [isAuthenticated, setIsAuthenticated] = useState(Boolean(token));

  const login = (tokenArg) => {
    setIsAuthenticated(true);
    setToken(tokenArg);
    localStorage.setItem("token", tokenArg);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setToken(null);
  };

  useEffect(() => {
    setIsAuthenticated(Boolean(token));
  }, [token]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};
