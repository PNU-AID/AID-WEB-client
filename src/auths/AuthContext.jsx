import { createContext, useState, useMemo, useCallback } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userProfile, setUserProfile] = useState({ email: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setLogin = useCallback((email, password) => {
    setUserProfile({ email, password });
    setIsLoggedIn(true);
  }, []);

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
