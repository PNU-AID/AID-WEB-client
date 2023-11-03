import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import About from './About';
import Study from './Study';
import QnA from './QnA';

export const routerInfoList = [
  {
    path: '/',
    element: <Home />,
    withAuthorization: false,
    label: 'Home',
  },
  {
    path: '/login',
    element: <Login />,
    withAuthorization: false,
    label: 'Login',
  },
  {
    path: '/signup',
    element: <SignUp />,
    withAuthorization: false,
    label: 'Signup',
  },
  {
    path: '/about',
    element: <About />,
    withAuthorization: false,
    label: 'About',
  },
  {
    path: '/study',
    element: <Study />,
    withAuthorization: true,
    label: 'Study',
  },
  {
    path: '/qna',
    element: <QnA />,
    withAuthorization: false,
    label: 'QnA',
  },
];
