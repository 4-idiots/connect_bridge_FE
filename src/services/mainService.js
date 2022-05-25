import customAxios from './customAxios';

export const getMainService = () => {
  return customAxios.get('https://4idiot.ddns.net:8080/api/main');
};

export const teamLikeCheck = teamID => {
  return customAxios.get(
    `https://4idiot.ddns.net:8080/api/team/islike/${teamID}`,
  );
};

export const teamLike = teamID => {
  return customAxios.get(
    `https://4idiot.ddns.net:8080/api/follow?toUserId=${teamID}`,
  );
};

export const communityLikeCheck = communityID => {
  return customAxios.get(
    `https://4idiot.ddns.net:8080/api/community/islike/${communityID}`,
  );
};

export const communityLike = communityID => {
  return customAxios.get(
    `https://4idiot.ddns.net:8080/api/community/like?toPostId=${communityID}`,
  );
};
