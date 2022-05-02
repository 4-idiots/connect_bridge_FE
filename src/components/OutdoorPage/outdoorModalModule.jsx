import React, { useState } from 'react';
import { Modal, Image, Button, Media, Box } from 'react-bulma-components';
import PropTypes from 'prop-types';
import { outdoorLikeService } from '../../service';

export const OutdoorModalForm = ({
  close,
  title,
  image,
  link,
  view,
  like,
  id,
}) => {
  const [dynLike, setDynLike] = useState(like);

  const likeClick = async () => {
    try {
      const result = await outdoorLikeService(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal show onClose={close} closeOnEsc closeOnBlur showClose={false}>
      <Modal.Card>
        <Modal.Card.Header>
          <Modal.Card.Title>{title}</Modal.Card.Title>
        </Modal.Card.Header>
        <Modal.Card.Body>
          <Media style={{ display: 'flex', flexDirection: 'column' }}>
            <Media.Item style={{ margin: 'auto' }}>
              <Image src={image} />
            </Media.Item>
          </Media>
        </Modal.Card.Body>
        <Modal.Card.Footer
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Button color="info">
              <a
                target="_blank"
                href={link}
                rel="noopener noreferrer"
                style={{ textDecorationLine: 'none', color: 'white' }}
              >
                공식 사이트로 이동
              </a>
            </Button>
          </Box>
        </Modal.Card.Footer>
      </Modal.Card>
    </Modal>
  );
};

OutdoorModalForm.propTypes = {
  close: PropTypes.func,
  title: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
  view: PropTypes.number,
  like: PropTypes.number,
  id: PropTypes.number,
};

OutdoorModalForm.defaultProps = {
  close: () => {
    console.log('modal');
  },
  title: 'Title',
  image: 'image',
  link: 'link',
  view: 0,
  like: 0,
  id: 0,
};
