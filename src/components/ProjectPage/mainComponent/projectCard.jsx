import React, { useState } from 'react';
import { Card, Media, Content, Heading, Icon } from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from './style';
import { ReactComponent as Heart } from '../../../assets/svg/heart.svg';
import { RecruitModal } from './recruitModal';

export const ProjectCard = ({
  projectMotive,
  isLike,
  projectImg,
  projectField,
  projectName,
  projectLike,
  projectView,
  prUserID,
  projectID,
  uiuxPlan,
  gamePlan,
  managerPlan,
  hwPlan,
  iosFr,
  androidFr,
  webFrontFr,
  webPublicFr,
  crossFr,
  uiuxDe,
  graphicDe,
  thrdDe,
  hwDe,
  etcDe,
  webBk,
  blchBk,
  aiBk,
  dsBk,
  gameBk,
  planBu,
  marketingBu,
  financeBu,
  salesBu,
  consultBu,
  investBu,
  etcBu,
  blogEtc,
  influEtc,
  compEtc,
  uiuxPlanNow,
  gamePlanNow,
  managerPlanNow,
  hwPlanNow,
  iosFrNow,
  androidFrNow,
  webFrontFrNow,
  webPublicFrNow,
  crossFrNow,
  uiuxDeNow,
  graphicDeNow,
  thrdDeNow,
  hwDeNow,
  etcDeNow,
  webBkNow,
  blchBkNow,
  aiBkNow,
  dsBkNow,
  gameBkNow,
  planBuNow,
  marketingBuNow,
  financeBuNow,
  salesBuNow,
  consultBuNow,
  investBuNow,
  etcBuNow,
  blogEtcNow,
  influEtcNow,
  compEtcNow,
}) => {
  const navigate = useNavigate();

  const [isHover, setIsHover] = useState(false);
  const [onHeart, setOnHeart] = useState(false);
  const [onRecruit, setOnRecruit] = useState(false);
  const [usLike, setUsLike] = useState(isLike);
  const [likeCount, setLikeCount] = useState(projectLike);

  const handleLike = now => {
    return (
      setUsLike(!usLike),
      now ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1)
    );
  };

  return (
    <Card
      style={
        isHover
          ? {
              transform: 'scale(1.1)',
              width: 290,
              position: 'relative',
              borderRadius: '5%',
              height: 360,
            }
          : {
              width: 290,
              position: 'relative',
              borderRadius: '5%',
              height: 360,
            }
      }
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <div
        onClick={() => navigate(`/project/${projectID}`)}
        className="imgclick"
        role="presentation"
      >
        <img
          src={projectImg}
          style={{
            width: '100%',
            height: '160px',
            borderRadius: '5%',
            objectFit: 'cover',
          }}
          alt="img"
        />
      </div>
      <div
        style={{
          position: 'absolute',
          top: 5,
          left: 10,
          backgroundColor: 'black',
          color: 'white',
          padding: 5,
          fontWeight: 'bold',
        }}
      >
        {projectMotive ? '사이드프로젝트' : '스터디/네트워킹'}
      </div>
      <S.CustomDiv
        onClick={() => handleLike(!usLike)}
        onMouseEnter={() => {
          setOnHeart(true);
        }}
        onMouseLeave={() => {
          setOnHeart(false);
        }}
      >
        {usLike ? (
          <Icon>
            <Heart fill={onHeart ? 'rgb(255,192,203)' : 'rgb(215,90,74)'} />
          </Icon>
        ) : (
          <Icon>
            <Heart fill={onHeart ? 'rgb(211,211,211)' : 'rgb(128,128,128)'} />
          </Icon>
        )}
      </S.CustomDiv>
      <Card.Content onClick={() => navigate(`/project/${projectID}`)}>
        <Media style={{ marginBottom: 0 }}>
          <Media.Item>
            <Heading subtitle size={7}>
              {projectField}
            </Heading>
            <Heading size={6}>{projectName}</Heading>
          </Media.Item>
        </Media>
        <Media style={{ marginBottom: '0.8rem' }}>
          <Content
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Icon>
                <i className="fas fa-heart" />
              </Icon>
              <div>{likeCount}</div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginRight: 10,
              }}
            >
              <Icon>
                <i className="fas fa-eye" />
              </Icon>
              <div>{projectView}</div>
            </div>
          </Content>
        </Media>
        <S.mainRecruitWrap
          onMouseEnter={() => {
            setOnRecruit(true);
          }}
          onMouseLeave={() => {
            setOnRecruit(false);
          }}
        >
          <S.mainRecruitBox>
            모집현황
            <Icon>
              <i className="fas fa-arrow-up" />
            </Icon>
          </S.mainRecruitBox>
          {onRecruit ? (
            <RecruitModal
              uiuxPlan={uiuxPlan}
              gamePlan={gamePlan}
              managerPlan={managerPlan}
              hwPlan={hwPlan}
              iosFr={iosFr}
              androidFr={androidFr}
              webFrontFr={webFrontFr}
              webPublicFr={webPublicFr}
              crossFr={crossFr}
              uiuxDe={uiuxDe}
              graphicDe={graphicDe}
              thrdDe={thrdDe}
              hwDe={hwDe}
              etcDe={etcDe}
              webBk={webBk}
              blchBk={blchBk}
              aiBk={aiBk}
              dsBk={dsBk}
              gameBk={gameBk}
              planBu={planBu}
              marketingBu={marketingBu}
              financeBu={financeBu}
              salesBu={salesBu}
              consultBu={consultBu}
              investBu={investBu}
              etcBu={etcBu}
              blogEtc={blogEtc}
              influEtc={influEtc}
              compEtc={compEtc}
              uiuxPlanNow={uiuxPlanNow}
              gamePlanNow={gamePlanNow}
              managerPlanNow={managerPlanNow}
              hwPlanNow={hwPlanNow}
              iosFrNow={iosFrNow}
              androidFrNow={androidFrNow}
              webFrontFrNow={webFrontFrNow}
              webPublicFrNow={webPublicFrNow}
              crossFrNow={crossFrNow}
              uiuxDeNow={uiuxDeNow}
              graphicDeNow={graphicDeNow}
              thrdDeNow={thrdDeNow}
              hwDeNow={hwDeNow}
              etcDeNow={etcDeNow}
              webBkNow={webBkNow}
              blchBkNow={blchBkNow}
              aiBkNow={aiBkNow}
              dsBkNow={dsBkNow}
              gameBkNow={gameBkNow}
              planBuNow={planBuNow}
              marketingBuNow={marketingBuNow}
              financeBuNow={financeBuNow}
              salesBuNow={salesBuNow}
              consultBuNow={consultBuNow}
              investBuNow={investBuNow}
              etcBuNow={etcBuNow}
              blogEtcNow={blogEtcNow}
              influEtcNow={influEtcNow}
              compEtcNow={compEtcNow}
            />
          ) : (
            ''
          )}
        </S.mainRecruitWrap>
      </Card.Content>
    </Card>
  );
};

