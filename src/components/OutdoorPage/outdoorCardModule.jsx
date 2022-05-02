/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react';
import { Button, Card, Media, Heading } from 'react-bulma-components';
import PropTypes from 'prop-types';
import { useJwt } from 'react-jwt';
import { Link } from 'react-router-dom';
import {
  outdoorDeleteService,
  outdoorLikeCheck,
  outdoorLikeService,
  outdoorGetSomeService,
} from '../../service';
import { useAuth } from '../../contexts/hooks/useAuth';

export const OutdoorCardForm = ({
  outActID,
  outActName,
  outActView,
  outActLike,
  onActClick,
  outActImg,
}) => {
  const [isHover, setIsHover] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [dynLike, setDynLike] = useState(outActLike);
  const [dynView, setDynView] = useState(outActView);

  const auth = useAuth();
  const { decodedToken, isExpired } = useJwt(auth.token);
  const isLogin = localStorage.getItem('isLogin') || '';

  const deleteAxios = async id => {
    try {
      const result = await outdoorDeleteService(id);
      alert('삭제 완료');
      window.location.replace('/outdoor');
    } catch (error) {
      alert('다시 시도해주세요');
      window.location.replace('/outdoor');
    }
  };

  const likeCheck = async () => {
    try {
      const result = await outdoorLikeCheck(outActID);
      setIsLike(result.data);
    } catch (error) {
      setIsLike(false);
      console.log(error);
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
      const result = await outdoorLikeService(outActID);
    } catch (error) {
      console.log(error);
    }
  };

  const addView = async () => {
    try {
      const result = await outdoorGetSomeService(outActID);
    } catch (err) {
      console.log('error');
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
    <Card
      style={
        isHover
          ? {
              width: 280,
              height: 500,
              transform: 'scale(1.1)',
            }
          : {
              width: 280,
              height: 500,
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
      <div style={{ height: 380, overflow: 'hidden' }}>
        <Card.Image onClick={onClickHandler} src={outActImg} />
      </div>

      <Card.Content>
        <Media
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Media.Item style={{ height: 36, textOverflow: 'ellipsis' }}>
            <Heading size={isLogin ? 6 : 5}>{outActName}</Heading>
          </Media.Item>
          <Media.Item style={{ marginTop: 10 }}>
            {isLogin ? (
              <>
                {decodedToken && decodedToken.role ? (
                  <Button.Group
                    style={{
                      width: 232,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      marginTop: 4,
                    }}
                  >
                    <Button
                      renderAs={Link}
                      to={`/outdoor/update/${outActID}`}
                      color="link"
                      style={{ marginRight: 6 }}
                    >
                      수정
                    </Button>
                    <Button
                      onClick={() => {
                        deleteAxios(outActID);
                      }}
                      color="danger"
                    >
                      삭제
                    </Button>
                  </Button.Group>
                ) : (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: 232,
                    }}
                  >
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
                  </div>
                )}
              </>
            ) : (
              ''
            )}
          </Media.Item>
        </Media>
      </Card.Content>
    </Card>
  );
};

OutdoorCardForm.propTypes = {
  outActID: PropTypes.number,
  outActName: PropTypes.string,
  outActView: PropTypes.number,
  outActLike: PropTypes.number,
  onActClick: PropTypes.func,
  outActImg: PropTypes.string,
};

OutdoorCardForm.defaultProps = {
  outActID: 0,
  outActName: 'Title',
  outActView: 0,
  outActLike: 0,
  onActClick: () => {
    console.log('hh');
  },
  outActImg: 'Image',
};
