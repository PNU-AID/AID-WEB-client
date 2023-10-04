// import components
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { useAuth } from '../hooks/useAuth.js';
import { routerInfoList } from '../pages/Router';

const Header = () => {
  const { isLoggedIn, logout, userEmail } = useAuth();

  return (
    <header className="relative top-0 z-20 p-4 px-4 mb-12 bg-white border-b border-gray-200 lg:mb-0 lg:px-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-[120px]">
            <Link to="/">
              <img alt="logo_img" src={Logo} />
            </Link>
            <div className="hidden lg:flex">
              <nav>
                <ul className="flex gap-x-8">
                  {routerInfoList.slice(3).map((routerInfo) => {
                    return (
                      <li key={routerInfo.path}>
                        <Link to={routerInfo.path}>{routerInfo.label}</Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
          {isLoggedIn ? (
            <div className="flex gap-2">
              <div className="px-4 py-2">{userEmail}</div>
              <div
                className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
                onClick={logout}
              >
                Logout
              </div>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                to="/login"
              >
                Login
              </Link>
              <Link className="px-4 py-2 text-blue-500" to="/signup">
                signup
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
