import customAxios from './customAxios';

export const myGetUser = () => {
  return customAxios.get(`http://4idiot.ddns.net:8080/api/my/info`);
};

export const myCheckNickname = userNickname => {
  return customAxios.get(
    `http://4idiot.ddns.net:8080/api/users/check/userNickname?userNickname=${userNickname}`,
  );
};

export const mypageUpdate = formData => {
  return customAxios.patch(
    `http://4idiot.ddns.net:8080/api/my/info`,
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
  return customAxios.post(`http://4idiot.ddns.net:8080/api/my/info`, {
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
  return customAxios.get(`http://4idiot.ddns.net:8080/api/mycommunity`);
};

export const myCommunityDelete = communityID => {
  return customAxios.delete(
    `http://4idiot.ddns.net:8080/api/community/${communityID}`,
  );
};

export const mySubscribeGetService = () => {
  return customAxios.get(`http://4idiot.ddns.net:8080/api/myfollow`);
};

export const myProjectGetService = () => {
  return customAxios.get(`http://4idiot.ddns.net:8080/api/myproject`);
};

export const myStudyGetService = () => {
  return customAxios.get(`http://4idiot.ddns.net:8080/api/mystudy`);
};
