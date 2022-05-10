import React, { useEffect, useState } from 'react';
import { Heading } from 'react-bulma-components';
import { useJwt } from 'react-jwt';
import { myCommunityGetService, communityDelete } from '../../service';
import { MyCmCard } from './community/myCmCard';
import { useAuth } from '../../contexts/hooks/useAuth';

export const MyCommunityForm = () => {
  const auth = useAuth();
  const { decodedToken } = useJwt(auth.token);

  const [community, setCommunity] = useState(null);

  const getAxios = async uid => {
    try {
      const result = await myCommunityGetService(uid);
      console.log(result.data);
      setCommunity(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAxios = async cid => {
    try {
      const result = await communityDelete(cid);
      alert('삭제 되었습니다.');
      window.location.replace('/my/info');
    } catch (error) {
      alert('다시 시도해주세요.');
    }
  };

  useEffect(() => {
    if (decodedToken) {
      getAxios(decodedToken.id);
    }
  }, [decodedToken]);

  if (community) {
    return (
      <>
        <Heading size={4}>작성한 글</Heading>
        {community.map(item => (
          <MyCmCard item={item} deleteAxios={deleteAxios} key={item.postID} />
        ))}
      </>
    );
  }
  return null;
};
