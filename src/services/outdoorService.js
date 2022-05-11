import customAxios from './customAxios';

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
