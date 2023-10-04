// import components
import Logo from '../assets/images/logo.png';
import { useAuth } from '../auths/AuthContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isLoggedIn, logout, userEmail } = useAuth();

  return (
    <header className="relative top-0 z-20 p-4 px-4 mb-12 bg-white border-b border-gray-200 lg:mb-0 lg:px-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-[120px]">
            <a href="/">
              <img alt="logo_img" src={Logo} />
            </a>
            <div className="hidden lg:flex">
              <nav>
                <ul className="flex gap-x-8">
                  <li key="0">
                    <a href="/about">About</a>
                  </li>
                  <li key="1">
                    <a href="/study">Study</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {isLoggedIn ? (
            <div className="flex gap-6">
              {userEmail}
              <div className="text-red-500" onClick={logout}>
                Logout
              </div>
            </div>
          ) : (
            <Link className="text-blue-500" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
