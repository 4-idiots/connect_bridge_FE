import customAxios from './customAxios';

export const projectUploadService = formData => {
  return customAxios.post(
    `https://4idiot.ddns.net:8080/api/project`,
    formData,
    {
      headers: {
        'content-type': 'multipart/form-data',
      },
    },
  );
};

export const projectGetNewService = () => {
  return customAxios.get('https://4idiot.ddns.net:8080/api/project/page/new');
};

export const projectDeleteService = projectID => {
  return customAxios.delete(
    `https://4idiot.ddns.net:8080/api/project/${projectID}`,
  );
};

export const projectGetSomeService = projectID => {
  return customAxios.get(
    `https://4idiot.ddns.net:8080/api/project/${projectID}`,
  );
};

export const projectApplyService = (projectID, userID, field) => {
  return customAxios.patch(`https://4idiot.ddns.net:8080/api/project/apply`, {
    projectID,
    userID,
    field,
  });
};

export const projectGetAllService = cursor => {
  return `https://4idiot.ddns.net:8080/api/project/page/${cursor}`;
};

export const proejctUpdateService = formData => {
  return customAxios.patch(
    `https://4idiot.ddns.net:8080/api/project`,
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
    `https://4idiot.ddns.net:8080/api/project/islike/${projectID}`,
  );
};

export const projectLikeService = projectID => {
  return customAxios.get(
    `https://4idiot.ddns.net:8080/api/project/like?projectID=${projectID}`,
  );
};

export const projectGetNoticeServie = projectID => {
  return customAxios.get(
    `https://4idiot.ddns.net:8080/api/project/${projectID}/notice`,
  );
};

export const projectNoticeUploadService = (projectID, content) => {
  return customAxios.post(`https://4idiot.ddns.net:8080/api/project/notice`, {
    projectID,
    content,
  });
};

export const projectGetAdminService = projectID => {
  return customAxios.get(
    `https://4idiot.ddns.net:8080/api/project/${projectID}/manage`,
  );
};

export const projectYesService = (projectID, submitID) => {
  return customAxios.get(
    `https://4idiot.ddns.net:8080/api/project/${projectID}/apply/${submitID}`,
  );
};

export const projectNoService = (projectID, submitID) => {
  return customAxios.get(
    `https://4idiot.ddns.net:8080/api/project/${projectID}/reject/${submitID}`,
  );
};

export const projectStateService = projectID => {
  return customAxios.patch(
    `https://4idiot.ddns.net:8080/api/${projectID}/manage/end`,
  );
};

export const projectOutService = (projectID, memberID) => {
  return customAxios.get(
    `https://4idiot.ddns.net:8080/api/project/${projectID}/manage/fire/${memberID}`,
  );
};

export const filterProjectService = (area, field) => {
  return customAxios.get(
    `https://4idiot.ddns.net:8080/api/project/?projectField=${field}&projectArea=${area}`,
  );
};
