import { useNavigate } from 'react-router-dom';

export function useRouter() {
  const router = useNavigate();

  return {
    currentPath: window.location.pathname,
    routeTo: (path) => router(path),
  };
}
