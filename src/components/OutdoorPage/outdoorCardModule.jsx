import React, { useState } from 'react';
import { Button, Card, Media, Heading } from 'react-bulma-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { outdoorDeleteService } from '../../service';

export const OutdoorCardForm = ({
  outActID,
  outActName,
  outActView,
  outActLike,
  onActClick,
  outActImg,
}) => {
  const [isHover, setIsHover] = useState(false);
  const [manager, setManager] = useState(true);

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
  return (
    <Card
      style={
        isHover
          ? {
              width: 280,
              marginTop: 30,
              marginRight: 30,
              transform: 'scale(1.1)',
            }
          : {
              width: 280,
              marginTop: 30,
              marginRight: 30,
            }
      }
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <Card.Image onClick={onActClick} src={outActImg} />
      <Card.Content>
        <Media>
          <Media.Item>
            <Heading size={4}>{outActName}</Heading>
            <Heading subtitle size={6}>
              View: {outActView}
            </Heading>
          </Media.Item>
          <Media.Item align="right">
            {manager ? (
              <Button.Group
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Button
                  renderAs={Link}
                  to={`/outdoor/update/${outActID}`}
                  color="link"
                  style={{ marginRight: 0 }}
                >
                  수정하기
                </Button>
                <Button
                  onClick={() => {
                    deleteAxios(outActID);
                  }}
                  color="danger"
                >
                  삭제하기
                </Button>
              </Button.Group>
            ) : (
              <Button color="danger">Like: {outActLike}</Button>
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
