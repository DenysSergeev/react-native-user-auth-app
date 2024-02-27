import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check AsyncStorage for existing user data during app start
    const retrieveUserData = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Error retrieving user data:', error);
      }
    };

    retrieveUserData();
  }, []);

  const login = userData => {
    setUser(userData);

    // Save user data to AsyncStorage
    AsyncStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = async () => {
    // Clear user data on logout
    setUser(null);

    // Remove user data from AsyncStorage
    try {
      await AsyncStorage.removeItem('user');
    } catch (error) {
      console.error('Error removing user data:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
