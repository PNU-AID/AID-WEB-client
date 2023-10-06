import { createContext, useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  const login = useCallback(
    (email) => {
      setIsLoggedIn(true);
      setUserEmail(email);
      navigate('/');
    },
    [navigate]
  );

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserEmail('');
    navigate('/');
  }, [navigate]);

  const routeToLoginPage = useCallback(() => {
    navigate('/login');
  }, [navigate]);

  const routeToHomePage = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const value = useMemo(
    () => ({
      isLoggedIn,
      login,
      logout,
      userEmail,
      routeToLoginPage,
      routeToHomePage,
    }),
    [isLoggedIn, login, logout, userEmail, routeToLoginPage, routeToHomePage]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
