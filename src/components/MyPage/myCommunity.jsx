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

  useEffect(() => {
    let mounted = true;
    const getData = async (setLoad, setData, getFunc) => {
      setLoad(true);
      try {
        const result = await getFunc();
        if (mounted) {
          setData(result.data);
          setLoad(false);
        }
      } catch (error) {
        setLoad(false);
      }
    };
    getData(setLoading, setCommunity, Send.myCommunityGetService);
    return () => {
      mounted = false;
    };
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
