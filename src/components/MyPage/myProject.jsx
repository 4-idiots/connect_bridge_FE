import React, { useEffect, useState } from 'react';
import { Heading } from 'react-bulma-components';
import * as S from './projectStudy/style';
import { myProjectGetService } from '../../services/mypageService';
import { ProjectCard } from './projectStudy/projectCard';
import { SkelSubscribe } from '../skeleton/mypage/subscribe';
import { Mobile, Desktop, Tablet } from '../../mediaQuery';

export const MyProjectForm = () => {
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState(null);

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
    getData(setLoading, setProject, myProjectGetService);
    return () => {
      mounted = false;
    };
  }, []);

  if (project && !loading) {
    return (
      <div style={{ margin: '0 20px' }}>
        <Mobile>
          <S.PSBox>
            <Heading size={4}>지원 현황</Heading>
            <S.ProjectGridMobile>
              {project && project.submitPro.length !== 0 ? (
                <>
                  {project.submitPro.map(item => (
                    <ProjectCard item={item} key={item.projectID} recu />
                  ))}
                </>
              ) : (
                <S.PSBox>
                  <S.PSNull>
                    <S.PSText>지원한 프로젝트가 없습니다.</S.PSText>
                  </S.PSNull>
                </S.PSBox>
              )}
            </S.ProjectGridMobile>
          </S.PSBox>
          <S.PSBox>
            <Heading size={4}>진행 현황</Heading>
            <S.ProjectGridMobile>
              {project && project.partInPro.length !== 0 ? (
                <>
                  {project.partInPro.map(item => (
                    <ProjectCard item={item} key={item.projectID} recu />
                  ))}
                </>
              ) : (
                <S.PSBox>
                  <S.PSNull>
                    <S.PSText>진행중인 프로젝트가 없습니다.</S.PSText>
                  </S.PSNull>
                </S.PSBox>
              )}
            </S.ProjectGridMobile>
          </S.PSBox>
          <S.PSBox>
            <Heading size={4}>완료 현황</Heading>
            <S.ProjectGridMobile>
              {project && project.completePro.length !== 0 ? (
                <>
                  {project.completePro.map(item => (
                    <ProjectCard
                      item={item}
                      key={item.projectID}
                      recu={false}
                    />
                  ))}
                </>
              ) : (
                <S.PSBox>
                  <S.PSNull>
                    <S.PSText>완료한 프로젝트가 없습니다.</S.PSText>
                  </S.PSNull>
                </S.PSBox>
              )}
            </S.ProjectGridMobile>
          </S.PSBox>
        </Mobile>
        <Tablet>
          <S.PSBox>
            <Heading size={4} style={{ marginLeft: 40 }}>
              지원 현황
            </Heading>
            <S.ProjectGridTablet>
              {project && project.submitPro.length !== 0 ? (
                <>
                  {project.submitPro.map(item => (
                    <ProjectCard item={item} key={item.projectID} recu />
                  ))}
                </>
              ) : (
                <S.PSBox>
                  <S.PSNull>
                    <S.PSText>지원한 프로젝트가 없습니다.</S.PSText>
                  </S.PSNull>
                </S.PSBox>
              )}
            </S.ProjectGridTablet>
          </S.PSBox>
          <S.PSBox>
            <Heading size={4} style={{ marginLeft: 40 }}>
              진행 현황
            </Heading>
            <S.ProjectGridTablet>
              {project && project.partInPro.length !== 0 ? (
                <>
                  {project.partInPro.map(item => (
                    <ProjectCard item={item} key={item.projectID} recu />
                  ))}
                </>
              ) : (
                <S.PSBox>
                  <S.PSNull>
                    <S.PSText>진행중인 프로젝트가 없습니다.</S.PSText>
                  </S.PSNull>
                </S.PSBox>
              )}
            </S.ProjectGridTablet>
          </S.PSBox>
          <S.PSBox>
            <Heading size={4} style={{ marginLeft: 40 }}>
              완료 현황
            </Heading>
            <S.ProjectGrid>
              {project && project.completePro.length !== 0 ? (
                <>
                  {project.completePro.map(item => (
                    <ProjectCard
                      item={item}
                      key={item.projectID}
                      recu={false}
                    />
                  ))}
                </>
              ) : (
                <S.PSBox>
                  <S.PSNull>
                    <S.PSText>완료한 프로젝트가 없습니다.</S.PSText>
                  </S.PSNull>
                </S.PSBox>
              )}
            </S.ProjectGrid>
          </S.PSBox>
        </Tablet>
        <Desktop>
          <S.PSBox>
            <Heading size={4}>지원 현황</Heading>
            <S.ProjectGrid>
              {project && project.submitPro.length !== 0 ? (
                <>
                  {project.submitPro.map(item => (
                    <ProjectCard item={item} key={item.projectID} recu />
                  ))}
                </>
              ) : (
                <S.PSBox>
                  <S.PSNull>
                    <S.PSText>지원한 프로젝트가 없습니다.</S.PSText>
                  </S.PSNull>
                </S.PSBox>
              )}
            </S.ProjectGrid>
          </S.PSBox>
          <S.PSBox>
            <Heading size={4}>진행 현황</Heading>
            <S.ProjectGrid>
              {project && project.partInPro.length !== 0 ? (
                <>
                  {project.partInPro.map(item => (
                    <ProjectCard item={item} key={item.projectID} recu />
                  ))}
                </>
              ) : (
                <S.PSBox>
                  <S.PSNull>
                    <S.PSText>진행중인 프로젝트가 없습니다.</S.PSText>
                  </S.PSNull>
                </S.PSBox>
              )}
            </S.ProjectGrid>
          </S.PSBox>
          <S.PSBox>
            <Heading size={4}>완료 현황</Heading>
            <S.ProjectGrid>
              {project && project.completePro.length !== 0 ? (
                <>
                  {project.completePro.map(item => (
                    <ProjectCard
                      item={item}
                      key={item.projectID}
                      recu={false}
                    />
                  ))}
                </>
              ) : (
                <S.PSBox>
                  <S.PSNull>
                    <S.PSText>완료한 프로젝트가 없습니다.</S.PSText>
                  </S.PSNull>
                </S.PSBox>
              )}
            </S.ProjectGrid>
          </S.PSBox>
        </Desktop>
      </div>
    );
  }
  return <SkelSubscribe />;
};
