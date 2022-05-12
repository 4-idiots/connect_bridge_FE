import React, { useEffect, useState } from 'react';
import { Heading } from 'react-bulma-components';
import * as Send from '../../services/mypageService';
import { MyCmCard } from './community/myCmCard';

export const MyCommunityForm = () => {
  const [community, setCommunity] = useState(null);

  const getAxios = async () => {
    try {
      const result = await Send.myCommunityGetService();
      setCommunity(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAxios = async cid => {
    try {
      const result = await Send.myCommunityDelete(cid);
      alert('삭제 되었습니다.');
      window.location.replace('/my/info');
    } catch (error) {
      alert('다시 시도해주세요.');
    }
  };

  useEffect(() => {
    getAxios();
  }, []);

  if (community) {
    return (
      <>
        <Heading size={4}>작성한 글</Heading>
        {community &&
          community.map(item => (
            <MyCmCard item={item} deleteAxios={deleteAxios} key={item.postID} />
          ))}
      </>
    );
  }
  return null;
};
