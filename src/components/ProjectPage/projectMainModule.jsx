import React from 'react';
import {
  Container,
  Heading,
  Block,
  Button,
  Box,
  Form,
  Card,
} from 'react-bulma-components';
import { ProjectCard } from './dev/projectCard';

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
        <ProjectCard />
      </Block>
      <Block>
        <Heading size={4}>여기에서 만들었어요</Heading>
      </Block>
    </Container>
  );
};
