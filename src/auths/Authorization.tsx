import React from 'react';
import { useAuth } from '../hooks/useAuth.js';

interface AuthorizationProps {
  children: React.ReactNode;
}

function Authorization({ children }: AuthorizationProps) {
  const { isLoggedIn, routeToLoginPage } = useAuth();

  if (isLoggedIn) {
    routeToLoginPage();
    return <>로그인 페이지로 이동합니다...</>;
  }

  return <>{children}</>;
}

export default Authorization;
