'use client';

import { createContext, useContext, useState, useEffect } from 'react';

// Create UserContext
const UserContext = createContext();

// Custom hook for easy access
export const useUser = () => useContext(UserContext);

// UserProvider Component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // On initial load, check if the user data is saved in localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('userProfile');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Update user context and save to localStorage
  const updateUser = (userData) => {
    setUser(userData);
    localStorage.setItem('userProfile', JSON.stringify(userData)); // Save to localStorage
  };

  // Clear user data
  const clearUser = () => {
    setUser(null);
    localStorage.removeItem('userProfile');
  };

  return (
    <UserContext.Provider value={{ user, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};
