import { useCallback, useEffect } from 'react';
import Header from '../components/Header.jsx';
import { getCurrentUserInfo } from '../api/login.js';
import { useAuth } from '../hooks/useAuth.js';
import { AdminRole } from '../const/user.js';
import { HeaderContent } from '../pages/Router.jsx';
import { useRouter } from '../hooks/useRouter.js';

function GeneralLayout({ children, withAuth, isAdminPage }) {
  const { isLoggedIn, userProfile, setLogin } = useAuth();
  const { routeTo } = useRouter();

  const fetchUserProfile = useCallback(async () => {
    const userProfileResponse = await getCurrentUserInfo();
    if (!isLoggedIn && userProfileResponse !== null) {
      setLogin(userProfileResponse);
      return;
    }
  }, [setLogin, routeTo]);

  useEffect(() => {
    fetchUserProfile();
  }, [children, fetchUserProfile]);

  useEffect(() => {
    console.log(withAuth, isLoggedIn);
    if (withAuth && !isLoggedIn) {
      alert('You need to login first!');
      routeTo('/');
      return;
    }

    if (isAdminPage && !userProfile?.userInfo.roles.includes(AdminRole)) {
      alert("You don't have permission to access this page!");
      routeTo('/');
      return;
    }
  }, [isAdminPage, isLoggedIn, routeTo, userProfile, withAuth]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header headerContent={HeaderContent} />
      <div className="m-0">{children}</div>
    </div>
  );
}

export default GeneralLayout;
