import { useEffect, useState } from 'react';
import useSWR from 'swr';
import customAxios from '../../services/customAxios';
import { validToken } from '../../services/loginService';

export const useProvideAuth = () => {
  const [token, setToken] = useState();
  const [isLogin, setIsLogin] = useState(
    !!JSON.parse(localStorage.getItem('isLogin')),
  );
  const [isLoading, setIsLoading] = useState(true);

  const login = accessToken => {
    localStorage.setItem('isLogin', true);
    localStorage.setItem('token', accessToken);
    setToken(accessToken);
    setIsLogin(true);
  };

  const logout = () => {
    localStorage.removeItem('isLogin');
    localStorage.removeItem('token');
    setToken(null);
    setIsLogin(false);
    delete customAxios.defaults.headers.common.Authorization;
    alert('다시 로그인 해주세요.');
    window.location.replace('/login');
  };

  const { data, error, isValidating } = useSWR(
    isLogin ? validToken : null,
    url => customAxios.get(url).then(response => response.data),
    {
      refreshInterval: 1000000,
      revalidateOnFocus: false,
    },
  );

  useEffect(() => {
    if (data) {
      login(data.accessToken);
    }
    if (error) {
      logout();
    }
    setIsLoading(isValidating);
  }, [data, error, isValidating]);

  return { token, login, logout, isLogin, isLoading };
};
