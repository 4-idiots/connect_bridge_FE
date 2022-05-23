import React, { useState, useEffect } from 'react';
import { Heading, Container } from 'react-bulma-components';
import { getMainService } from '../../services/mainService';
import { ProjectCard } from '../Style/Card/Use/ProjectCard';
import { StudyCard } from '../Style/Card/Use/StudyCard';
import * as S from './style';
import { SkelProject } from '../skeleton/skelRouter';
import { Mobile, Desktop } from '../../mediaQuery';
import { getData } from '../../RefactorFunc/dataControl';

export const MainPageForm = () => {
  const [main, setMain] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData(setLoading, setMain, getMainService);
  }, []);

  if (main && !loading) {
    return (
      <Container style={{ marginTop: 80 }}>
        <Mobile>난 폰이야</Mobile>
        <Desktop>
          <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
            새로운 프로젝트
          </Heading>
          <S.MainGrid>
            {main.project &&
              main.project.map(item => (
                <ProjectCard item={item} key={item.projectID} />
              ))}
          </S.MainGrid>
          <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
            새로운 스터디
          </Heading>
          <S.MainGrid>
            {main.study &&
              main.study.map(item => (
                <StudyCard item={item} key={item.studyID} />
              ))}
          </S.MainGrid>
        </Desktop>
      </Container>
    );
  }

  return (
    <Container style={{ marginTop: 80 }}>
      <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
        프로젝트
      </Heading>
      <S.MainGrid>
        {[0, 1, 2, 3].map(item => (
          <SkelProject key={item} />
        ))}
      </S.MainGrid>
      <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
        스터디
      </Heading>
      <S.MainGrid>
        {[0, 1, 2, 3].map(item => (
          <SkelProject key={item} />
        ))}
      </S.MainGrid>
    </Container>
  );
};
