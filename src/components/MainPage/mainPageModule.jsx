import React, { useState, useEffect } from 'react';
import { Heading, Container } from 'react-bulma-components';
import { getMainService } from '../../services/mainService';
import { ProjectCard } from '../Style/Card/Use/ProjectCard';
import { StudyCard } from '../Style/Card/Use/StudyCard';
import { TeamCard } from '../Style/Card/Use/TeamCard';
import * as S from './style';
import { SkelProject } from '../skeleton/skelRouter';
import { Mobile, Desktop, Tablet } from '../../mediaQuery';

export const MainPageForm = () => {
  const [main, setMain] = useState(null);
  const [loading, setLoading] = useState(false);

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
    getData(setLoading, setMain, getMainService);
    return () => {
      mounted = false;
    };
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
          <Heading
            size={7}
            style={{ fontWeight: 'bold', fontSize: 26, marginLeft: 35 }}
          >
            팀원들
          </Heading>
          <S.MainGridMobile style={{ marginLeft: 45 }}>
            {main.register &&
              main.register.map(item => (
                <TeamCard item={item} key={item.myid} />
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
          <Heading
            size={7}
            style={{ fontWeight: 'bold', fontSize: 26, marginLeft: 45 }}
          >
            팀원들
          </Heading>
          <S.MainGridTablet style={{ marginLeft: 60 }}>
            {main.register &&
              main.register.map(item => (
                <TeamCard item={item} key={item.myid} />
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
          <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
            팀원들
          </Heading>
          <S.MainGrid>
            {main.register &&
              main.register.map(item => (
                <TeamCard item={item} key={item.myid} />
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
