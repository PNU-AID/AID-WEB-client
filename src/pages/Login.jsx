function Login() {
  function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    console.log(username.value, password.value);
    username.value = '';
    password.value = '';
  }
  return (
    <>
      <form className="flex flex-col items-center gap-5 w-300">
        <label className="text-center">AID 로그인</label>
        <input
          id="username"
          type="text"
          placeholder="UserID"
          className="px-4 py-2 rounded-lg border border-gray-300"
        />
        <input
          id="password"
          type="password"
          placeholder="Password"
          className="px-4 py-2 rounded-lg border border-gray-300"
        />
        <button
          onClick={handleLogin}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          로그인
        </button>
      </form>
    </>
  );
}

export default Login;
