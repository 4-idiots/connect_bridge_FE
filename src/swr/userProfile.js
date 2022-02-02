import useSWR from 'swr';
import fetcher from './fetcher';

export const UserProfile = id => {
  const { data, error } = useSWR(`/api/${id}`, fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};
