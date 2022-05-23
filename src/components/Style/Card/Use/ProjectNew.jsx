import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { arrayToPlain } from '../../../../RefactorFunc/etcFunc';
import * as C from '../Components/New/router';

export const ProjectNew = ({ item }) => {
  const navigate = useNavigate();
  const [text, setText] = useState();
  const [onRecruit, setOnRecruit] = useState(false);
  useEffect(() => {
    arrayToPlain(item.content, setText);
  }, []);
  return (
    <C.NewContainer onClick={() => navigate(`/project/${item.projectID}`)}>
      <C.NewImg imgSrc={item.projectImg} />
      <C.NewBottom>
        <C.NewField>{item.projectField}</C.NewField>
        <C.NewName name={item.projectName} area={item.projectArea} />
        {text && <C.NewContents contents={text} />}
        <C.NewInfo
          mouseEnter={() => {
            setOnRecruit(true);
          }}
          mouseLeave={() => {
            setOnRecruit(false);
          }}
          onRecruit={onRecruit}
          like={item.projectLike}
          view={item.projectView}
          item={item}
          isProject
        />
      </C.NewBottom>
    </C.NewContainer>
  );
};

ProjectNew.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
