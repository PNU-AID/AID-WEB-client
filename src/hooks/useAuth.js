import { useContext } from 'react';
import { AuthContext } from '../auths/AuthContext';

export function useAuth() {
  return useContext(AuthContext);
}
