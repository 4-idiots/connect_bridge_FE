import React, { useState, useEffect } from 'react';
import { Heading, Container } from 'react-bulma-components';
import { getMainService } from '../../services/mainService';
import { ProjectCard } from '../ProjectPage/mainComponent/projectCard';
import { CommunityCard } from './mainCard/comCard';
import * as S from './style';

export const MainPageForm = () => {
  const [main, setMain] = useState(null);

  const getAxios = async () => {
    try {
      const result = await getMainService();
      setMain(result.data);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAxios();
  }, []);

  if (main) {
    return (
      <Container style={{ marginTop: 80 }}>
        <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
          프로젝트
        </Heading>
        <S.MainGrid>
          {main.project &&
            main.project.map(item => (
              <ProjectCard item={item} key={item.projectID} />
            ))}
        </S.MainGrid>
        <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
          스터디
        </Heading>
        <S.MainGrid>a</S.MainGrid>
        <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
          커뮤니티
        </Heading>
        <S.MainGrid>
          {main.community &&
            main.community.map(item => (
              <CommunityCard item={item} key={item.postID} />
            ))}
        </S.MainGrid>
        <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
          팀원들
        </Heading>
        <S.MainGrid>a</S.MainGrid>
      </Container>
    );
  }
  return null;
};
