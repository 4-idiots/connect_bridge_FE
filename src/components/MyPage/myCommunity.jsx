/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import { Heading } from 'react-bulma-components';
import * as Send from '../../services/mypageService';
import { MyCmCard } from './community/myCmCard';
import { SkelCommunity } from '../skeleton/mypage/mypageRouter';
import * as S from '../ProjectPage/detailTab/style';

export const MyCommunityForm = () => {
  const [loading, setLoading] = useState(false);
  const [community, setCommunity] = useState(null);

  const getAxios = async () => {
    setLoading(true);
    try {
      const result = await Send.myCommunityGetService();
      setCommunity(result.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const deleteAxios = async cid => {
    try {
      await Send.myCommunityDelete(cid);
      alert('삭제 되었습니다.');
      window.location.replace('/my/info');
    } catch (error) {
      alert('다시 시도해주세요.');
    }
  };

  useEffect(() => {
    getAxios();
  }, []);

  if (community && !loading) {
    return (
      <div style={{ margin: '0 20px' }}>
        <Heading size={4}>작성한 글</Heading>
        {community.length !== 0 ? (
          <>
            {community &&
              community.map(item => (
                <MyCmCard
                  item={item}
                  deleteAxios={deleteAxios}
                  key={item.postID}
                />
              ))}
          </>
        ) : (
          <S.PSBox>
            <S.PSNull>
              <S.PSText>아직 작성된 글이 없습니다.</S.PSText>
            </S.PSNull>
          </S.PSBox>
        )}
      </div>
    );
  }
  return (
    <>
      <Heading size={4}>작성한 글</Heading>
      <SkelCommunity />
      <SkelCommunity />
      <SkelCommunity />
    </>
  );
};
