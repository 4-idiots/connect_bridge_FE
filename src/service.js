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

export const findIDService = (userName, userEmail) => {
  return customAxios.post(`${process.env.REACT_APP_MOON_URL}/user/findID`, {
    userName,
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
    formData,
    {
      headers: { 'content-type': 'multipart/form-data' },
    },
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

export const communityGetAllService = community => {
  return `http://4idiot.ddns.net:8080/community${community}`;
};

/* export const communityGetAllService = community => {
  return `http://localhost:4000/community${community}`;
}; */

export const projectUploadService = formData => {
  return customAxios.post(
    `${process.env.REACT_APP_MOON_URL}/project`,
    formData,
    {
      headers: {
        'content-type': 'multipart/form-data',
      },
    },
  );
};

export const studyUploadService = (
  studyName,
  studyKeyward,
  studyField,
  studyArea,
  studyOnOff,
  studyMember,
  studyStart,
  studyEnd,
  content,
) => {
  return customAxios.post(`${process.env.REACT_APP_MOON_URL}/study`, {
    studyName,
    studyKeyward,
    studyField,
    studyArea,
    studyOnOff,
    studyMember,
    studyStart,
    studyEnd,
    content,
  });
};

export const studyGetSomeService = studyID => {
  return customAxios.get(`${process.env.REACT_APP_MOON_URL}/study/${studyID}`);
};

export const studyApplyService = (studyID, userID, field) => {
  return customAxios.post(`${process.env.REACT_APP_MOON_URL}/study/apply`, {
    studyID,
    userID,
    field,
  });
};

export const studyDeleteService = studyID => {
  return customAxios.delete(
    `${process.env.REACT_APP_MOON_URL}/study/${studyID}`,
  );
};

export const projectDeleteService = projectID => {
  return customAxios.delete(
    `${process.env.REACT_APP_MOON_URL}/project/${projectID}`,
  );
};

export const projectGetSomeService = projectID => {
  return customAxios.get(
    `${process.env.REACT_APP_MOON_URL}/project/${projectID}`,
  );
};

export const projectApplyService = (projectID, userID, field) => {
  return customAxios.post(`${process.env.REACT_APP_MOON_URL}/project/apply`, {
    projectID,
    userID,
    field,
  });
};

export const projectGetAllService = () => {
  return customAxios.get(`${process.env.REACT_APP_MOON_URL}/project`);
};

export const proejctUpdateService = formData => {
  return customAxios.patch(
    `${process.env.REACT_APP_MOON_URL}/project`,
    formData,
    {
      headers: {
        'content-type': 'multipart/form-data',
      },
    },
  );
};
