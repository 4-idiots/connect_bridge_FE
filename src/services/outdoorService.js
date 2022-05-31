import customAxios from './customAxios';

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
