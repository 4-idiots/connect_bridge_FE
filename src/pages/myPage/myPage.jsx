import React, { useState } from 'react';
import { Container, Tabs } from 'react-bulma-components';
import {
  NavbarForm,
  FooterForm,
  MyPageForm,
  MyProjectStudyForm,
} from '../../components/cRoutes';

export const MyPage = () => {
  const [where, setWhere] = useState('my');

  return (
    <>
      <NavbarForm />
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
            프로젝트/스터디
          </Tabs.Tab>
          <Tabs.Tab>커뮤니티</Tabs.Tab>
          <Tabs.Tab>구독</Tabs.Tab>
          <Tabs.Tab>알림</Tabs.Tab>
        </Tabs>
        {where === 'my' && <MyPageForm />}
        {where === 'project' && <MyProjectStudyForm />}
      </Container>
      <FooterForm />
    </>
  );
};
