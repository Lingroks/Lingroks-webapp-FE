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

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Initialize Amplitude once on mount
  useEffect(() => {
    amplitude.init(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY);
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem('userProfile');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

  useEffect(() => {
    if (user && user._id) {
      initializeAmplitude(user);
    }
  }, [user]);

  // const initializeAmplitude = (userData) => {
  //   console.log('Initializing Amplitude with user:', userData);

  //   amplitude.setUserId(userData._id);

  //   // const identify = new amplitude.Identify();

  //   const identifyEvent = new amplitude.Identify();
  //   // Use methods in the following sections to update the Identify object
  //   identifyEvent.set('firstName', userData.firstName);
  //   identifyEvent.set('lastName', userData.lastName);
  //   identifyEvent.set('email', userData.email);

  //   amplitude.identify(identifyEvent);
  //   amplitude.track('User Logged In', { email: userData.email });
  // };

  const initializeAmplitude = (userData) => {
    if (!userData || !userData._id) return; // Ensure valid user data

    if (!amplitude.initialized) {
      console.log('Initializing Amplitude...');
      amplitude.init(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY);
      amplitude.initialized = true; // Mark as initialized
    }

    console.log('Setting Amplitude user:', userData);

    amplitude.setUserId(userData._id);

    const identifyEvent = new amplitude.Identify();
    identifyEvent.set('firstName', String(userData.firstName || ''));
    identifyEvent.set('lastName', String(userData.lastName || ''));
    identifyEvent.set('email', String(userData.email || ''));

    amplitude.identify(identifyEvent);
    amplitude.track('User Logged In', { email: userData.email });
  };

  const updateUser = (userData) => {
    setUser(userData);
    localStorage.setItem('userProfile', JSON.stringify(userData));
  };

  const clearUser = () => {
    setUser(null);
    localStorage.removeItem('userProfile');
    amplitude.reset();
  };

  return (
    <UserContext.Provider value={{ user, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};
