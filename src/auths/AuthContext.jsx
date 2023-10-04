import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  const login = (email) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    navigate('/');
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserEmail('');
    navigate('/');
  };

  const routeToLoginPage = () => {
    navigate('/login');
  };

  const routeToHomePage = () => {
    navigate('/');
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        userEmail,
        routeToLoginPage,
        routeToHomePage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
