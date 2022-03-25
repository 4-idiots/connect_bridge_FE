import React from 'react';
import { Container, Heading, Block } from 'react-bulma-components';
import { ProjectCard } from './mainComponent/projectCard';

export const ProjectMainForm = () => {
  return (
    <Container>
      <Heading>프로젝트 or 스터디</Heading>
      <Block>
        <Heading size={4}>신규 프로젝트</Heading>
        <Heading size={4}>신규 스터디</Heading>
      </Block>
      <Block>
        <Heading size={4}>전체 프로젝트/스터디</Heading>
        <ProjectCard
          prType
          isLike
          thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyGnV38qI3kabyXoa6e9eOn9960Lcnzj3jGA&usqp=CAU"
          prField="이커머스"
          prTitle="웹소설 웹툰 IP 웹 3.0"
          prLike={24}
          prView={65}
          prTotal={[{ test: 3 }]}
          prUserID={1}
          prID={20}
        />
      </Block>
      <Block>
        <Heading size={4}>여기에서 만들었어요</Heading>
      </Block>
    </Container>
  );
};
