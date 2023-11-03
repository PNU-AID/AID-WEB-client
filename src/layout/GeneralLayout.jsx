import { useCallback, useEffect } from 'react';
import Header from '../components/Header.jsx';
import { getCurrentUserInfo } from '../api/login.js';
import { useAuth } from '../hooks/useAuth.js';
import { AdminRole } from '../const/user.js';
import { HeaderContent } from '../pages/Router.jsx';
import { useRouter } from '../hooks/useRouter.js';

function GeneralLayout({ children, withAuth, isAdminPage }) {
  const { isLoginedIn, userProfile, setLogin } = useAuth();
  const { routeTo } = useRouter();

  const fetchUserProfile = useCallback(async () => {
    const userProfileResponse = await getCurrentUserInfo();
    console.log('userProfileResponse', userProfileResponse);
    if (userProfileResponse === null) {
      setLogin(userProfileResponse);
      routeTo('/login');
      return;
    }
  }, [setLogin, routeTo]);

  useEffect(() => {
    fetchUserProfile();
  }, [children, fetchUserProfile]);

  if (withAuth && !isLoginedIn) {
    alert('You need to login first!');
    routeTo('/login');
    return <></>;
  }

  if (isAdminPage && !userProfile?.userInfo.roles.includes(AdminRole)) {
    alert("You don't have permission to access this page!");
    routeTo('/');
    return <></>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header headerContent={HeaderContent} />
      <div className="m-0">{children}</div>
    </div>
  );
}

export default GeneralLayout;
