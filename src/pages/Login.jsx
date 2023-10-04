import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { useAuth } from '../auths/AuthContext';

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  function handleLogin(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email.value === '' || password.value === '') {
      alert('Please fill out all fields');
      return;
    }

    axios
      .post(
        'http://127.0.0.1/api/auth/login',
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
          navigate('/');
        } else {
          console.error(res);
        }
      })
      .catch((e) => {
        console.error('Error: ', e);
        alert('로그인이 실패했습니다.');
      });
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-10 bg-gray-100">
      <h1 className="text-3xl font-bold">AID</h1>
      <div className="p-8 text-center bg-white rounded-lg shadow-md w-96">
        <form className="flex flex-col items-center gap-5 w-300">
          <label className="text-center">AID 로그인</label>
          <input
            className="px-4 py-2 border border-gray-300 rounded-lg"
            id="email"
            placeholder="Email"
            ref={emailRef}
            required
            type="email"
          />
          <input
            className="px-4 py-2 border border-gray-300 rounded-lg"
            id="password"
            placeholder="Password"
            ref={passwordRef}
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
        <a className="text-blue-500 underline" href="/signup">
          signup
        </a>
      </div>
    </div>
  );
}

export default Login;
