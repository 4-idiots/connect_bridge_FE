import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Tag } from 'react-bulma-components';
import * as S from './style';

export const DetailKeyward = ({ studyKeyward }) => {
  const strToTag = studyKeyward.split(',');

  return (
    <S.SkillWrap>
      <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
        스터디 키워드
      </Heading>
      <S.SkillBox>
        {strToTag.map(item => (
          <Tag
            key={item}
            color="info"
            style={{ marginRight: 10 }}
            rounded
            className="is-medium"
          >
            {item}
          </Tag>
        ))}
      </S.SkillBox>
    </S.SkillWrap>
  );
};

DetailKeyward.propTypes = {
  studyKeyward: PropTypes.string.isRequired,
};
