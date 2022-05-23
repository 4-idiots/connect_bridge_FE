import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as C from '../Components/router';

export const ProjectSuggest = ({ item }) => {
  const navigate = useNavigate();
  const [onRecruit, setOnRecruit] = useState(false);

  return (
    <C.SuggestContainer onClick={() => navigate(`/project/${item.projectID}`)}>
      <C.SuggestBox>
        <C.SuggestImg imgSrc={item.projectImg} />
        <C.SuggestInfo>
          <C.SuggestTop
            name={item.projectName}
            like={item.projectLike}
            view={item.projectView}
            area={item.projectArea}
          />
          <C.SuggestMid content={item.content} />
          <C.SuggestBot
            mouseEnter={() => {
              setOnRecruit(true);
            }}
            mouseLeave={() => {
              setOnRecruit(false);
            }}
            onRecruit={onRecruit}
            isProject
            item={item}
          />
        </C.SuggestInfo>
      </C.SuggestBox>
    </C.SuggestContainer>
  );
};

ProjectSuggest.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
