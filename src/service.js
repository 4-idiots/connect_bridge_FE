import axios from 'axios';

// axios timeout 설정
// 통신 시 서버가 응담 결과를 너무 늦게 주는 경우가 있어서 최대 응답 소요 시간을 10초로 제한
// 10초를 넘어갈 경우 에러로 판별
const customAxios = axios.create({ timeout: 10000 });

export const loginService = (userID, userPW) => {
  return customAxios.post(
    `${process.env.REACT_APP_MOON_URL}/user/login`,
    {
      userID,
      userPW,
    },
    { withCredentials: true },
  );
};

export const setAuthorizationToken = token => {
  if (token) {
    customAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete customAxios.defaults.headers.common.Authorization;
  }
};

export const findPWServcie = (userID, userName, userEmail) => {
  return customAxios.post(`${process.env.REACT_APP_MOON_URL}/user/findPW`, {
    userID,
    userName,
    userEmail,
  });
};

export const findIDService = (userName, userPhone, userEmail) => {
  return customAxios.post(`${process.env.REACT_APP_MOON_URL}/user/findID`, {
    userName,
    userPhone,
    userEmail,
  });
};

export const outdoorUploadService = formData => {
  return customAxios.post(
    `${process.env.REACT_APP_MOON_URL}/outdoor/post`,
    formData,
    {
      headers: {
        'content-type': 'multipart/form-data',
      },
    },
  );
};

export const outdoorUpdateService = formData => {
  return customAxios.patch(
    `${process.env.REACT_APP_MOON_URL}/outdoor/post`,
    {
      formData,
    },
    { headers: { 'content-type': 'multipart/form-data' } },
  );
};

export const outdoorGetAllService = cursor => {
  return `${process.env.REACT_APP_MOON_URL}/outdoor/${cursor}`;
};

export const outdoorGetSomeService = outActID => {
  return customAxios.get(
    `${process.env.REACT_APP_MOON_URL}/outdoor/post/${outActID}`,
  );
};

export const outdoorDeleteService = outActID => {
  return customAxios.delete(
    `${process.env.REACT_APP_MOON_URL}/outdoor/post/${outActID}`,
  );
};

export const outdoorLikeService = (outActID, userID) => {
  return customAxios.get(
    `${process.env.REACT_APP_MOON_URL}/outdoor/like?post=${outActID}&userID=${userID}`,
  );
};

export const validToken = () => {
  return `${process.env.REACT_APP_MOON_URL}/valid`;
};

export const teamGetAllService = team => {
  return `http://4idiot.ddns.net:8080/team${team}`;
};

/* export const teamGetAllService = team => {
  return `http://localhost:4000/team${team}`;
};
 */
