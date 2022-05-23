import customAxios from './customAxios';

export const getSomeTeamService = teamID => {
  return customAxios.get(`/api/team/info/${teamID}`);
};

export const teamLikeService = teamID => {
  return customAxios.get(`/api/follow?toUserId=${teamID}`);
};

export const filterTeamService = (area, field) => {
  return customAxios.get(`/api/team/${area}/${field}`);
};
