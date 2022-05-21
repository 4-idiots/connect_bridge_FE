/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react';
import { Button, Card, Media, Heading } from 'react-bulma-components';
import PropTypes from 'prop-types';
import { useJwt } from 'react-jwt';
import { Link } from 'react-router-dom';
import * as Send from '../../services/outdoorService';
import { useAuth } from '../../contexts/hooks/useAuth';
import * as S from './style';

export const OutdoorCardForm = ({ item, onActClick }) => {
  const [isHover, setIsHover] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [dynLike, setDynLike] = useState(item.outActLike);
  const [dynView, setDynView] = useState(item.outActView);

  const auth = useAuth();
  const { decodedToken } = useJwt(auth.token);
  const isLogin = localStorage.getItem('isLogin') || '';

  const deleteAxios = async id => {
    try {
      await Send.outdoorDeleteService(id);
      alert('삭제 완료');
      window.location.replace('/outdoor');
    } catch (error) {
      alert('다시 시도해주세요');
      window.location.replace('/outdoor');
    }
  };

  const likeCheck = async () => {
    try {
      const result = await Send.outdoorLikeCheck(item.outActID);
      setIsLike(result.data);
    } catch (error) {
      setIsLike(false);
      // pass
    }
  };

  const likeClick = async () => {
    if (isLike) {
      setDynLike(dynLike - 1);
    } else {
      setDynLike(dynLike + 1);
    }
    setIsLike(!isLike);
    try {
      await Send.outdoorLikeService(item.outActID);
    } catch (error) {
      // pass
    }
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
    likeCheck();
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
            <Heading
              size={isLogin ? 6 : 5}
              style={{ fontSize: 'min(1.4vw, 24px)' }}
            >
              {item.outActName}
            </Heading>
          </Media.Item>
          <Media.Item style={{ marginTop: 10 }}>
            {isLogin ? (
              <>
                {decodedToken && decodedToken.role ? (
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
                        deleteAxios(item.outActID);
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
                    {isLike ? (
                      <Button color="danger" onClick={likeClick}>
                        Like: {dynLike}
                      </Button>
                    ) : (
                      <Button color="warning" onClick={likeClick}>
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
