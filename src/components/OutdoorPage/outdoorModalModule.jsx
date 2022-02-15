import React from 'react';
import { Modal, Image, Button } from 'react-bulma-components';
import PropTypes from 'prop-types';

export const OutdoorModalForm = ({ close, title, image, link }) => {
  return (
    <Modal show onClose={close} closeOnEsc closeOnBlur>
      <Modal.Card>
        <Modal.Card.Header showClose={false}>{title}</Modal.Card.Header>
        <Modal.Card.Body>
          <Image src={image} />
        </Modal.Card.Body>
        <Modal.Card.Footer>
          <Button.Group>
            <Button color="danger">Like</Button>
            <Button color="info">
              <a
                target="_blank"
                href={link}
                rel="noreferrer"
                style={{ textDecorationLine: 'none', color: 'white' }}
              >
                공식 사이트로 이동
              </a>
            </Button>
          </Button.Group>
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
};

OutdoorModalForm.defaultProps = {
  close: () => {
    console.log('modal');
  },
  title: 'Title',
  image: 'image',
  link: 'link',
};
