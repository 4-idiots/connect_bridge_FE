import customAxios from './customAxios';

export const myGetUser = () => {
  return customAxios.get(`${process.env.REACT_APP_AWS}/api/my/info`);
};

export const myCheckNickname = userNickname => {
  return customAxios.get(
    `${process.env.REACT_APP_AWS}/api/users/check/userNickname?userNickname=${userNickname}`,
  );
};

export const mypageUpdate = formData => {
  return customAxios.patch(
    `${process.env.REACT_APP_AWS}/api/my/info`,
    formData,
    {
      headers: {
        'content-type': 'multipart/form-data',
      },
    },
  );
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
  return customAxios.post(`${process.env.REACT_APP_AWS}/api/my/info`, {
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

export const myCommunityGetService = () => {
  return customAxios.get(`${process.env.REACT_APP_AWS}/api/mycommunity`);
};

export const myCommunityDelete = communityID => {
  return customAxios.delete(
    `${process.env.REACT_APP_AWS}/api/community/${communityID}`,
  );
};

export const mySubscribeGetService = () => {
  return customAxios.get(`${process.env.REACT_APP_AWS}/api/myfollow`);
};

export const myProjectGetService = () => {
  return customAxios.get(`${process.env.REACT_APP_AWS}/api/myproject`);
};

export const myStudyGetService = () => {
  return customAxios.get(`${process.env.REACT_APP_AWS}/api/mystudy`);
};
