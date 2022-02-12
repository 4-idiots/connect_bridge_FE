import axios from 'axios';

export const loginService = (userID, userPW) => {
  return axios.post(`${process.env.REACT_APP_SUK_URL}/user/login`, {
    userID,
    userPW,
  });
};

export const findPWServcie = (userID, userName, userEmail) => {
  return axios.post(`${process.env.REACT_APP_SUK_URL}/user/findPW`, {
    userID,
    userName,
    userEmail,
  });
};

export const findIDService = (userName, userPhone, userEmail) => {
  return axios.post(`${process.env.REACT_APP_SUK_URL}/user/findID`, {
    userName,
    userPhone,
    userEmail,
  });
};
