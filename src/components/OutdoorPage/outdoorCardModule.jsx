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
        <Card.Image onClick={onActClick} src={outActImg} />
      </div>

      <Card.Content>
        <Media
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Media.Item style={{ height: 36, textOverflow: 'ellipsis' }}>
            <Heading size={6}>{outActName}</Heading>
          </Media.Item>
          <Media.Item style={{ marginTop: 10 }}>
            {manager ? (
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
                <p>View: {outActView}</p>
                <Button color="danger">Like: {outActLike}</Button>
              </div>
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
