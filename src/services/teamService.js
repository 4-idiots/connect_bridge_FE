import customAxios from './customAxios';

export const getSomeTeamService = teamID => {
  return customAxios.get(
    `${process.env.REACT_APP_AWS}/api/team/info/${teamID}`,
  );
};

export const teamLikeService = teamID => {
  return customAxios.get(
    `${process.env.REACT_APP_AWS}/api/follow?toUserId=${teamID}`,
  );
};

export const filterTeamService = (area, field) => {
  return customAxios.get(
    `${process.env.REACT_APP_AWS}/api/team/${area}/${field}`,
  );
};

export const getAllTeamService = cursor => {
  return `${process.env.REACT_APP_AWS}/api/team${cursor}`;
};
