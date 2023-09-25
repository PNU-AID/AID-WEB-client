import { useRef } from 'react';
import axios from 'axios';

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function handleLogin(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email.value === '' || password.value === '') {
      alert('Please fill out all fields');
      return;
    }

    axios
      .post('http://127.0.0.1/api/auth/login', {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        emailRef.current.value = '';
        passwordRef.current.value = '';
      })
      .catch((e) => console.error('Error: ', e));
  }
  return (
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
  );
}

export default Login;
