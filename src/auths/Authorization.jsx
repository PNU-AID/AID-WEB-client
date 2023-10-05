import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth.js';

function Authorization({ children }) {
  const { isLoggedIn, routeToLoginPage } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      alert('You need to login first!');
      routeToLoginPage();
    }
  }, [isLoggedIn, routeToLoginPage]);

  return <>{children}</>;
}

export default Authorization;
