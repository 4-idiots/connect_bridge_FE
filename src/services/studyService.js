import customAxios from './customAxios';

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
