import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export function setCookie(name, value) {
  cookies.set(name, value, { maxAge: 60 * 60 * 3, path: '/' });
}

export function getCookie(name) {
  return cookies.get(name);
}

export function removeCookie(name) {
  return cookies.remove(name);
}
