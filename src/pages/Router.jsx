import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import About from './About';
import Study from './Study';
import QnA from './QnA';
import Admin from './Admin';
import { createBrowserRouter } from 'react-router-dom';
import GeneralLayout from '../layout/GeneralLayout';

const routerData = [
  {
    id: 0,
    path: '/',
    label: 'Home',
    element: Home,
    withAuth: false,
    isAdminPage: false,
  },
  {
    id: 1,
    path: '/login',
    label: 'Login',
    element: Login,
    withAuth: false,
    isAdminPage: false,
  },
  {
    id: 2,
    path: '/signup',
    label: 'Signup',
    element: SignUp,
    withAuth: false,
    isAdminPage: false,
  },
  {
    id: 3,
    path: '/about',
    label: 'About',
    element: About,
    withAuth: false,
    isAdminPage: false,
  },
  {
    id: 4,
    path: '/study',
    label: 'Study',
    element: Study,
    withAuth: false,
    isAdminPage: false,
  },
  {
    id: 5,
    path: '/qna',
    label: 'QnA',
    element: QnA,
    withAuth: false,
    isAdminPage: false,
  },
  {
    id: 6,
    path: '/admin',
    label: 'Admin',
    element: Admin,
    withAuth: true,
    isAdminPage: true,
  },
];

export const routers = createBrowserRouter(
  routerData.map((router) => {
    if (router.label === 'Login' || router.label === 'Signup') {
      return {
        path: router.path,
        element: <router.element />,
      };
    }

    return {
      path: router.path,
      element: (
        <GeneralLayout
          isAdminPage={router.isAdminPage}
          withAuth={router.withAuth}
        >
          <router.element />
        </GeneralLayout>
      ),
    };
  })
);

export const HeaderContent = routerData.reduce((prev, router) => {
  if (router.label === 'Login' || router.label === 'Signup') {
    return prev;
  }

  return [
    ...prev,
    {
      id: router.id,
      path: router.path,
      label: router.label,
      isAdminPage: router.isAdminPage,
    },
  ];
}, []);
