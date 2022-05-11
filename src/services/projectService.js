import customAxios from './customAxios';

export const projectUploadService = formData => {
  return customAxios.post(`/api/project`, formData, {
    headers: {
      'content-type': 'multipart/form-data',
    },
  });
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
