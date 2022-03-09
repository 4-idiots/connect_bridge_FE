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
  return axios.post(`${process.env.REACT_APP_SUK_URL}/outdoor/post`, {
    formData,
  });
};

export const oudoorUpdateService = formData => {
  return axios.update(
    `${process.env.REACT_APP_SUK_URL}/outdoor/post`,
    {
      formData,
    },
    { headers: { 'content-type': 'multipart/form-data' } },
  );
};

export const outdoorGetSomeService = outActID => {
  return axios.get(`${process.env.REACT_APP_SUK_URL}/outdoor/post/${outActID}`);
};

export const outdoorDeleteService = outActID => {
  return axios.delete(
    `${process.env.REACT_APP_SUK_URL}/outdoor/post/${outActID}`,
  );
};

export const outdoorGetAllService = () => {
  return axios.get(`${process.env.REACT_APP_SUK_URL}/outdoor`);
};

export const outdoorLikeService = (outActID, userID) => {
  return axios.get(
    `${process.env.REACT_APP_SUK_URL}/outdoor/like?post=${outActID}&userID=${userID}`,
  );
};
