import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth.js';
import { Link } from 'react-router-dom';

function SignUp() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    passwordCheck: '',
  });
  const { routeToLoginPage } = useAuth();

  const handleSignUp = (e) => {
    e.preventDefault();

    const email = user.email;
    const password = user.password;
    const passwordCheck = user.passwordCheck;

    if (email === '' || password === '' || passwordCheck === '') {
      alert('Please fill out all fields!');
      return;
    }
    if (password !== passwordCheck) {
      alert('Passwords do not match!');
      return;
    }

    axios
      .post(
        import.meta.env.VITE_SERVER_URL + '/api/auth/signup',
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
          routeToLoginPage();
        } else {
          console.error(res);
          alert('회원가입에 실패하였습니다.');
        }
      })
      .catch((e) => {
        console.error('Error: ', e);
        alert('이미 존재하는 이메일입니다.');
      });
  };

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
      <h1 className="text-4xl font-bold">회원가입</h1>
      <div className="p-8 text-center bg-white rounded-lg shadow-md w-96">
        <form
          className="flex flex-col items-center gap-5 w-300"
          onSubmit={handleSignUp}
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
          <input
            className="px-4 py-2 border border-gray-300 rounded-lg"
            name="passwordCheck"
            onChange={handleInputChange}
            placeholder="check password"
            required
            type="password"
          />
          <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
            회원가입
          </button>
        </form>
      </div>
      <Link to="/login">로그인</Link>
    </div>
  );
}

export default SignUp;
