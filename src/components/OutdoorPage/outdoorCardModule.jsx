import React, { useState } from 'react';
import { Button, Card, Media, Heading } from 'react-bulma-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { outdoorDeleteService } from '../../service';

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

  const onDeleteOutdoor = id => {
    // outdoorDeleteService(id)
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    console.log('delete', id);
  };
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
                    onDeleteOutdoor(outActID);
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
