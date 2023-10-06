import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Header from './components/Header';
import { AuthProvider } from './auths/AuthContext';
import { routerInfoList } from './pages/Router';
import Authorization from './auths/Authorization';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 0,
    });
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          {routerInfoList.map((routerInfo) => {
            return (
              <Route
                element={
                  routerInfo.withAuthorization ? (
                    <Authorization>{routerInfo.element}</Authorization>
                  ) : (
                    routerInfo.element
                  )
                }
                key={routerInfo.path}
                path={routerInfo.path}
              />
            );
          })}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
