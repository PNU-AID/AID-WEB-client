// import components
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { useAuth } from '../hooks/useAuth.js';

const Header = ({ headerContent }) => {
  const { isLoggedIn, setLogout, userProfile } = useAuth();

  return (
    <header className="fixed top-0 z-10 w-full p-2 px-4 mb-12 bg-white lg:mb-0 lg:px-0">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-[120px] ">
            <Link to="/">
              <img alt="logo_img" className="w-full h-full" src={Logo} />
            </Link>
            <div className="hidden lg:flex">
              <nav>
                <ul className="flex gap-x-8">
                  {headerContent
                    .filter((element) => {
                      if (!element.withAuth && !element.isAdminPage) {
                        return true;
                      }

                      if (element.isAdminPage) {
                        return (
                          isLoggedIn && userProfile == 'min49590@naver.com'
                        );
                      }
                      return !!userProfile;
                    })
                    .map((element) => {
                      return (
                        <li key={element.id}>
                          <Link
                            className="px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100"
                            to={element.path}
                          >
                            {element.label}
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </nav>
            </div>
          </div>
          {isLoggedIn ? (
            <div className="flex gap-2">
              <div className="px-4 py-2">{userProfile.email}</div>
              <div
                className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
                onClick={setLogout}
              >
                Logout
              </div>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                className="px-4 py-2 rounded-lg hover:text-blue-500"
                to="/login"
              >
                Login | Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
