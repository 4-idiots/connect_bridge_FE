import React from 'react';
import { Hero } from 'react-bulma-components';

export const BannerForm = () => {
  return (
    <Hero color="info" size="small" style={{ marginBottom: 30, marginTop: 80 }}>
      <Hero.Header>header</Hero.Header>
      <Hero.Body>
        <p className="title">title</p>
        <p className="subtitle">sub</p>
      </Hero.Body>
      <Hero.Footer>footer</Hero.Footer>
    </Hero>
  );
};
