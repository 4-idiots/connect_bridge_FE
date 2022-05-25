import customAxios from './customAxios';

export const checkEmailCode = (code, userEmail) => {
  return customAxios.post('https://4idiot.ddns.net:8080/api/verifycode', {
    code,
    userEmail,
  });
};

export const issueEmailCode = userEmail => {
  return customAxios.post(
    'https://4idiot.ddns.net:8080/api/users/check/Email',
    {
      userEmail,
    },
  );
};

export const checkSameEmail = userEmail => {
  return customAxios.get(
    `https://4idiot.ddns.net:8080/api/users/check/userEmail?userEmail=${userEmail}`,
  );
};

export const checkSameID = userID => {
  return customAxios.get(
    `https://4idiot.ddns.net:8080/api/users/check/userID?userID=${userID}`,
  );
};

export const checkSameNickname = userNickname => {
  return customAxios.get(
    `https://4idiot.ddns.net:8080/api/users/check/userNickname?userNickname=${userNickname}`,
  );
};

export const register = (
  userID,
  userPW,
  userNickname,
  userName,
  userEmail,
  userIntroduce,
  userAbility,
  userArea,
  userTime,
  userInterestMain,
  userInterestSub,
  userPortfolio,
) => {
  return customAxios.post('https://4idiot.ddns.net:8080/api/users/register', {
    userID,
    userPW,
    userNickname,
    userName,
    userEmail,
    userIntroduce,
    userAbility,
    userArea,
    userTime,
    userInterestMain,
    userInterestSub,
    userPortfolio,
  });
};
