import customAxios from './customAxios';

export const loginService = (userID, userPW) => {
  return customAxios.post(`/api/user/login`, {
    userID,
    userPW,
  });
};

export const setAuthorizationToken = token => {
  if (token) {
    customAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete customAxios.defaults.headers.common.Authorization;
  }
};

export const findPWServcie = (userID, userName, userEmail) => {
  return customAxios.post(`/api/user/findPW`, {
    userID,
    userName,
    userEmail,
  });
};

export const findIDService = (userName, userEmail) => {
  return customAxios.post(`/api/user/findID`, {
    userName,
    userEmail,
  });
};

export const validToken = () => {
  return `/api/valid`;
};
