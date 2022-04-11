import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Heading } from 'react-bulma-components';
import {
  DetailContent,
  DetailHeader,
  DetailRecurit,
  DetailPlatform,
  DetailSkill,
  DetailReference,
  DetailCommentInput,
  DetailCommentLog,
  DetailRightCard,
} from './detailComponent/detailRoutes';
import * as S from './detailComponent/style';
import { projectGetSomeService } from '../../service';

export const ProjectDetailForm = () => {
  const { projectID } = useParams();
  const [postData, setPostData] = useState({});

  useEffect(() => {
    const getAxios = async id => {
      try {
        const result = await projectGetSomeService(id);
        setPostData(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAxios(projectID);
  }, []);

  const {
    projectMotive,
    projectTotal,
    projectImg,
    projectOnOff,
    projectArea,
    projectName,
    projectField,
    projectSkill,
    projectReference,
    projectContent,
    projectStart,
    projectEnd,
    projectPlatform,
    projectStatus,
    projectType,
    projectLike,
    projectView,
    projectSub,
  } = postData;

  const [isInfo, setIsInfo] = useState(true);
  const [comment, setComment] = useState('');
  const [test, setTest] = useState({
    projectType: true,
    projectTitle: '웹소설 웹툰 IP 웹 3.0',
    leaderImg:
      'https://letspl.s3.ap-northeast-2.amazonaws.com/images/project_thumb_05.png',
    leaderName: '배고픈개발자',
    leaderInfo: '돈까스를 좋아하는 개발자 입니다.',
    projectStatus: true,
    projectPlatform: [
      '반응형 웹(PC/모바일)',
      '안드로이드 앱',
      'PC(윈도우/맥) 프로그램',
      'IOS 앱',
      '설치형/SASS 솔루션',
      '미정(논의 후 확정)',
    ],
    projectSkill: 'java, react, python, figma, test',
    projectReference: 'http://naver.com',
    projectContent: [
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
      { type: 'paragaph', children: [{ text: 'asdasd', color: '#a10000' }] },
      { type: 'blockquote', children: [{ text: 'asdas' }] },
      { type: 'paragaph', children: [{ text: 'das', underline: true }] },
      { type: 'paragaph', children: [{ text: 'dasd' }] },
      { type: 'paragaph', children: [{ text: 'asd' }] },
    ],
    projectLike: 64,
    projectView: 1124,
    projectSub: false,
    projectField: '이커머스',
    projectStart: '2022-05-03',
    projectEnd: '2022-09-09',
  });

  return (
    <Container>
      <DetailHeader
        projectStatus={projectStatus}
        projectTitle={projectName}
        projectType={projectMotive}
        leaderImg={test.leaderImg}
        leaderName={test.leaderName}
      />
      <S.PageWrap>
        <S.PageLeft>
          <S.LeftTab>
            <S.TalUl>
              <S.TabLi onClick={() => setIsInfo(true)}>정보</S.TabLi>
              <S.TabLi onClick={() => setIsInfo(false)}>질문</S.TabLi>
            </S.TalUl>
          </S.LeftTab>
          {isInfo && (
            <S.LeftDetail>
              <DetailRecurit /> {/* 여기는 석환이랑 db 협의가 끝나면 개발 */}
              <DetailPlatform projectPlatform={projectPlatform} />
              <DetailContent value={projectContent} />
              <DetailSkill projectSkill={projectSkill} />
              <DetailReference projectReference={projectReference} />
            </S.LeftDetail>
          )}
          {!isInfo && (
            <S.CommentWrap>
              <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
                👍 이 모임에 응원 * 질문을 올려주세요!
              </Heading>
              <DetailCommentInput comment={comment} setComment={setComment} />
              <DetailCommentLog /> {/* 여기는 석환이랑 db 협의가 끝나면 개발 */}
              <S.MediaBox />
            </S.CommentWrap>
          )}
        </S.PageLeft>

        <DetailRightCard
          leaderImg={test.leaderImg}
          leaderName={test.leaderName}
          leaderInfo={test.leaderInfo}
          projectField={projectField}
          projectLike={projectLike}
          projectView={projectView}
          projectStart={projectStart}
          projectEnd={projectEnd}
          projectSub={projectSub}
        />
      </S.PageWrap>
    </Container>
  );
};
