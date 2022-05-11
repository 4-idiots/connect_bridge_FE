import axios from 'axios';

// axios timeout 설정
// 통신 시 서버가 응담 결과를 너무 늦게 주는 경우가 있어서 최대 응답 소요 시간을 10초로 제한
// 10초를 넘어갈 경우 에러로 판별
export const customAxios = axios.create({ timeout: 10000 });

export const loginService = (userID, userPW) => {
  return customAxios.post(
    `/api/user/login`,
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

export const outdoorUploadService = formData => {
  return customAxios.post(`/api/outdoor/post`, formData, {
    headers: {
      'content-type': 'multipart/form-data',
    },
  });
};

export const outdoorUpdateService = formData => {
  return customAxios.patch(`/api/outdoor/post`, formData, {
    headers: { 'content-type': 'multipart/form-data' },
  });
};

export const outdoorGetAllService = cursor => {
  return `/api/outdoor/${cursor}`;
};

export const outdoorGetSomeService = outActID => {
  return customAxios.get(`/api/outdoor/post/${outActID}`);
};

export const outdoorDeleteService = outActID => {
  return customAxios.delete(`/api/outdoor/post/${outActID}`);
};

export const outdoorLikeService = outActID => {
  return customAxios.get(`/api/outdoor/like?outActID=${outActID}`);
};

export const outdoorLikeCheck = outActID => {
  return customAxios.get(`/api/outdoor/islike/${outActID}`);
};

export const validToken = () => {
  return `/api/valid`;
};

export const teamGetAllService = team => {
  return `/api/team${team}`;
};

export const projectUploadService = formData => {
  return customAxios.post(`/api/project`, formData, {
    headers: {
      'content-type': 'multipart/form-data',
    },
  });
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
  return customAxios.post(`/api/study`, {
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
  return `/api/study`;
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
  return customAxios.patch(`/api/study`, {
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
  return customAxios.get(`/api/study/islike/${studyID}`);
};

export const studyLikeService = studyID => {
  return customAxios.get(`/api/study/like?studyID=${studyID}`);
};

export const studyGetSomeService = studyID => {
  return customAxios.get(`/api/study/${studyID}`);
};

export const studyApplyService = (studyID, userID, field) => {
  return customAxios.post(`/api/study/apply`, {
    studyID,
    userID,
    field,
  });
};

export const studyDeleteService = studyID => {
  return customAxios.delete(`/api/study/${studyID}`);
};

export const projectGetNewService = () => {
  return customAxios.get('/api/project/page/new');
};

export const projectDeleteService = projectID => {
  return customAxios.delete(`/api/project/${projectID}`);
};

export const projectGetSomeService = projectID => {
  return customAxios.get(`/api/project/${projectID}`);
};

export const projectApplyService = (projectID, userID, field) => {
  return customAxios.patch(`/api/project/apply`, {
    projectID,
    userID,
    field,
  });
};

export const projectGetAllService = cursor => {
  return `/api/project/page/${cursor}`;
};

export const proejctUpdateService = formData => {
  return customAxios.patch(`/api/project`, formData, {
    headers: {
      'content-type': 'multipart/form-data',
    },
  });
};

export const projectLikeCheck = projectID => {
  return customAxios.get(`/api/project/islike/${projectID}`);
};

export const projectLikeService = projectID => {
  return customAxios.get(`/api/project/like?projectID=${projectID}`);
};

export const projectGetNoticeServie = projectID => {
  return customAxios.get(`/api/project/${projectID}/notice`);
};

export const projectNoticeUploadService = (projectID, content) => {
  return customAxios.post(`/api/project/notice`, { projectID, content });
};

export const projectGetAdminService = projectID => {
  return customAxios.get(`/api/project/${projectID}/manage`);
};

export const projectYesService = (projectID, submitID) => {
  return customAxios.get(`/api/project/${projectID}/apply/${submitID}`);
};

export const projectNoService = (projectID, submitID) => {
  return customAxios.get(`/api/project/${projectID}/reject/${submitID}`);
};

export const mypageGetUserService = userID => {
  return customAxios.get(`/api/my/info/${userID}`);
};

export const checkNicknameService = userNickname => {
  return customAxios.get(
    `/api/users/check/userNickname?userNickname=${userNickname}`,
  );
};

export const mypageUpdate = formData => {
  return customAxios.patch(`/api/my/info`, formData, {
    headers: {
      'content-type': 'multipart/form-data',
    },
  });
};

export const mypageUpdatePost = (
  id,
  userPW,
  userNickname,
  userIntroduce,
  userAbility,
  userArea,
  userTime,
  userInterestMain,
  userInterestSub,
  userPortfolio,
) => {
  return customAxios.post(`/api/my/info`, {
    id,
    userPW,
    userNickname,
    userIntroduce,
    userAbility,
    userArea,
    userTime,
    userInterestMain,
    userInterestSub,
    userPortfolio,
  });
};

export const myCommunityGetService = userID => {
  return customAxios.get(`/api/mycommunity/${userID}`);
};

export const communityDelete = communityID => {
  return customAxios.delete(`/api/community/${communityID}`);
};
