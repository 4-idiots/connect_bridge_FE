import customAxios from './customAxios';

export const getMainService = () => {
  return customAxios.get('/api/main');
};
