import customAxios from './customAxios';

export const getMainService = () => {
  return customAxios.get(`${process.env.REACT_APP_MOON_URL}/api/main`);
};

export const teamLikeCheck = teamID => {
  return customAxios.get(
    `${process.env.REACT_APP_MOON_URL}/api/team/islike/${teamID}`,
  );
};

export const teamLike = teamID => {
  return customAxios.get(
    `${process.env.REACT_APP_MOON_URL}/api/follow?toUserId=${teamID}`,
  );
};

export const communityLikeCheck = communityID => {
  return customAxios.get(
    `${process.env.REACT_APP_MOON_URL}/api/community/islike/${communityID}`,
  );
};

export const communityLike = communityID => {
  return customAxios.get(
    `${process.env.REACT_APP_MOON_URL}/api/community/like?toPostId=${communityID}`,
  );
};
