import React, { useState } from 'react';
import { Container, Tabs, Heading } from 'react-bulma-components';
import { useJwt } from 'react-jwt';
import * as C from '../../components/cRoutes';
import { useAuth } from '../../contexts/hooks/useAuth';

export const MyPage = () => {
  const auth = useAuth();
  const { decodedToken } = useJwt(auth.token);
  const [where, setWhere] = useState('my');

  return (
    <>
      <C.NavbarForm />
      {decodedToken ? (
        <Container style={{ marginTop: 80 }}>
          <Tabs
            align="center"
            size="medium"
            type="boxed"
            style={{ marginBottom: 60 }}
          >
            <Tabs.Tab active={where === 'my'} onClick={() => setWhere('my')}>
              내 정보
            </Tabs.Tab>
            <Tabs.Tab
              active={where === 'project'}
              onClick={() => setWhere('project')}
            >
              프로젝트
            </Tabs.Tab>
            <Tabs.Tab
              active={where === 'study'}
              onClick={() => setWhere('study')}
            >
              스터디
            </Tabs.Tab>
            <Tabs.Tab
              active={where === 'community'}
              onClick={() => setWhere('community')}
            >
              커뮤니티
            </Tabs.Tab>
            <Tabs.Tab
              active={where === 'subscribe'}
              onClick={() => setWhere('subscribe')}
            >
              구독
            </Tabs.Tab>
            {/* <Tabs.Tab>알림</Tabs.Tab> */}
          </Tabs>
          {where === 'my' && <C.MyPageForm />}
          {where === 'project' && <C.MyProjectForm />}
          {where === 'study' && <C.MyStudyForm />}
          {where === 'community' && <C.MyCommunityForm />}
          {where === 'subscribe' && <C.MySubscribeForm />}
        </Container>
      ) : (
        <Heading style={{ textAlign: 'center', marginTop: 80 }}>
          권한이 없습니다.
        </Heading>
      )}
      <C.FooterForm />
    </>
  );
};
