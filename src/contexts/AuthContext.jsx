import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  // State
  const [isAuthenticated, setAuthentication] = useState(false);
  const toggleAuth = () => {
    setAuthentication(!isAuthenticated);
  };
  // useEffect
  useEffect(() => {
    alert(isAuthenticated ? "Login successfully." : "You are logged out, please login to see your todos.");
  }, [isAuthenticated]);

  // Context data
  const authContextData = {
    isAuthenticated,
    toggleAuth,
  };

  return <AuthContext.Provider value={authContextData}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
