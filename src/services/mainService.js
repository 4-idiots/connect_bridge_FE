import customAxios from './customAxios';

export const getMainService = () => {
  return customAxios.get('/api/main');
};

export const teamLikeCheck = teamID => {
  return customAxios.get(`/api/team/islike/${teamID}`);
};

export const teamLike = teamID => {
  return customAxios.get(`/api/follow?toUserId=${teamID}`);
};

export const communityLikeCheck = communityID => {
  return customAxios.get(`/api/community/islike/${communityID}`);
};

export const communityLike = communityID => {
  return customAxios.get(`/api/community/like?toPostId=${communityID}`);
};
