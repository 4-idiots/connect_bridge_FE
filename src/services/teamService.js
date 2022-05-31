import customAxios from './customAxios';

export const getSomeTeamService = teamID => {
  return customAxios.get(
    `${process.env.REACT_APP_MOON_URL}/api/team/info/${teamID}`,
  );
};

export const teamLikeService = teamID => {
  return customAxios.get(
    `${process.env.REACT_APP_MOON_URL}/api/follow?toUserId=${teamID}`,
  );
};

export const filterTeamService = (area, field) => {
  return customAxios.get(
    `${process.env.REACT_APP_MOON_URL}/api/team/${area}/${field}`,
  );
};

export const getAllTeamService = cursor => {
  return `${process.env.REACT_APP_MOON_URL}/api/team${cursor}`;
};
