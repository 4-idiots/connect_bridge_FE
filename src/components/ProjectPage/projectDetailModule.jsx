import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Heading, Block } from 'react-bulma-components';
import * as S from './detailComponent/style';

export const ProjectDetailForm = () => {
  const { projectID } = useParams();

  return (
    <Container>
      <S.HeaderWrap>
        <S.PurposeWrap>
          <S.ProjectContent>사이드프로젝트</S.ProjectContent>
        </S.PurposeWrap>
        <S.HeaderContent>
          <Heading size={4} style={{ fontWeight: 'bold', fontSize: 34 }}>
            웹소설 웹툰 IP 웹 3.0
          </Heading>
          <S.LeaderWrap>
            <S.LeaderImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyGnV38qI3kabyXoa6e9eOn9960Lcnzj3jGA&usqp=CAU" />
            <S.LeaderName>test</S.LeaderName>
          </S.LeaderWrap>
        </S.HeaderContent>
      </S.HeaderWrap>
    </Container>
  );
};
