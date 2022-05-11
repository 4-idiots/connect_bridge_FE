import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Heading, Tabs, Button } from 'react-bulma-components';
import { useJwt } from 'react-jwt';
import * as DR from './detailComponent/detailRoutes';
import * as S from './detailComponent/style';
import * as Send from '../../services/projectService';
import { useAuth } from '../../contexts/hooks/useAuth';
import { NoticeTab, ApplyTab } from './detailTab/tabRoutes';

export const ProjectDetailForm = () => {
  const auth = useAuth();
  const { decodedToken } = useJwt(auth.token);
  const navigate = useNavigate();

  const { projectID } = useParams();
  const [postData, setPostData] = useState(null);

  const getAxios = async id => {
    try {
      const result = await Send.projectGetSomeService(id);
      setPostData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAxios = async id => {
    try {
      const result = await Send.projectDeleteService(id);
      alert('삭제되었습니다.');
      navigate('/project');
    } catch (error) {
      alert('다시 시도해주세요');
    }
  };

  useEffect(() => {
    getAxios(projectID);
  }, []);

  const [comment, setComment] = useState('');
  const [where, setWhere] = useState('info');

  const applyService = async (prid, uid, field) => {
    try {
      const result = await Send.projectApplyService(prid, uid, field);
      alert('정상적으로 신청이 되었습니다.');
    } catch (error) {
      alert('이미 신청하셨습니다.');
    }
  };

  if (postData) {
    return (
      <Container style={{ marginTop: 80 }}>
        {postData.projectName && <DR.DetailHeader item={postData} />}
        <S.PageWrap>
          <S.PageLeft>
            <Tabs size="medium" type="boxed" style={{ marginBottom: 60 }}>
              <Tabs.Tab
                active={where === 'info'}
                onClick={() => setWhere('info')}
              >
                정보
              </Tabs.Tab>
              <Tabs.Tab
                active={where === 'qna'}
                onClick={() => setWhere('qna')}
              >
                질문
              </Tabs.Tab>
              {(postData.memberList &&
                decodedToken &&
                postData.memberList.includes(decodedToken.id)) ||
              (decodedToken && postData.userID === decodedToken.id) ? (
                <Tabs.Tab
                  active={where === 'notice'}
                  onClick={() => setWhere('notice')}
                >
                  공지
                </Tabs.Tab>
              ) : (
                <Tabs.Tab>공지 🔒</Tabs.Tab>
              )}
              {decodedToken && postData.userID === decodedToken.id ? (
                <Tabs.Tab
                  active={where === 'apply'}
                  onClick={() => setWhere('apply')}
                >
                  관리
                </Tabs.Tab>
              ) : (
                <Tabs.Tab>관리 🔒</Tabs.Tab>
              )}
            </Tabs>
            {where === 'info' && (
              <S.LeftDetail>
                <DR.DetailRecurit
                  item={postData}
                  apply={applyService}
                  projectID={Number(projectID)}
                />
                <DR.DetailPlatform projectPlatform={postData.projectPlatform} />
                <DR.DetailContent value={postData.content} />
                <DR.DetailSkill projectSkill={postData.projectSkill} />
                <DR.DetailReference
                  projectReference={postData.projectReference}
                />
                <DR.DetailMember item={postData.memberID} />
              </S.LeftDetail>
            )}
            {where === 'qna' ? (
              <S.CommentWrap>
                <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
                  👍 이 모임에 응원 * 질문을 올려주세요!
                </Heading>
                <DR.DetailCommentInput
                  comment={comment}
                  setComment={setComment}
                />
                <DR.DetailCommentLog />
                <S.MediaBox />
              </S.CommentWrap>
            ) : (
              ''
            )}
            {where === 'apply' && (
              <>
                <Button.Group align="center">
                  <Button
                    style={{ marginRight: 100 }}
                    color="warning"
                    onClick={() => navigate(`/project/update/${projectID}`)}
                  >
                    프로젝트 수정
                  </Button>
                  <Button
                    color="danger"
                    onClick={() => {
                      deleteAxios(projectID);
                    }}
                  >
                    프로젝트 삭제
                  </Button>
                </Button.Group>
                <ApplyTab projectID={projectID} />
              </>
            )}
            {where === 'notice' && decodedToken && (
              <NoticeTab
                projectID={projectID}
                isMaster={postData.userID === decodedToken.id}
              />
            )}
          </S.PageLeft>
          <DR.DetailRightCard item={postData} projectID={projectID} />
        </S.PageWrap>
      </Container>
    );
  }
  return null;
};
