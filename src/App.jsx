import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import { routers } from './pages/Router';
import { AuthProvider } from './auths/AuthContext';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 0,
    });
  }, []);

  return (
    <AuthProvider>
      <RouterProvider router={routers} />
    </AuthProvider>
  );
}

export default App;
