import React, { useState } from 'react';
import { Container, Icon, Box } from 'react-bulma-components';
import { Link } from 'react-router-dom';
import { OutdoorModalForm } from './outdoorModalModule';
import { OutdoorCardForm } from './outdoorCardModule';
import { InfinitePage } from '../../swr/infinitePage';

export const OutdoorMainForm = () => {
  const [poster, setPoster] = useState({});

  const { outID, check, title, image, link, view, like } = poster;

  const changePoster = (otitle, oimage, olink, oview, olike, ooutID) => {
    setPoster({
      ...poster,
      outID: ooutID,
      check: !check,
      title: otitle,
      image: oimage,
      link: olink,
      view: oview,
      like: olike,
    });
  };

  return (
    <Container
      style={{
        flexWrap: 'wrap',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'center',
      }}
    >
      {check && (
        <OutdoorModalForm
          close={() => {
            changePoster('', '', '');
          }}
          title={title}
          image={image}
          link={link}
          view={view}
          like={like}
          id={outID}
        />
      )}
      <NewPosterBtn />
      <InfinitePage />
    </Container>
  );
};

const NewPosterBtn = () => {
  return (
    <Link to="/outdoor/upload">
      <Box
        style={{
          borderRadius: '50%',
          backgroundColor: 'brown',
          position: 'fixed',
          bottom: '8rem',
          right: '10rem',
          zIndex: 1,
        }}
      >
        <Icon style={{ display: 'flex' }}>
          <i className="fa fa-plus fa-2x" style={{ color: 'white' }} />
        </Icon>
      </Box>
    </Link>
  );
};
