import axios from 'axios';
import { getCookie } from './Cookie';

const ACCESS_TOKEN_NAME = import.meta.env.VITE_ACCESS_TOKEN_NAME;

export function postWithToken(url: string, data: any) {
  const token = getCookie(ACCESS_TOKEN_NAME);
  return axios.post(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function getWithToken(url: string) {
  const token = getCookie(ACCESS_TOKEN_NAME);
  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function deleteWithToken(url: string) {
  const token = getCookie(ACCESS_TOKEN_NAME);
  return axios.delete(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function putWithToken(url: string, data: any) {
  const token = getCookie('access_token');
  return axios.put(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
