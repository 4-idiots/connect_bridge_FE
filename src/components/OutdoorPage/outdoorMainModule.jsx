import React, { useState } from 'react';
import { Container, Icon, Heading } from 'react-bulma-components';
import { Link } from 'react-router-dom';
import { useJwt } from 'react-jwt';
import { OutdoorModalForm } from './outdoorModalModule';
import { OutdoorInfinite } from '../../swr/outdoorInfinite';
import { useAuth } from '../../contexts/hooks/useAuth';
import * as S from './style';

export const OutdoorMainForm = () => {
  const auth = useAuth();
  const [poster, setPoster] = useState({});
  const { decodedToken } = useJwt(auth.token);

  const changePoster = (otitle, oimage, olink, oview, olike, ooutID) => {
    setPoster({
      outID: ooutID,
      check: !poster.check,
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
      {poster.check && (
        <OutdoorModalForm
          close={() => {
            changePoster('', '', '');
          }}
          item={poster}
        />
      )}
      {decodedToken && decodedToken.role && <NewPosterBtn />}
      <S.OdMainGrid>
        <OutdoorInfinite outActClick={changePoster} />
      </S.OdMainGrid>
    </Container>
  );
};

const NewPosterBtn = () => {
  return (
    <Link to="/outdoor/upload">
      <S.OdMainBox>
        <Icon style={{ display: 'flex' }}>
          <i className="fa fa-plus fa-2x" style={{ color: 'white' }} />
        </Icon>
      </S.OdMainBox>
    </Link>
  );
};
