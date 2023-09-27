// import components
import Logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <header className="mb-12 lg:mb-0 z-20 relative px-4 lg:px-0 sticky top-0 bg-white p-4 border-b border-gray-200">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-[120px]">
            <a href="/">
              <img src={Logo} alt="logo_img" />
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
          <a href="/login">Login</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
