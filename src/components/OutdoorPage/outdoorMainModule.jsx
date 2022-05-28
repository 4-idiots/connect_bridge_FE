import React, { useState } from 'react';
import { Container, Icon, Heading } from 'react-bulma-components';
import { Link } from 'react-router-dom';
import { useJwt } from 'react-jwt';
import { OutdoorModalForm } from './outdoorModalModule';
import { OutdoorInfinite } from '../../swr/outdoorInfinite';
import { useAuth } from '../../contexts/hooks/useAuth';
import * as S from './style';
import { Mobile, Desktop, Tablet } from '../../mediaQuery';

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
      <Mobile>
        <Heading style={{ marginLeft: 30 }}>대외활동 둘러보기</Heading>
        {poster.check && (
          <OutdoorModalForm
            close={() => {
              changePoster('', '', '');
            }}
            item={poster}
          />
        )}
        {decodedToken && decodedToken.role && <NewPosterBtn />}
        <S.OdMainGridMobile style={{ marginLeft: 40 }}>
          <OutdoorInfinite outActClick={changePoster} />
        </S.OdMainGridMobile>
      </Mobile>
      <Tablet>
        <Heading style={{ marginLeft: 30 }}>대외활동 둘러보기</Heading>
        {poster.check && (
          <OutdoorModalForm
            close={() => {
              changePoster('', '', '');
            }}
            item={poster}
          />
        )}
        {decodedToken && decodedToken.role && <NewPosterBtn />}
        <S.OdMainGridTablet style={{ marginLeft: 55 }}>
          <OutdoorInfinite outActClick={changePoster} />
        </S.OdMainGridTablet>
      </Tablet>
      <Desktop>
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
      </Desktop>
    </Container>
  );
};

const NewPosterBtn = () => {
  return (
    <Link to="/outdoor/upload">
      <S.OdMainBox>
        <Icon style={{ display: 'flex' }}>
          <i className="fa fa-plus" style={{ color: 'gay' }} />
        </Icon>
      </S.OdMainBox>
    </Link>
  );
};
