import customAxios from './customAxios';

export const myGetUser = userID => {
  return customAxios.get(`/api/my/info/${userID}`);
};

export const myCheckNickname = userNickname => {
  return customAxios.get(
    `/api/users/check/userNickname?userNickname=${userNickname}`,
  );
};

export const mypageUpdate = formData => {
  return customAxios.patch(`/api/my/info`, formData, {
    headers: {
      'content-type': 'multipart/form-data',
    },
  });
};

export const mypageUpdatePost = (
  id,
  userPW,
  userNickname,
  userIntroduce,
  userAbility,
  userArea,
  userTime,
  userInterestMain,
  userInterestSub,
  userPortfolio,
) => {
  return customAxios.post(`/api/my/info`, {
    id,
    userPW,
    userNickname,
    userIntroduce,
    userAbility,
    userArea,
    userTime,
    userInterestMain,
    userInterestSub,
    userPortfolio,
  });
};

export const myCommunityGetService = userID => {
  return customAxios.get(`/api/mycommunity/${userID}`);
};

export const myCommunityDelete = communityID => {
  return customAxios.delete(`/api/community/${communityID}`);
};
