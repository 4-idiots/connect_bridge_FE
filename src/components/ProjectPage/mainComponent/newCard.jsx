import React, { useState, useEffect } from 'react';
import { Icon } from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from './style';
import ReadOnlySlate from '../../../SlateEditor/ReadOnly';
import { RecruitModal } from './recruitModal';

export const NewCard = ({ item }) => {
  const navigate = useNavigate();
  const [prContent, setPrContent] = useState();
  const [onRecruit, setOnRecruit] = useState(false);
  const getAll = () => {
    let te = '';
    item.content.map(text => {
      return text.children.map(info => {
        // eslint-disable-next-line no-return-assign
        return (te = te.concat(' ', info.text));
      });
    });
    setPrContent([
      {
        type: 'paragaph',
        children: [{ text: te }],
      },
    ]);
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <S.newCardContainer onClick={() => navigate(`/project/${item.projectID}`)}>
      <S.newImg>
        <img
          src={item.projectImg}
          alt="test"
          style={{
            borderRadius: '3%',
            objectFit: 'cover',
            width: '516px',
            height: '230px',
          }}
        />
      </S.newImg>
      <S.newBottom>
        <S.newField>{item.projectField}</S.newField>
        <S.newName>{item.projectName}</S.newName>
        <div style={{ width: '500px', overflow: 'hidden', height: '28px' }}>
          {prContent && <ReadOnlySlate value={prContent} />}
        </div>
        <S.newInfoBox>
          <S.newEveBox
            onMouseEnter={() => {
              setOnRecruit(true);
            }}
            onMouseLeave={() => {
              setOnRecruit(false);
            }}
          >
            <S.newreBox>
              모집현황
              <Icon>
                <i className="fas fa-arrow-up" />
              </Icon>
            </S.newreBox>
            {onRecruit ? (
              <RecruitModal
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
              />
            ) : (
              ''
            )}
          </S.newEveBox>
          <S.newIconBox>
            <Icon>
              <i className="fas fa-heart" />
              <span style={{ marginLeft: 4 }}>{item.projectLike}</span>
            </Icon>
            <Icon>
              <i className="fas fa-eye" />
              <span style={{ marginLeft: 4 }}>{item.projectView}</span>
            </Icon>
          </S.newIconBox>
        </S.newInfoBox>
      </S.newBottom>
    </S.newCardContainer>
  );
};

NewCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
