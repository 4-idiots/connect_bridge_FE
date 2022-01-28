import React from 'react';
// import axios from 'axios';
import { Hero, Footer, Container, Content } from 'react-bulma-components';

export const FooterForm = () => {
  return (
    <Hero.Footer>
      <Footer backgroundColor="info">
        <Container>
          <Content textAlign="center">
            <p>
              <strong>네 얼간이</strong>
            </p>
          </Content>
        </Container>
      </Footer>
    </Hero.Footer>
  );
};
