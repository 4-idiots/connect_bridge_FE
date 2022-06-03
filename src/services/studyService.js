import customAxios from './customAxios';

export const studyUploadService = (
  studyImg,
  studyName,
  studyKeyward,
  studyField,
  studyArea,
  studyMember,
  studyStart,
  studyEnd,
  content,
  studyOnline,
) => {
  return customAxios.post(`${process.env.REACT_APP_AWS}/api/study`, {
    studyImg,
    studyName,
    studyKeyward,
    studyField,
    studyArea,
    studyMember,
    studyStart,
    studyEnd,
    content,
    studyOnline,
  });
};

export const studyGetAllService = cursor => {
  return `${process.env.REACT_APP_AWS}/api/study/page/${cursor}`;
};

export const studyUpdateService = (
  studyID,
  studyImg,
  studyName,
  studyKeyward,
  studyField,
  studyArea,
  studyMember,
  studyEnd,
  studyStart,
  content,
  studyOnline,
) => {
  return customAxios.patch(`${process.env.REACT_APP_AWS}/api/study`, {
    studyImg,
    studyName,
    studyKeyward,
    studyField,
    studyArea,
    studyMember,
    studyStart,
    studyEnd,
    content,
    studyID,
    studyOnline,
  });
};

export const studyLikeCheck = studyID => {
  return customAxios.get(
    `${process.env.REACT_APP_AWS}/api/study/islike/${studyID}`,
  );
};

export const studyLikeService = studyID => {
  return customAxios.get(
    `${process.env.REACT_APP_AWS}/api/study/like?studyID=${studyID}`,
  );
};

export const studyGetSomeService = studyID => {
  return customAxios.get(`${process.env.REACT_APP_AWS}/api/study/${studyID}`);
};

export const studyApplyService = (studyID, field) => {
  return customAxios.patch(`${process.env.REACT_APP_AWS}/api/study/apply`, {
    studyID,
    field,
  });
};

export const studyDeleteService = studyID => {
  return customAxios.delete(
    `${process.env.REACT_APP_AWS}/api/study/${studyID}`,
  );
};

export const studyGetNewService = () => {
  return customAxios.get(`${process.env.REACT_APP_AWS}/api/study/page/new`);
};

export const studyStateService = studyID => {
  return customAxios.patch(
    `${process.env.REACT_APP_AWS}/api/${studyID}/manage/end`,
  );
};

export const studyOutService = (studyID, memberID) => {
  return customAxios.get(
    `${process.env.REACT_APP_AWS}/api/study/${studyID}/manage/fire/${memberID}`,
  );
};

export const studyGetAdminService = studyID => {
  return customAxios.get(
    `${process.env.REACT_APP_AWS}/api/study/${studyID}/manage`,
  );
};

export const studyYesService = (studyID, submitID) => {
  return customAxios.get(
    `${process.env.REACT_APP_AWS}/api/study/${studyID}/apply/${submitID}`,
  );
};

export const studyNoService = (studyID, submitID) => {
  return customAxios.get(
    `${process.env.REACT_APP_AWS}/api/study/${studyID}/reject/${submitID}`,
  );
};

export const studyGetNoticeServie = studyID => {
  return customAxios.get(
    `${process.env.REACT_APP_AWS}/api/study/${studyID}/notice`,
  );
};

export const studyNoticeUploadService = (studyID, content) => {
  return customAxios.post(`${process.env.REACT_APP_AWS}/api/study/notice`, {
    studyID,
    content,
  });
};

export const filterStudyService = (area, field) => {
  return customAxios.get(
    `${process.env.REACT_APP_AWS}/api/study/${area}/${field}`,
  );
};
