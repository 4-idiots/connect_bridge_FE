/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react';
import { Button, Card, Media, Heading } from 'react-bulma-components';
import PropTypes from 'prop-types';
import { useJwt } from 'react-jwt';
import { Link } from 'react-router-dom';
import * as Send from '../../services/outdoorService';
import { useAuth } from '../../contexts/hooks/useAuth';
import * as S from './style';
import * as LK from '../../RefactorFunc/likeFunc';
import { deleteData } from '../../RefactorFunc/dataControl';

export const OutdoorCardForm = ({ item, onActClick }) => {
  const [isHover, setIsHover] = useState(false);
  const [usLike, setUsLike] = useState(false);
  const [dynLike, setDynLike] = useState(item.outActLike);
  const [dynView, setDynView] = useState(item.outActView);
  const auth = useAuth();
  const { decodedToken } = useJwt(auth.token);

  const handleLike = async () => {
    LK.changeDynLike(usLike, dynLike, setDynLike);
    setUsLike(!usLike);
    LK.likeCommunicate(Send.outdoorLikeService, item.outActID);
  };

  const addView = async () => {
    try {
      await Send.outdoorGetSomeService(item.outActID);
    } catch (err) {
      // pass
    }
  };

  const onClickHandler = () => {
    setDynView(dynView + 1);
    addView();
    onActClick();
  };

  useEffect(() => {
    LK.checkLike(item.outActID, setUsLike, Send.outdoorLikeCheck);
  }, []);

  return (
    <S.OdCard
      style={
        isHover
          ? {
              transform: 'scale(1.1)',
            }
          : {
              overflow: 'hidden',
            }
      }
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <S.OdCardImgBox>
        <Card.Image onClick={onClickHandler} src={item.outActImg} />
      </S.OdCardImgBox>

      <Card.Content>
        <Media
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Media.Item
            style={{ height: 'min(3vw,36px)', textOverflow: 'ellipsis' }}
          >
            <Heading style={{ fontSize: 'min(1.4vw, 20px)' }}>
              {item.outActName}
            </Heading>
          </Media.Item>
          <Media.Item style={{ marginTop: 10 }}>
            {decodedToken ? (
              <>
                {decodedToken.role ? (
                  <S.OdCardBtnGroup>
                    <Button
                      renderAs={Link}
                      to={`/outdoor/update/${item.outActID}`}
                      color="link"
                      style={{ marginRight: 6, fontSize: 'min(2vw, 16px)' }}
                    >
                      수정
                    </Button>
                    <Button
                      onClick={() => {
                        deleteData(
                          item.outActID,
                          '/outdoor',
                          Send.outdoorDeleteService,
                        );
                      }}
                      color="danger"
                      style={{ fontSize: 'min(2vw, 16px)' }}
                    >
                      삭제
                    </Button>
                  </S.OdCardBtnGroup>
                ) : (
                  <S.OdCardUserBtndBox>
                    <p>View: {dynView}</p>
                    {usLike ? (
                      <Button color="danger" onClick={handleLike}>
                        Like: {dynLike}
                      </Button>
                    ) : (
                      <Button color="warning" onClick={handleLike}>
                        Like: {dynLike}
                      </Button>
                    )}
                  </S.OdCardUserBtndBox>
                )}
              </>
            ) : (
              ''
            )}
          </Media.Item>
        </Media>
      </Card.Content>
    </S.OdCard>
  );
};

OutdoorCardForm.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  onActClick: PropTypes.func.isRequired,
};
