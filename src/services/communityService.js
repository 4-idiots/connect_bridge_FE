import customAxios from './customAxios';

export const postCommunityService = (title, contents, hashtag) => {
  return customAxios.post(`https://4idiot.ddns.net:8080/api/write`, {
    title,
    contents,
    hashtag,
  });
};

export const getCommunityChange = communityID => {
  return customAxios.get(
    `https://4idiot.ddns.net:8080/api/communitychange/${communityID}`,
  );
};

export const patchCommunityService = (postID, hashtag, title, content) => {
  return customAxios.patch('https://4idiot.ddns.net:8080/api/community/write', {
    postID,
    hashtag,
    title,
    content,
  });
};

export const getSomeCommunity = communityID => {
  return customAxios.get(
    `https://4idiot.ddns.net:8080/api/community/info/${communityID}`,
  );
};

export const deleteCommentService = (commentID, communityID) => {
  return customAxios.delete(
    `https://4idiot.ddns.net:8080/api/community/comment/${commentID}/${communityID}`,
  );
};

export const changeCommentService = (id, comment) => {
  return customAxios.patch(
    `https://4idiot.ddns.net:8080/api/community/comment`,
    {
      id,
      comment,
    },
  );
};

export const deleteCommunityService = communityID => {
  return customAxios.delete(
    `https://4idiot.ddns.net:8080/api/community/${communityID}`,
  );
};

export const commmmunityLikeService = communityID => {
  return customAxios.get(
    `https://4idiot.ddns.net:8080/api/community/like?toPostId=${communityID}`,
  );
};

export const postCommentService = (comment, postID) => {
  return customAxios.post(
    `https://4idiot.ddns.net:8080/api/community/comment`,
    {
      comment,
      postID,
    },
  );
};

export const getSearchCommunity = query => {
  return customAxios.get(`https://4idiot.ddns.net:8080/api/serach/${query}`);
};

export const getAllCommunity = () => {
  return customAxios.get('https://4idiot.ddns.net:8080/api/community');
};

export const getPopularCommunity = () => {
  return customAxios.get('https://4idiot.ddns.net:8080/api/community/popular');
};