ProjectCard.propTypes = {
  projectMotive: PropTypes.bool.isRequired,
  isLike: PropTypes.bool.isRequired,
  projectImg: PropTypes.string.isRequired,
  projectField: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  projectLike: PropTypes.number.isRequired,
  projectView: PropTypes.number.isRequired,
  prUserID: PropTypes.number.isRequired,
  projectID: PropTypes.number.isRequired,
  uiuxPlan: PropTypes.number.isRequired,
  gamePlan: PropTypes.number.isRequired,
  managerPlan: PropTypes.number.isRequired,
  hwPlan: PropTypes.number.isRequired,
  iosFr: PropTypes.number.isRequired,
  androidFr: PropTypes.number.isRequired,
  webFrontFr: PropTypes.number.isRequired,
  webPublicFr: PropTypes.number.isRequired,
  crossFr: PropTypes.number.isRequired,
  uiuxDe: PropTypes.number.isRequired,
  graphicDe: PropTypes.number.isRequired,
  thrdDe: PropTypes.number.isRequired,
  hwDe: PropTypes.number.isRequired,
  etcDe: PropTypes.number.isRequired,
  webBk: PropTypes.number.isRequired,
  blchBk: PropTypes.number.isRequired,
  aiBk: PropTypes.number.isRequired,
  dsBk: PropTypes.number.isRequired,
  gameBk: PropTypes.number.isRequired,
  planBu: PropTypes.number.isRequired,
  marketingBu: PropTypes.number.isRequired,
  financeBu: PropTypes.number.isRequired,
  salesBu: PropTypes.number.isRequired,
  consultBu: PropTypes.number.isRequired,
  investBu: PropTypes.number.isRequired,
  etcBu: PropTypes.number.isRequired,
  blogEtc: PropTypes.number.isRequired,
  influEtc: PropTypes.number.isRequired,
  compEtc: PropTypes.number.isRequired,
  uiuxPlanNow: PropTypes.number.isRequired,
  gamePlanNow: PropTypes.number.isRequired,
  managerPlanNow: PropTypes.number.isRequired,
  hwPlanNow: PropTypes.number.isRequired,
  iosFrNow: PropTypes.number.isRequired,
  androidFrNow: PropTypes.number.isRequired,
  webFrontFrNow: PropTypes.number.isRequired,
  webPublicFrNow: PropTypes.number.isRequired,
  crossFrNow: PropTypes.number.isRequired,
  uiuxDeNow: PropTypes.number.isRequired,
  graphicDeNow: PropTypes.number.isRequired,
  thrdDeNow: PropTypes.number.isRequired,
  hwDeNow: PropTypes.number.isRequired,
  etcDeNow: PropTypes.number.isRequired,
  webBkNow: PropTypes.number.isRequired,
  blchBkNow: PropTypes.number.isRequired,
  aiBkNow: PropTypes.number.isRequired,
  dsBkNow: PropTypes.number.isRequired,
  gameBkNow: PropTypes.number.isRequired,
  planBuNow: PropTypes.number.isRequired,
  marketingBuNow: PropTypes.number.isRequired,
  financeBuNow: PropTypes.number.isRequired,
  salesBuNow: PropTypes.number.isRequired,
  consultBuNow: PropTypes.number.isRequired,
  investBuNow: PropTypes.number.isRequired,
  etcBuNow: PropTypes.number.isRequired,
  blogEtcNow: PropTypes.number.isRequired,
  influEtcNow: PropTypes.number.isRequired,
  compEtcNow: PropTypes.number.isRequired,
};
