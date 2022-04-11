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
    projectLike,
    projectView,
    projectSub,
  } = postData;

  const [isInfo, setIsInfo] = useState(true);
  const [comment, setComment] = useState('');

  return (
    <Container>
      {projectStatus && projectName && projectMotive && (
        <DetailHeader
          projectStatus={projectStatus}
          projectName={projectName}
          projectMotive={projectMotive}
          leaderImg="https://letspl.s3.ap-northeast-2.amazonaws.com/images/project_thumb_05.png"
          leaderName="name"
        />
      )}
      <S.PageWrap>
        <S.PageLeft>
          <S.LeftTab>
            <S.TalUl>
              <S.TabLi onClick={() => setIsInfo(true)}>정보</S.TabLi>
              <S.TabLi onClick={() => setIsInfo(false)}>질문</S.TabLi>
            </S.TalUl>
          </S.LeftTab>
          {isInfo &&
            projectPlatform &&
            projectContent &&
            projectSkill &&
            projectReference && (
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
              <DetailCommentLog />
              {/* 여기는 석환이랑 db 협의가 끝나면 개발 */}
              <S.MediaBox />
            </S.CommentWrap>
          )}
        </S.PageLeft>
        {projectField &&
          projectLike &&
          projectView &&
          projectStart &&
          projectEnd &&
          (projectSub === true || projectSub === false) && (
            <DetailRightCard
              leaderImg="https://letspl.s3.ap-northeast-2.amazonaws.com/images/project_thumb_05.png"
              leaderName="name"
              leaderInfo="asdasdsa"
              projectField={projectField}
              projectLike={projectLike}
              projectView={projectView}
              projectStart={projectStart}
              projectEnd={projectEnd}
              projectSub={projectSub}
            />
          )}
      </S.PageWrap>
    </Container>
  );
};
