import React, { useEffect, useState } from 'react';
import { Heading } from 'react-bulma-components';
import { mySubscribeGetService } from '../../services/mypageService';
import * as S from './subscribe/style';
import { ProjectCard } from '../Style/Card/Use/ProjectCard';
import { TeamCard } from '../Style/Card/Use/TeamCard';
import { MyCommunityCard } from '../Style/Card/Use/MyCommunityCard';
import { OutdoorCardForm } from '../OutdoorPage/outdoorCardModule';
import { OutdoorModalForm } from '../OutdoorPage/outdoorModalModule';
import { SkelSubscribe } from '../skeleton/mypage/subscribe';
import { StudyCard } from '../Style/Card/Use/StudyCard';
import { Mobile, Desktop, Tablet } from '../../mediaQuery';

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

  useEffect(() => {
    let mounted = true;
    const getData = async (setLoad, setData, getFunc) => {
      setLoad(true);
      try {
        const result = await getFunc();
        if (mounted) {
          setData(result.data);
          setLoad(false);
        }
      } catch (error) {
        setLoad(false);
      }
    };
    getData(setLoading, setSubData, mySubscribeGetService);
    return () => {
      mounted = false;
    };
  }, []);

  if (subData && !loading) {
    return (
      <div style={{ margin: '0 20px' }}>
        <Mobile>
          <Heading size={4}>구독한 프로젝트</Heading>
          {poster.check && (
            <OutdoorModalForm
              close={() => {
                changePoster('', '', '');
              }}
              item={poster}
            />
          )}
          <S.SubGridMobile>
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
          </S.SubGridMobile>
          <Heading size={4}>구독한 스터디</Heading>
          <S.SubGridMobile>
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
          </S.SubGridMobile>
          <Heading size={4}>구독한 팀원</Heading>
          <S.SubGridMobile>
            {subData && subData.team.length !== 0 ? (
              <>
                {subData.team.map(item => (
                  <TeamCard key={item.myid} item={item} />
                ))}
              </>
            ) : (
              <S.PSBox>
                <S.PSNull>
                  <S.PSText>구독한 팀원이 없습니다.</S.PSText>
                </S.PSNull>
              </S.PSBox>
            )}
          </S.SubGridMobile>
          <Heading size={4}>구독한 커뮤니티</Heading>
          <S.SubGridMobile>
            {subData && subData.community.length !== 0 ? (
              <>
                {subData.community.map(item => (
                  <MyCommunityCard key={item.postID} item={item} />
                ))}
              </>
            ) : (
              <S.PSBox>
                <S.PSNull>
                  <S.PSText>구독한 커뮤니티가 없습니다.</S.PSText>
                </S.PSNull>
              </S.PSBox>
            )}
          </S.SubGridMobile>
          <Heading size={4}>구독한 대외 활동</Heading>
          <S.SubGridMobile>
            {subData && subData.outact.length !== 0 ? (
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
          </S.SubGridMobile>
        </Mobile>
        <Tablet>
          <Heading size={4}>구독한 프로젝트</Heading>
          {poster.check && (
            <OutdoorModalForm
              close={() => {
                changePoster('', '', '');
              }}
              item={poster}
            />
          )}
          <S.SubGridTablet>
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
          </S.SubGridTablet>
          <Heading size={4}>구독한 스터디</Heading>
          <S.SubGridTablet>
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
          </S.SubGridTablet>
          <Heading size={4}>구독한 팀원</Heading>
          <S.SubGridTablet>
            {subData && subData.team.length !== 0 ? (
              <>
                {subData.team.map(item => (
                  <TeamCard key={item.myid} item={item} />
                ))}
              </>
            ) : (
              <S.PSBox>
                <S.PSNull>
                  <S.PSText>구독한 팀원이 없습니다.</S.PSText>
                </S.PSNull>
              </S.PSBox>
            )}
          </S.SubGridTablet>
          <Heading size={4}>구독한 커뮤니티</Heading>
          <S.SubGridTablet>
            {subData && subData.community.length !== 0 ? (
              <>
                {subData.community.map(item => (
                  <MyCommunityCard key={item.postID} item={item} />
                ))}
              </>
            ) : (
              <S.PSBox>
                <S.PSNull>
                  <S.PSText>구독한 커뮤니티가 없습니다.</S.PSText>
                </S.PSNull>
              </S.PSBox>
            )}
          </S.SubGridTablet>
          <Heading size={4}>구독한 대외 활동</Heading>
          <S.SubGridTablet>
            {subData && subData.outact.length !== 0 ? (
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
          </S.SubGridTablet>
        </Tablet>
        <Desktop>
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
                  <TeamCard key={item.myid} item={item} />
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
            {subData && subData.community.length !== 0 ? (
              <>
                {subData.community.map(item => (
                  <MyCommunityCard key={item.postID} item={item} />
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
            {subData && subData.outact.length !== 0 ? (
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
        </Desktop>
      </div>
    );
  }
  return <SkelSubscribe />;
};
