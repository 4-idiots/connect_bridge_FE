import { useEffect, useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { validToken } from '../../service';

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
    alert('다시 로그인 해주세요');
    window.location.replace('/login');
  };

  // Refresh token for persisting session
  // 여기에 리프레시 토큰 주소 넣기
  const { data, error, isValidating } = useSWR(
    isLogin ? validToken : null,
    // url =>
    //   fetch(url, {
    //     credentials: 'include',
    //   }).then(res => res.json()),
    // {
    //   // Silently refresh token every expiry time
    //   refreshInterval: 1000 * 60 * 15,
    //   revalidateOnFocus: false,
    // },
    url => axios.get(url).then(response => response.data),
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

  useEffect(() => {
    // Sync all tabs on login or logout
    window.addEventListener('storage', e => {
      if (e.key === 'isLogin') {
        setIsLogin(e.newValue);
      }
    });
  });

  return { token, login, logout, isLogin, isLoading };
};

// 이게 로그인, 로그 아웃, refreshtoken 관련 hook
