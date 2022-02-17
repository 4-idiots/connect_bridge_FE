import React, { useState } from 'react';
import { Button, Card, Media, Heading } from 'react-bulma-components';
import PropTypes from 'prop-types';

export const OutdoorCardForm = ({
  outActName,
  outActView,
  outActLike,
  onActClick,
  outActImg,
}) => {
  const [isHover, setIsHover] = useState(false);
  const [manager, setManager] = useState(true);

  return (
    <Card
      style={
        isHover
          ? {
              width: 280,
              backgroundColor: 'pink',
              marginTop: 30,
              marginRight: 30,
              transform: 'scale(1.1)',
            }
          : {
              width: 280,
              backgroundColor: 'pink',
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
                <Button color="link" style={{ marginRight: 0 }}>
                  수정하기
                </Button>
                <Button color="danger">삭제하기</Button>
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
  outActName: PropTypes.string,
  outActView: PropTypes.number,
  outActLike: PropTypes.number,
  onActClick: PropTypes.func,
  outActImg: PropTypes.string,
};

OutdoorCardForm.defaultProps = {
  outActName: 'Title',
  outActView: 0,
  outActLike: 0,
  onActClick: () => {
    console.log('hh');
  },
  outActImg: 'Image',
};
