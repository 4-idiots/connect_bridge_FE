import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Heading } from 'react-bulma-components';
import { useJwt } from 'react-jwt';
import {
  DetailRecruit,
  DetailHeader,
  DetailContent,
  DetailKeyward,
  DetailRightCard,
  DetailCommentLog,
  DetailCommentInput,
} from './sDetailComponent/sDetailRoute';
import * as S from './detailComponent/style';
import {
  studyGetSomeService,
  studyApplyService,
  studyDeleteService,
} from '../../service';
import { useAuth } from '../../contexts/hooks/useAuth';

export const StudyDetailForm = () => {
  const auth = useAuth();
  const { decodedToken, isExpired } = useJwt(auth.token);
  const navigate = useNavigate();

  const { studyID } = useParams();
  const [study, setStudy] = useState({});
  const [isInfo, setIsInfo] = useState(true);
  const [comment, setComment] = useState('');

  const {
    studyName,
    studyOnOff,
    userID,
    content,
    studyKeyward,
    studyMember,
    studyMemberNow,
    studyField,
    studyLike,
    studyView,
    studyStart,
    studyEnd,
  } = study;

  const getAxios = async id => {
    try {
      const result = await studyGetSomeService(id);
      console.log(result.data);
      setStudy(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const applyService = async (stid, uid, field) => {
    try {
      const result = await studyApplyService(stid, uid, field);
      alert('정상적으로 신청이 되었습니다.');
    } catch (error) {
      alert('이미 신청하셨습니다.');
    }
  };

  const deleteAxios = async id => {
    try {
      const result = await studyDeleteService(id);
      alert('삭제되었습니다.');
      navigate('/study');
    } catch (error) {
      alert('다시 시도해주세요');
    }
  };

  useEffect(() => {
    getAxios(studyID);
  }, []);

  return (
    <Container style={{ marginTop: 80 }}>
      {studyName && (
        <DetailHeader
          studyOnOff={studyOnOff}
          studyName={studyName}
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
            {decodedToken && userID === decodedToken.id ? (
              <S.TalUl>
                <S.TabUpdate
                  onClick={() => navigate(`/study/update/${studyID}`)}
                >
                  수정
                </S.TabUpdate>
                <S.TabUpdate
                  onClick={() => {
                    deleteAxios(studyID);
                  }}
                >
                  삭제
                </S.TabUpdate>
              </S.TalUl>
            ) : (
              ''
            )}
          </S.LeftTab>
          {isInfo && content && studyKeyward && (
            <S.LeftDetail>
              <DetailKeyward studyKeyward={studyKeyward} />
              <DetailRecruit
                studyMember={studyMember}
                studyMemberNow={studyMemberNow}
                apply={applyService}
                userID={userID}
                studyID={Number(studyID)}
              />
              <DetailContent value={content} />
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
        {studyField &&
          typeof studyLike === typeof studyView &&
          studyStart &&
          studyEnd && (
            <DetailRightCard
              leaderImg="https://letspl.s3.ap-northeast-2.amazonaws.com/images/project_thumb_05.png"
              leaderName="name"
              leaderInfo="asdasdsa"
              projectField={studyField}
              projectLike={studyLike}
              projectView={studyView}
              projectStart={studyStart}
              projectEnd={studyEnd}
              projectSub={false}
            />
          )}
      </S.PageWrap>
    </Container>
  );
};
