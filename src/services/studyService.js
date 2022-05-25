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
  return customAxios.post(`http://4idiot.ddns.net:8080/api/study`, {
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
  return `http://4idiot.ddns.net:8080/api/study/page/${cursor}`;
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
  return customAxios.patch(`http://4idiot.ddns.net:8080/api/study`, {
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
    `http://4idiot.ddns.net:8080/api/study/islike/${studyID}`,
  );
};

export const studyLikeService = studyID => {
  return customAxios.get(
    `http://4idiot.ddns.net:8080/api/study/like?studyID=${studyID}`,
  );
};

export const studyGetSomeService = studyID => {
  return customAxios.get(`http://4idiot.ddns.net:8080/api/study/${studyID}`);
};

export const studyApplyService = (studyID, field) => {
  return customAxios.patch(`http://4idiot.ddns.net:8080/api/study/apply`, {
    studyID,
    field,
  });
};

export const studyDeleteService = studyID => {
  return customAxios.delete(`http://4idiot.ddns.net:8080/api/study/${studyID}`);
};

export const studyGetNewService = () => {
  return customAxios.get(`http://4idiot.ddns.net:8080/api/study/page/new`);
};

export const studyStateService = studyID => {
  return customAxios.patch(
    `http://4idiot.ddns.net:8080/api/${studyID}/manage/end`,
  );
};

export const studyOutService = (studyID, memberID) => {
  return customAxios.get(
    `http://4idiot.ddns.net:8080/api/study/${studyID}/manage/fire/${memberID}`,
  );
};

export const studyGetAdminService = studyID => {
  return customAxios.get(
    `http://4idiot.ddns.net:8080/api/study/${studyID}/manage`,
  );
};

export const studyYesService = (studyID, submitID) => {
  return customAxios.get(
    `http://4idiot.ddns.net:8080/api/study/${studyID}/apply/${submitID}`,
  );
};

export const studyNoService = (studyID, submitID) => {
  return customAxios.get(
    `http://4idiot.ddns.net:8080/api/study/${studyID}/reject/${submitID}`,
  );
};

export const studyGetNoticeServie = studyID => {
  return customAxios.get(
    `http://4idiot.ddns.net:8080/api/study/${studyID}/notice`,
  );
};

export const studyNoticeUploadService = (studyID, content) => {
  return customAxios.post(`http://4idiot.ddns.net:8080/api/study/notice`, {
    studyID,
    content,
  });
};

export const filterStudyService = (area, field) => {
  return customAxios.get(
    `http://4idiot.ddns.net:8080/api/study/${area}/${field}`,
  );
};
