import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as C from '../Components/router';

export const StudySuggest = ({ item }) => {
  const navigate = useNavigate();
  const [onRecruit, setOnRecruit] = useState(false);

  return (
    <C.SuggestContainer onClick={() => navigate(`/study/${item.studyID}`)}>
      <C.SuggestBox>
        <C.SuggestImg imgSrc={item.studyImg} />
        <C.SuggestInfo>
          <C.SuggestTop
            name={item.studyName}
            like={item.studyLike}
            view={item.studyView}
            area={item.studyArea}
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
            isProject={false}
            item={item}
          />
        </C.SuggestInfo>
      </C.SuggestBox>
    </C.SuggestContainer>
  );
};

StudySuggest.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
