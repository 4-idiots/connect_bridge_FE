import customAxios from './customAxios';

export const getSomeTeamService = teamID => {
  return customAxios.get(
    `https://4idiot.ddns.net:8080/api/team/info/${teamID}`,
  );
};

export const teamLikeService = teamID => {
  return customAxios.get(
    `https://4idiot.ddns.net:8080/api/follow?toUserId=${teamID}`,
  );
};

export const filterTeamService = (area, field) => {
  return customAxios.get(
    `https://4idiot.ddns.net:8080/api/team/${area}/${field}`,
  );
};
