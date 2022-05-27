import customAxios from './customAxios';

export const checkEmailCode = (code, userEmail) => {
  return customAxios.post(`${process.env.REACT_APP_MOON_URL}/api/verifycode`, {
    code,
    userEmail,
  });
};

export const issueEmailCode = userEmail => {
  return customAxios.post(
    `${process.env.REACT_APP_MOON_URL}/api/users/check/Email`,
    {
      userEmail,
    },
  );
};

export const checkSameEmail = userEmail => {
  return customAxios.get(
    `${process.env.REACT_APP_MOON_URL}/api/users/check/userEmail?userEmail=${userEmail}`,
  );
};

export const checkSameID = userID => {
  return customAxios.get(
    `${process.env.REACT_APP_MOON_URL}/api/users/check/userID?userID=${userID}`,
  );
};

export const checkSameNickname = userNickname => {
  return customAxios.get(
    `${process.env.REACT_APP_MOON_URL}/api/users/check/userNickname?userNickname=${userNickname}`,
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
  return customAxios.post(
    `${process.env.REACT_APP_MOON_URL}/api/users/register`,
    {
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
    },
  );
};
