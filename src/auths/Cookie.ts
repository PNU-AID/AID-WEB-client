import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export function setCookie(name: string, value: string) {
  return cookies.set(name, value, { maxAge: 60 * 60 * 3, path: '/' });
}

export function getCookie(name: string) {
  return cookies.get(name);
}

export function removeCookie(name: string) {
  return cookies.remove(name);
}
