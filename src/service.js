import axios from 'axios';

// axios timeout 설정
// 통신 시 서버가 응담 결과를 너무 늦게 주는 경우가 있어서 최대 응답 소요 시간을 10초로 제한
// 10초를 넘어갈 경우 에러로 판별
export const customAxios = axios.create({ timeout: 10000 });

export const loginService = (userID, userPW) => {
  return customAxios.post(
    `${process.env.REACT_APP_MOON_URL}/api/user/login`,
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
  return customAxios.post(`${process.env.REACT_APP_MOON_URL}/api/user/findPW`, {
    userID,
    userName,
    userEmail,
  });
};

export const findIDService = (userName, userEmail) => {
  return customAxios.post(`${process.env.REACT_APP_MOON_URL}/api/user/findID`, {
    userName,
    userEmail,
  });
};

export const outdoorUploadService = formData => {
  return customAxios.post(
    `${process.env.REACT_APP_MOON_URL}/api/outdoor/post`,
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
    `${process.env.REACT_APP_MOON_URL}/api/outdoor/post`,
    formData,
    {
      headers: { 'content-type': 'multipart/form-data' },
    },
  );
};

export const outdoorGetAllService = cursor => {
  return `${process.env.REACT_APP_MOON_URL}/api/outdoor/${cursor}`;
};

export const outdoorGetSomeService = outActID => {
  return customAxios.get(
    `${process.env.REACT_APP_MOON_URL}/api/outdoor/post/${outActID}`,
  );
};

export const outdoorDeleteService = outActID => {
  return customAxios.delete(
    `${process.env.REACT_APP_MOON_URL}/api/outdoor/post/${outActID}`,
  );
};

export const outdoorLikeService = outActID => {
  return customAxios.get(
    `${process.env.REACT_APP_MOON_URL}/api/outdoor/like?outActID=${outActID}`,
  );
};

export const outdoorLikeCheck = outActID => {
  return customAxios.get(
    `${process.env.REACT_APP_MOON_URL}/api/outdoor/islike/${outActID}`,
  );
};

export const validToken = () => {
  return `${process.env.REACT_APP_MOON_URL}/api/valid`;
};

export const teamGetAllService = team => {
  return `${process.env.REACT_APP_MOON_URL}/api/team${team}`;
};

export const communityGetAllService = community => {
  return `${process.env.REACT_APP_MOON_URL}/api/community${community}`;
};

export const projectUploadService = formData => {
  return customAxios.post(
    `${process.env.REACT_APP_MOON_URL}/api/project`,
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
  return customAxios.post(`${process.env.REACT_APP_MOON_URL}/api/study`, {
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

export const studyGetAllService = () => {
  return `${process.env.REACT_APP_MOON_URL}/api/study`;
};

export const studyUpdateService = ({
  studyName,
  studyKeyward,
  studyField,
  studyArea,
  studyOnOff,
  studyMember,
  studyStart,
  studyEnd,
  content,
  studyID,
}) => {
  return customAxios.patch(`${process.env.REACT_APP_MOON_URL}/api/study`, {
    studyName,
    studyKeyward,
    studyField,
    studyArea,
    studyOnOff,
    studyMember,
    studyStart,
    studyEnd,
    content,
    studyID,
  });
};

export const studyLikeCheck = studyID => {
  return customAxios.get(
    `${process.env.REACT_APP_MOON_URL}/api/study/islike/${studyID}`,
  );
};

export const studyLikeService = studyID => {
  return customAxios.get(
    `${process.env.REACT_APP_MOON_URL}/api/study/like?studyID=${studyID}`,
  );
};

export const studyGetSomeService = studyID => {
  return customAxios.get(
    `${process.env.REACT_APP_MOON_URL}/api/study/${studyID}`,
  );
};

export const studyApplyService = (studyID, userID, field) => {
  return customAxios.post(`${process.env.REACT_APP_MOON_URL}/api/study/apply`, {
    studyID,
    userID,
    field,
  });
};

export const studyDeleteService = studyID => {
  return customAxios.delete(
    `${process.env.REACT_APP_MOON_URL}/api/study/${studyID}`,
  );
};

export const projectDeleteService = projectID => {
  return customAxios.delete(
    `${process.env.REACT_APP_MOON_URL}/api/project/${projectID}`,
  );
};

export const projectGetSomeService = projectID => {
  return customAxios.get(
    `${process.env.REACT_APP_MOON_URL}/api/project/${projectID}`,
  );
};

export const projectApplyService = (projectID, userID, field) => {
  return customAxios.post(
    `${process.env.REACT_APP_MOON_URL}/api/project/apply`,
    {
      projectID,
      userID,
      field,
    },
  );
};

export const projectGetAllService = cursor => {
  return `${process.env.REACT_APP_MOON_URL}/api/project/page/${cursor}`;
};

export const proejctUpdateService = formData => {
  return customAxios.patch(
    `${process.env.REACT_APP_MOON_URL}/api/project`,
    formData,
    {
      headers: {
        'content-type': 'multipart/form-data',
      },
    },
  );
};

export const projectLikeCheck = projectID => {
  return customAxios.get(
    `${process.env.REACT_APP_MOON_URL}/api/project/islike/${projectID}`,
  );
};

export const projectLikeService = projectID => {
  return customAxios.get(
    `${process.env.REACT_APP_MOON_URL}/api/project/like?projectID=${projectID}`,
  );
};
