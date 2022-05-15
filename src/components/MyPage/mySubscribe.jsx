import React, { useEffect, useState } from 'react';
import { Heading } from 'react-bulma-components';
import { mySubscribeGetService } from '../../services/mypageService';
import * as S from './subscribe/style';
import { ProjectCard } from '../ProjectPage/mainComponent/projectCard';
import { TeamCard } from '../MainPage/mainCard/teamCard';
import { CommunityCard } from '../MainPage/mainCard/comCard';
import { OutdoorCardForm } from '../OutdoorPage/outdoorCardModule';
import { OutdoorModalForm } from '../OutdoorPage/outdoorModalModule';
import { SkelSubscribe } from '../skeleton/mypage/subscribe';
import { StudyCard } from '../StudyPage/mainComponent/studyCard';

export const MySubscribeForm = () => {
  const [loading, setLoading] = useState(false);
  const [subData, setSubData] = useState(null);
  const [poster, setPoster] = useState({});
  const changePoster = (otitle, oimage, olink, oview, olike, ooutID) => {
    setPoster({
      outID: ooutID,
      check: !poster.check,
      title: otitle,
      image: oimage,
      link: olink,
      view: oview,
      like: olike,
    });
  };

  const getAxios = async () => {
    setLoading(true);
    try {
      const result = await mySubscribeGetService();
      setSubData(result.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAxios();
  }, []);

  useEffect(() => {}, []);

  if (subData && !loading) {
    return (
      <>
        <Heading size={4}>구독한 프로젝트</Heading>
        {poster.check && (
          <OutdoorModalForm
            close={() => {
              changePoster('', '', '');
            }}
            item={poster}
          />
        )}
        <S.SubGrid>
          {subData && subData.project.length !== 0 ? (
            <>
              {subData.project.map(item => (
                <ProjectCard key={item.projectID} item={item} />
              ))}
            </>
          ) : (
            <S.PSBox>
              <S.PSNull>
                <S.PSText>구독한 프로젝트가 없습니다.</S.PSText>
              </S.PSNull>
            </S.PSBox>
          )}
        </S.SubGrid>
        <Heading size={4}>구독한 스터디</Heading>
        <S.SubGrid>
          {subData.study && subData.study.length !== 0 ? (
            <>
              {subData.study.map(item => (
                <StudyCard item={item} key={item.studyID} />
              ))}
            </>
          ) : (
            <S.PSBox>
              <S.PSNull>
                <S.PSText>구독한 스터디가 없습니다.</S.PSText>
              </S.PSNull>
            </S.PSBox>
          )}
        </S.SubGrid>
        <Heading size={4}>구독한 팀원</Heading>
        <S.SubGrid>
          {subData && subData.team.length !== 0 ? (
            <>
              {subData.team.map(item => (
                <TeamCard
                  key={item.myid}
                  item={item}
                  cnt={Math.floor(Math.random() * 4)}
                />
              ))}
            </>
          ) : (
            <S.PSBox>
              <S.PSNull>
                <S.PSText>구독한 팀원이 없습니다.</S.PSText>
              </S.PSNull>
            </S.PSBox>
          )}
        </S.SubGrid>
        <Heading size={4}>구독한 커뮤니티</Heading>
        <S.SubGrid>
          {subData && subData.team.length !== 0 ? (
            <>
              {subData.community.map(item => (
                <CommunityCard key={item.postID} item={item} />
              ))}
            </>
          ) : (
            <S.PSBox>
              <S.PSNull>
                <S.PSText>구독한 커뮤니티가 없습니다.</S.PSText>
              </S.PSNull>
            </S.PSBox>
          )}
        </S.SubGrid>
        <Heading size={4}>구독한 대외 활동</Heading>
        <S.SubGrid>
          {subData && subData.team.length !== 0 ? (
            <>
              {subData.outact.map(item => (
                <OutdoorCardForm
                  key={item.outActID}
                  item={item}
                  onActClick={() => {
                    changePoster(
                      item.outActName,
                      item.outActImg,
                      item.outActLink,
                      item.outActView,
                      item.outActLike,
                      item.outActID,
                    );
                  }}
                />
              ))}
            </>
          ) : (
            <S.PSBox>
              <S.PSNull>
                <S.PSText>구독한 대외활동이 없습니다.</S.PSText>
              </S.PSNull>
            </S.PSBox>
          )}
        </S.SubGrid>
      </>
    );
  }
  return <SkelSubscribe />;
};
