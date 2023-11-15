import axios from 'axios';
import { getWithToken } from '../auths/AuthAxios';
import { setCookie } from '../auths/Cookie';

export async function login(email, password) {
  const res = await axios.post(
    import.meta.env.VITE_SERVER_URL + '/api/auth/login',
    { email: email, password: password },
    {
      withCredentials: true,
    }
  );
  console.log(res);
  const accessToken = res.headers['authorization'].split(' ')[1];
  console.log(accessToken);
  if (res.status === 200 && accessToken) {
    console.log(accessToken);
    setCookie(import.meta.env.VITE_ACCESS_TOKEN_NAME, accessToken);
  }
  return res.status === 200 ? 'success' : 'fail';
}

export async function getCurrentUserInfo() {
  const res = await getWithToken(
    import.meta.env.VITE_SERVER_URL + '/api/user/me'
  );

  return res.status === 200 ? res.data : null;
}
