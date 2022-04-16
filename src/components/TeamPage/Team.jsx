import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Heading,
  Form,
  Button,
  Box,
  Card,
  Media,
  Image,
  Content,
} from 'react-bulma-components';
import { InfoForm } from './info';
import { TeamInfinite } from '../../swr/teamInfinite';

export const TeamForm = () => {
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
    <Container>
      <Heading style={{ textAlign: 'center', margin: 35 }}>팀원 구하기</Heading>

      <TeamInfinite outActClick={changePoster} />
    </Container>
  );
};
