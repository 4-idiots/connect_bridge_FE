import React, { useState, useEffect } from 'react';
import { Container, Heading, Block } from 'react-bulma-components';
import { ProjectCard } from './mainComponent/projectCard';
import { NewCard } from './mainComponent/newCard';
import { SuggestCard } from './mainComponent/suggestCard';
import * as S from './mainComponent/style';
import { projectGetAllService } from '../../service';

export const ProjectMainForm = () => {
  const [a, setA] = useState([
    {
      type: 'paragaph',
      children: [
        { text: '프로젝트를 소' },
        { text: '개 하자면....asdasd', bold: true },
      ],
    },
    {
      type: 'paragaph',
      children: [
        { text: 'a', color: '#a10000', bold: true },
        { color: '#a10000', text: 'sdasd' },
      ],
    },
  ]);

  const [project, setProject] = useState();

  const getAxios = async () => {
    try {
      const result = await projectGetAllService();
      setProject(result.data);
    } catch (error) {
      console.log(error);
      alert('다시 시도해주세요');
    }
  };

  useEffect(() => {
    getAxios();
  }, []);

  return (
    <Container style={{ marginTop: 80 }}>
      <Heading>프로젝트 or 스터디</Heading>
      <Block
        style={{
          backgroundColor: '#fbfbfb',
          display: 'flex',
          paddingBottom: '30px',
        }}
      >
        <S.newWrap>
          <S.textWrap>
            <Heading size={4} style={{ fontWeight: 'bold' }}>
              신규 프로젝트
            </Heading>
          </S.textWrap>
          <NewCard
            prType
            isLike
            thumbnail="https://letspl.s3.ap-northeast-2.amazonaws.com/images/project_thumb_05.png"
            prField="이커머스"
            prTitle="웹소설 웹툰 IP 웹 3.0"
            prLike={24}
            prView={65}
            prTotal={[{ test: 3 }]}
            prUserID={1}
            prID={20}
            prContent={a}
          />
        </S.newWrap>
        <S.suggestWrap>
          <S.textWrap>
            <Heading size={4} style={{ fontWeight: 'bold' }}>
              추천 프로젝트/스터디
            </Heading>
          </S.textWrap>
          <SuggestCard />
          <SuggestCard />
          <SuggestCard />
        </S.suggestWrap>
      </Block>
      <Block>
        <Heading size={4}>전체 프로젝트/스터디</Heading>
        <S.gridBox>
          {project &&
            project.map(item => (
              <ProjectCard
                key={item.id}
                uiuxPlan={item.uiuxPlan}
                gamePlan={item.gamePlan}
                managerPlan={item.managerPlan}
                hwPlan={item.hwPlan}
                iosFr={item.iosFr}
                androidFr={item.androidFr}
                webFrontFr={item.webFrontFr}
                webPublicFr={item.webPublicFr}
                crossFr={item.crossFr}
                uiuxDe={item.uiuxDe}
                graphicDe={item.graphicDe}
                thrdDe={item.thrdDe}
                hwDe={item.hwDe}
                etcDe={item.etcDe}
                webBk={item.webBk}
                blchBk={item.blchBk}
                aiBk={item.aiBk}
                dsBk={item.dsBk}
                gameBk={item.gameBk}
                planBu={item.planBu}
                marketingBu={item.marketingBu}
                financeBu={item.financeBu}
                salesBu={item.salesBu}
                consultBu={item.consultBu}
                investBu={item.investBu}
                etcBu={item.etcBu}
                blogEtc={item.blogEtc}
                influEtc={item.influEtc}
                compEtc={item.compEtc}
                uiuxPlanNow={item.uiuxPlanNow}
                gamePlanNow={item.gamePlanNow}
                managerPlanNow={item.managerPlanNow}
                hwPlanNow={item.hwPlanNow}
                iosFrNow={item.iosFrNow}
                androidFrNow={item.androidFrNow}
                webFrontFrNow={item.webFrontFrNow}
                webPublicFrNow={item.webPublicFrNow}
                crossFrNow={item.crossFrNow}
                uiuxDeNow={item.uiuxDeNow}
                graphicDeNow={item.graphicDeNow}
                thrdDeNow={item.thrdDeNow}
                hwDeNow={item.hwDeNow}
                etcDeNow={item.etcDeNow}
                webBkNow={item.webBkNow}
                blchBkNow={item.blchBkNow}
                aiBkNow={item.aiBkNow}
                dsBkNow={item.dsBkNow}
                gameBkNow={item.gameBkNow}
                planBuNow={item.planBuNow}
                marketingBuNow={item.marketingBuNow}
                financeBuNow={item.financeBuNow}
                salesBuNow={item.salesBuNow}
                consultBuNow={item.consultBuNow}
                investBuNow={item.investBuNow}
                etcBuNow={item.etcBuNow}
                blogEtcNow={item.blogEtcNow}
                influEtcNow={item.influEtcNow}
                compEtcNow={item.compEtcNow}
                projectMotive={item.projectMotive}
                isLike
                projectImg={item.projectImg}
                projectField={item.projectField}
                projectName={item.projectName}
                projectLike={item.projectLike}
                projectView={item.projectView}
                prUserID={1}
                projectID={item.id}
              />
            ))}
        </S.gridBox>
      </Block>
      <Block>
        <Heading size={4}>여기에서 만들었어요</Heading>
      </Block>
    </Container>
  );
};
