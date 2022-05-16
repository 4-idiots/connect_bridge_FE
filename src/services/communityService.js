import customAxios from './customAxios';

export const postCommunityService = (title, contents, hashtag) => {
  return customAxios.post(`/api/write`, { title, contents, hashtag });
};

export const getCommunityChange = communityID => {
  return customAxios.get(`/api/communitychange/${communityID}`);
};

export const patchCommunityService = (postID, hashtag, title, content) => {
  return customAxios.patch('/api/community/write', {
    postID,
    hashtag,
    title,
    content,
  });
};

export const getSomeCommunity = communityID => {
  return customAxios.get(`/api/community/info/${communityID}`);
};

export const deleteCommentService = (commentID, communityID) => {
  return customAxios.delete(
    `/api/community/comment/${commentID}/${communityID}`,
  );
};

export const changeCommentService = (id, comment) => {
  return customAxios.patch(`/api/community/comment`, {
    id,
    comment,
  });
};

export const deleteCommunityService = communityID => {
  return customAxios.delete(`/api/community/${communityID}`);
};

export const commmmunityLikeService = communityID => {
  return customAxios.get(`/api/community/like?toPostId=${communityID}`);
};

export const postCommentService = (comment, postID) => {
  return customAxios.post(`/api/community/comment`, {
    comment,
    postID,
  });
};
