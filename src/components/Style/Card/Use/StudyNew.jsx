import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { arrayToPlain } from '../../../../RefactorFunc/etcFunc';
import * as C from '../Components/New/router';

export const StudyNew = ({ item }) => {
  const navigate = useNavigate();
  const [text, setText] = useState();
  const [onRecruit, setOnRecruit] = useState(false);
  useEffect(() => {
    arrayToPlain(item.content, setText);
  }, []);
  return (
    <C.NewContainer onClick={() => navigate(`/study/${item.studyID}`)}>
      <C.NewImg imgSrc={item.studyImg} />
      <C.NewBottom>
        <C.NewField>{item.studyField}</C.NewField>
        <C.NewName name={item.studyName} area={item.studyArea} />
        {text && <C.NewContents contents={text} />}
        <C.NewInfo
          mouseEnter={() => {
            setOnRecruit(true);
          }}
          mouseLeave={() => {
            setOnRecruit(false);
          }}
          onRecruit={onRecruit}
          like={item.studyLike}
          view={item.studyView}
          item={item}
          isProject={false}
        />
      </C.NewBottom>
    </C.NewContainer>
  );
};

StudyNew.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
