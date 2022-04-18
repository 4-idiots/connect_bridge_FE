import React, { useState } from 'react';
import { Container, Icon, Box, Heading } from 'react-bulma-components';
import { Link } from 'react-router-dom';
import { OutdoorModalForm } from './outdoorModalModule';
import { OutdoorInfinite } from '../../swr/outdoorInfinite';

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
    <Container style={{ marginTop: 80 }}>
      <Heading>대외활동 둘러보기</Heading>
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
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          rowGap: '3rem',
        }}
      >
        <OutdoorInfinite outActClick={changePoster} />
      </div>
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
