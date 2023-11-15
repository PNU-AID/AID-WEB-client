import { createContext, useState, useMemo, useCallback } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userProfile, setUserProfile] = useState({ email: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setLogin = useCallback(
    (user) => {
      if (!isLoggedIn) {
        setUserProfile(user);
        setIsLoggedIn(true);
      }
    },
    [isLoggedIn]
  );

  const setLogout = useCallback(() => {
    setUserProfile(null);
    setIsLoggedIn(false);
  }, []);

  const value = useMemo(
    () => ({
      userProfile,
      isLoggedIn,
      setLogin,
      setLogout,
    }),
    [userProfile, isLoggedIn, setLogin, setLogout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
