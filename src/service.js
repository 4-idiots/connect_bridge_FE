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

export const outdoorUploadService = formData => {
  return axios.post(`${process.env.REACT_APP_SUK_URL}/outdoor/post`, formData, {
    headers: {
      'content-type': 'multipart/form-data',
    },
  });
};

export const outdoorUpdateService = formData => {
  return axios.patch(
    `${process.env.REACT_APP_SUK_URL}/outdoor/post`,
    {
      formData,
    },
    { headers: { 'content-type': 'multipart/form-data' } },
  );
};

export const outdoorGetSomeService = outActID => {
  // return axios.get(`${process.env.REACT_APP_SUK_URL}/outdoor/post/${outActID}`);
  return axios.get('http://localhost:4000/getSomeOutdoor');
};

export const outdoorDeleteService = outActID => {
  // 테스트용
  // return axios.delete(
  //   `${process.env.REACT_APP_SUK_URL}/outdoor/post/${outActID}`,
  // );
  return axios.get('http://localhost:4000/deleteOutdoor');
};

export const outdoorLikeService = (outActID, userID) => {
  return axios.get(
    `${process.env.REACT_APP_SUK_URL}/outdoor/like?post=${outActID}&userID=${userID}`,
  );
};
