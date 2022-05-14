import React, { useState, useEffect } from 'react';
import { Heading, Container } from 'react-bulma-components';
import { getMainService } from '../../services/mainService';
import { ProjectCard } from '../ProjectPage/mainComponent/projectCard';
import { CommunityCard } from './mainCard/comCard';
import { TeamCard } from './mainCard/teamCard';
import { StudyCard } from '../StudyPage/mainComponent/studyCard';
import * as S from './style';
import { SkelProject, SkelCommunity, SkelTeam } from '../skeleton/skelRouter';

export const MainPageForm = () => {
  const [main, setMain] = useState(null);
  const [loading, setLoading] = useState(false);

  const getAxios = async () => {
    setLoading(true);
    try {
      const result = await getMainService();
      setMain(result.data);
      console.log(result.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAxios();
  }, []);

  if (main && !loading) {
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
        <S.MainGrid>
          {main.study &&
            main.study.map(item => (
              <StudyCard item={item} key={item.studyID} />
            ))}
        </S.MainGrid>
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
        <S.MainGrid>
          <TeamCard item={main.register[0]} cnt={0} />
          <TeamCard item={main.register[1]} cnt={1} />
          <TeamCard item={main.register[2]} cnt={2} />
          <TeamCard item={main.register[3]} cnt={3} />
        </S.MainGrid>
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
      <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
        커뮤니티
      </Heading>
      <S.MainGrid>
        {[0, 1, 2, 3].map(item => (
          <SkelCommunity key={item} />
        ))}
      </S.MainGrid>
      <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
        팀원들
      </Heading>
      <S.MainGrid>
        {[0, 1, 2, 3].map(item => (
          <SkelTeam key={item} />
        ))}
      </S.MainGrid>
    </Container>
  );
};
