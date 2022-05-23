import React, { useState, useEffect } from 'react';
import { Heading, Container } from 'react-bulma-components';
import { getMainService } from '../../services/mainService';
import { ProjectCard } from '../ProjectPage/mainComponent/projectCard';
import { StudyCard } from '../StudyPage/mainComponent/studyCard';
import * as S from './style';
import { SkelProject } from '../skeleton/skelRouter';
import { Mobile, Desktop, Tablet } from '../../mediaQuery';
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
        <Mobile>
          <Heading
            size={7}
            style={{ fontWeight: 'bold', fontSize: 26, marginLeft: 35 }}
          >
            새로운 프로젝트
          </Heading>
          <S.MainGridMobile style={{ marginLeft: 45 }}>
            {main.project &&
              main.project.map(item => (
                <ProjectCard item={item} key={item.projectID} />
              ))}
          </S.MainGridMobile>
          <Heading
            size={7}
            style={{ fontWeight: 'bold', fontSize: 26, marginLeft: 35 }}
          >
            새로운 스터디
          </Heading>
          <S.MainGridMobile style={{ marginLeft: 45 }}>
            {main.study &&
              main.study.map(item => (
                <StudyCard item={item} key={item.studyID} />
              ))}
          </S.MainGridMobile>
        </Mobile>
        <Tablet>
          <Heading
            size={7}
            style={{ fontWeight: 'bold', fontSize: 26, marginLeft: 45 }}
          >
            새로운 프로젝트
          </Heading>
          <S.MainGridTablet style={{ marginLeft: 60 }}>
            {main.project &&
              main.project.map(item => (
                <ProjectCard item={item} key={item.projectID} />
              ))}
          </S.MainGridTablet>
          <Heading
            size={7}
            style={{ fontWeight: 'bold', fontSize: 26, marginLeft: 45 }}
          >
            새로운 스터디
          </Heading>
          <S.MainGridTablet style={{ marginLeft: 60 }}>
            {main.study &&
              main.study.map(item => (
                <StudyCard item={item} key={item.studyID} />
              ))}
          </S.MainGridTablet>
        </Tablet>
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
