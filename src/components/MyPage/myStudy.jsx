import React, { useEffect, useState } from 'react';
import { Heading } from 'react-bulma-components';
import * as S from './projectStudy/style';
import { myStudyGetService } from '../../services/mypageService';
import { SkelSubscribe } from '../skeleton/mypage/subscribe';
import { StudyCard } from './projectStudy/studyCard';
import { getData } from '../../RefactorFunc/dataControl';

export const MyStudyForm = () => {
  const [loading, setLoading] = useState(false);
  const [study, setStudy] = useState(null);

  useEffect(() => {
    getData(setLoading, setStudy, myStudyGetService);
  }, []);

  if (study && !loading) {
    return (
      <div style={{ margin: '0 20px' }}>
        <S.PSBox>
          <Heading size={4}>지원 현황</Heading>
          <S.ProjectGrid>
            {study && study.submitStu.length !== 0 ? (
              <>
                {study.submitStu.map(item => (
                  <StudyCard item={item} key={item.studyID} recu />
                ))}
              </>
            ) : (
              <S.PSBox>
                <S.PSNull>
                  <S.PSText>신청한 스터디가 없습니다.</S.PSText>
                </S.PSNull>
              </S.PSBox>
            )}
          </S.ProjectGrid>
        </S.PSBox>
        <S.PSBox>
          <Heading size={4}>진행 현황</Heading>
          <S.ProjectGrid>
            {study && study.partInStu.length !== 0 ? (
              <>
                {study.partInStu.map(item => (
                  <StudyCard item={item} key={item.studyID} recu />
                ))}
              </>
            ) : (
              <S.PSBox>
                <S.PSNull>
                  <S.PSText>진행중인 스터디가 없습니다.</S.PSText>
                </S.PSNull>
              </S.PSBox>
            )}
          </S.ProjectGrid>
        </S.PSBox>
        <S.PSBox>
          <Heading size={4}>완료 현황</Heading>
          <S.ProjectGrid>
            {study && study.completeStu.length !== 0 ? (
              <>
                {study.completeStu.map(item => (
                  <StudyCard item={item} key={item.studyID} recu={false} />
                ))}
              </>
            ) : (
              <S.PSBox>
                <S.PSNull>
                  <S.PSText>완료한 스터디가 없습니다.</S.PSText>
                </S.PSNull>
              </S.PSBox>
            )}
          </S.ProjectGrid>
        </S.PSBox>
      </div>
    );
  }
  return <SkelSubscribe />;
};
