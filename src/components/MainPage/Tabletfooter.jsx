import React from 'react';
import { Footer, Container, Content } from 'react-bulma-components';

export const FooterTabletForm = () => {
  return (
    <Footer
      backgroundColor="#F8F8FF"
      style={{ marginTop: 30, width: '1200px' }}
    >
      <Container>
        <Content textAlign="center">
          <p style={{ color: 'black' }}>네 얼간이</p>
        </Content>
      </Container>
    </Footer>
  );
};
