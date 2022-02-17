import React from 'react';
// import axios from 'axios';
import { Footer, Container, Content } from 'react-bulma-components';

export const FooterForm = () => {
  return (
    <Footer backgroundColor="link" style={{ marginTop: 30 }}>
      <Container>
        <Content textAlign="center">
          <p style={{ color: 'white' }}>네 얼간이</p>
        </Content>
      </Container>
    </Footer>
  );
};
