import customAxios from './customAxios';

export const projectUploadService = formData => {
  return customAxios.post(
    `${process.env.REACT_APP_AWS}/api/project`,
    formData,
    {
      headers: {
        'content-type': 'multipart/form-data',
      },
    },
  );
};

export const projectGetNewService = () => {
  return customAxios.get(`${process.env.REACT_APP_AWS}/api/project/page/new`);
};

export const projectDeleteService = projectID => {
  return customAxios.delete(
    `${process.env.REACT_APP_AWS}/api/project/${projectID}`,
  );
};

export const projectGetSomeService = projectID => {
  return customAxios.get(
    `${process.env.REACT_APP_AWS}/api/project/${projectID}`,
  );
};

export const projectApplyService = (projectID, userID, field) => {
  return customAxios.patch(`${process.env.REACT_APP_AWS}/api/project/apply`, {
    projectID,
    userID,
    field,
  });
};

export const projectGetAllService = cursor => {
  return `${process.env.REACT_APP_AWS}/api/project/page/${cursor}`;
};

export const proejctUpdateService = formData => {
  return customAxios.patch(
    `${process.env.REACT_APP_AWS}/api/project`,
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
    `${process.env.REACT_APP_AWS}/api/project/islike/${projectID}`,
  );
};

export const projectLikeService = projectID => {
  return customAxios.get(
    `${process.env.REACT_APP_AWS}/api/project/like?projectID=${projectID}`,
  );
};

export const projectGetNoticeServie = projectID => {
  return customAxios.get(
    `${process.env.REACT_APP_AWS}/api/project/${projectID}/notice`,
  );
};

export const projectNoticeUploadService = (projectID, content) => {
  return customAxios.post(`${process.env.REACT_APP_AWS}/api/project/notice`, {
    projectID,
    content,
  });
};

export const projectGetAdminService = projectID => {
  return customAxios.get(
    `${process.env.REACT_APP_AWS}/api/project/${projectID}/manage`,
  );
};

export const projectYesService = (projectID, submitID) => {
  return customAxios.get(
    `${process.env.REACT_APP_AWS}/api/project/${projectID}/apply/${submitID}`,
  );
};

export const projectNoService = (projectID, submitID) => {
  return customAxios.get(
    `${process.env.REACT_APP_AWS}/api/project/${projectID}/reject/${submitID}`,
  );
};

export const projectStateService = projectID => {
  return customAxios.patch(
    `${process.env.REACT_APP_AWS}/api/project/${projectID}/manage/end`,
  );
};

export const projectOutService = (projectID, memberID) => {
  return customAxios.get(
    `${process.env.REACT_APP_AWS}/api/project/${projectID}/manage/fire/${memberID}`,
  );
};

export const filterProjectService = (area, field) => {
  return customAxios.get(
    `${process.env.REACT_APP_AWS}/api/project/?projectField=${field}&projectArea=${area}`,
  );
};
