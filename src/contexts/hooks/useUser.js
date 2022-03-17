import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { useAuth } from './useAuth';

export const useUser = () => {
  const { token } = useAuth();
  const [user, setUser] = useState();

  // 여기에 검증하는 통신을 하면 되지 않을까
  const { data, error, mutate } = useSWR(
    token ? `${process.env.REACT_APP_SUK_URL}/user/login` : null,
    url => {},
  );

  useEffect(() => {
    if (data) {
      setUser(data);
    }
    if (error) {
      setUser(null);
    }
  }, [data, error]);

  return { user, mutate };
};

// 이 hook은 user 정보 조회 할 때 사용
