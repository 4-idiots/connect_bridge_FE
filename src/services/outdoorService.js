import customAxios from './customAxios';

export const outdoorUploadService = formData => {
  return customAxios.post(
    `https://4idiot.ddns.net:8080/api/outdoor/post`,
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
    `https://4idiot.ddns.net:8080/api/outdoor/post`,
    formData,
    {
      headers: { 'content-type': 'multipart/form-data' },
    },
  );
};

export const outdoorGetAllService = cursor => {
  return `https://4idiot.ddns.net:8080/api/outdoor/${cursor}`;
};

export const outdoorGetSomeService = outActID => {
  return customAxios.get(
    `https://4idiot.ddns.net:8080/api/outdoor/post/${outActID}`,
  );
};

export const outdoorDeleteService = outActID => {
  return customAxios.delete(
    `https://4idiot.ddns.net:8080/api/outdoor/post/${outActID}`,
  );
};

export const outdoorLikeService = outActID => {
  return customAxios.get(
    `https://4idiot.ddns.net:8080/api/outdoor/like?outActID=${outActID}`,
  );
};

export const outdoorLikeCheck = outActID => {
  return customAxios.get(
    `https://4idiot.ddns.net:8080/api/outdoor/islike/${outActID}`,
  );
};
