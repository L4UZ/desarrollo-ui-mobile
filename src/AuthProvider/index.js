import React, { createContext, useState, useContext, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(async () => {
    const storedToken = await AsyncStorage.getItem('token');
    if (storedToken) setToken(storedToken);
    await SplashScreen.hideAsync();
  }, []);

  const setTokenOverride = newToken => {
    setToken(newToken);

    if (!newToken) AsyncStorage.removeItem('token');
    else AsyncStorage.setItem('token', newToken);
  };

  const value = { token, setToken: setTokenOverride };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const { token, setToken } = useContext(AuthContext);
  const resetToken = () => setToken(null);
  return { token, setToken, resetToken };
};

export default Provider;
