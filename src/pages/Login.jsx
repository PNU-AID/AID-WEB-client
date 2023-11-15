import { useState } from 'react';
import { useAuth } from '../hooks/useAuth.js';
import { login } from '../api/login.js';
import { useRouter } from '../hooks/useRouter.js';
import { Link } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { setLogin } = useAuth();
  const { routeTo } = useRouter();

  async function handleLogin(e) {
    e.preventDefault();

    const email = user.email;
    const password = user.password;

    if (email === '' || password === '') {
      alert('Please fill out all fields!');
      return;
    }

    const res = await login(email, password);
    alert('Login ' + res);
    if (res === 'success') {
      setLogin(email, password);
      routeTo('/');
    }
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
      <Link to="/signup">회원가입</Link>
    </div>
  );
}

export default Login;
