import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth.js';

function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { login, routeToHomePage } = useAuth();

  function handleLogin(e) {
    e.preventDefault();

    const email = user.email;
    const password = user.password;

    if (email === '' || password === '') {
      alert('Please fill out all fields!');
      return;
    }

    axios
      .post(
        import.meta.env.VITE_SERVER_URL + '/api/auth/login',
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.status === 200) {
          login(email, password);
          routeToHomePage();
        } else {
          console.error(res);
          alert('로그인이 실패했습니다.');
        }
      })
      .catch((e) => {
        console.error('Error: ', e);
        alert('Server Error');
      });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((state) => {
      return {
        ...state,
        [name]: value,
      };
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-10 bg-gray-100">
      <h1 className="text-4xl font-bold">로그인</h1>
      <div className="p-8 text-center bg-white rounded-lg shadow-md w-96">
        <form
          className="flex flex-col items-center gap-5 w-300"
          onSubmit={handleLogin}
        >
          <input
            className="px-4 py-2 border border-gray-300 rounded-lg"
            name="email"
            onChange={handleInputChange}
            placeholder="email"
            required
            type="email"
          />
          <input
            className="px-4 py-2 border border-gray-300 rounded-lg"
            name="password"
            onChange={handleInputChange}
            placeholder="password"
            required
            type="password"
          />
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            onClick={handleLogin}
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
