// 'use client';

// import { createContext, useContext, useState, useEffect } from 'react';

// // Create UserContext
// const UserContext = createContext();

// // Custom hook for easy access
// export const useUser = () => useContext(UserContext);

// // UserProvider Component
// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   // On initial load, check if the user data is saved in localStorage
//   useEffect(() => {
//     const storedUser = localStorage.getItem('userProfile');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   // Update user context and save to localStorage
//   const updateUser = (userData) => {
//     setUser(userData);
//     localStorage.setItem('userProfile', JSON.stringify(userData)); // Save to localStorage
//   };

//   // Clear user data
//   const clearUser = () => {
//     setUser(null);
//     localStorage.removeItem('userProfile');
//   };

//   return (
//     <UserContext.Provider value={{ user, updateUser, clearUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import * as amplitude from '@amplitude/analytics-browser';

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
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      initializeAmplitude(parsedUser); // Initialize if user exists
    }
  }, []);

  // Initialize Amplitude only when a user is available
  const initializeAmplitude = (userData) => {
    console.log('Initializing Amplitude...');

    amplitude.init(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY);
    amplitude.setUserId(userData.id);

    // Create an Identify instance
    const identify = new amplitude.Identify();
    identify.set('firstName', userData.firstName);
    identify.set('lastName', userData.lastName);
    identify.set('email', userData.email);

    // Send user properties
    amplitude.identify(identify);

    // Track login event
    amplitude.track('User Logged In', { email: userData.email });
  };

  // Update user context and save to localStorage
  const updateUser = (userData) => {
    setUser(userData);
    localStorage.setItem('userProfile', JSON.stringify(userData));

    // Initialize Amplitude for the new user
    initializeAmplitude(userData);
  };

  // Clear user data
  const clearUser = () => {
    setUser(null);
    localStorage.removeItem('userProfile');
    amplitude.reset(); // Reset tracking on logout
  };

  return (
    <UserContext.Provider value={{ user, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};
