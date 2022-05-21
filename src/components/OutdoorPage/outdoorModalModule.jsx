import React from 'react';
import { Modal, Image, Button, Media, Box } from 'react-bulma-components';
import PropTypes from 'prop-types';

export const OutdoorModalForm = ({ close, item }) => {
  return (
    <Modal show onClose={close} closeOnEsc closeOnBlur showClose={false}>
      <Modal.Card>
        <Modal.Card.Header>
          <Modal.Card.Title>{item.title}</Modal.Card.Title>
        </Modal.Card.Header>
        <Modal.Card.Body>
          <Media style={{ display: 'flex', flexDirection: 'column' }}>
            <Media.Item style={{ margin: 'auto' }}>
              <Image src={item.image} />
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
          <Button color="info">
            <a
              target="_blank"
              href={item.link}
              rel="noopener noreferrer"
              style={{ textDecorationLine: 'none', color: 'white' }}
            >
              공식 사이트로 이동
            </a>
          </Button>
        </Modal.Card.Footer>
      </Modal.Card>
    </Modal>
  );
};

OutdoorModalForm.propTypes = {
  close: PropTypes.func.isRequired,
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
