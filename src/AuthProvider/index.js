import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {
  const [token, setToken] = useState(null);
  const value = { token, setToken };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const { token, setToken } = useContext(AuthContext);
  const resetToken = () => setToken(null);
  return { token, setToken, resetToken };
};

export default Provider;
