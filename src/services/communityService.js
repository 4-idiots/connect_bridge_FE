import customAxios from './customAxios';

export const postCommunityService = (title, contents, hashtag) => {
  return customAxios.post(`${process.env.REACT_APP_AWS}/api/write`, {
    title,
    contents,
    hashtag,
  });
};

export const getCommunityChange = communityID => {
  return customAxios.get(
    `${process.env.REACT_APP_AWS}/api/communitychange/${communityID}`,
  );
};

export const patchCommunityService = (postID, hashtag, title, content) => {
  return customAxios.patch(`${process.env.REACT_APP_AWS}/api/community/write`, {
    postID,
    hashtag,
    title,
    content,
  });
};

export const getSomeCommunity = communityID => {
  return customAxios.get(
    `${process.env.REACT_APP_AWS}/api/community/info/${communityID}`,
  );
};

export const deleteCommentService = (commentID, communityID) => {
  return customAxios.delete(
    `${process.env.REACT_APP_AWS}/api/community/comment/${commentID}/${communityID}`,
  );
};

export const changeCommentService = (id, comment) => {
  return customAxios.patch(
    `${process.env.REACT_APP_AWS}/api/community/comment`,
    {
      id,
      comment,
    },
  );
};

export const deleteCommunityService = communityID => {
  return customAxios.delete(
    `${process.env.REACT_APP_AWS}/api/community/${communityID}`,
  );
};

export const commmmunityLikeService = communityID => {
  return customAxios.get(
    `${process.env.REACT_APP_AWS}/api/community/like?toPostId=${communityID}`,
  );
};

export const postCommentService = (comment, postID) => {
  return customAxios.post(
    `${process.env.REACT_APP_AWS}/api/community/comment`,
    {
      comment,
      postID,
    },
  );
};

export const getSearchCommunity = query => {
  return customAxios.get(`${process.env.REACT_APP_AWS}/api/serach/${query}`);
};

export const getAllCommunity = () => {
  return customAxios.get(`${process.env.REACT_APP_AWS}/api/community`);
};

export const getPopularCommunity = () => {
  return customAxios.get(`${process.env.REACT_APP_AWS}/api/community/popular`);
};
