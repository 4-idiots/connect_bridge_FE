import useSWR from 'swr';
import fetcher from './fetcher';

const UserProfile = id => {
  const { data, error } = useSWR(`/api/${id}`, fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};
