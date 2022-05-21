/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import { Heading } from 'react-bulma-components';
import * as Send from '../../services/mypageService';
import { MyCmCard } from './community/myCmCard';
import { SkelCommunity } from '../skeleton/mypage/mypageRouter';
import * as S from '../ProjectPage/detailTab/style';
import { getData } from '../../RefactorFunc/dataControl';

export const MyCommunityForm = () => {
  const [loading, setLoading] = useState(false);
  const [community, setCommunity] = useState(null);

  useEffect(() => {
    getData(setLoading, setCommunity, Send.myCommunityGetService);
  }, []);

  if (community && !loading) {
    return (
      <div style={{ margin: '0 20px' }}>
        <Heading size={4}>작성한 글</Heading>
        {community.length !== 0 ? (
          <>
            {community &&
              community.map(item => <MyCmCard item={item} key={item.postID} />)}
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
