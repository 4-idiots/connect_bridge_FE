import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Tag } from 'react-bulma-components';
import * as S from './style';

export const DetailSkill = ({ projectSkill }) => {
  const strToTag = projectSkill.split(',');

  return (
    <S.SkillWrap>
      <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
        기술/언어
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

DetailSkill.propTypes = {
  projectSkill: PropTypes.string.isRequired,
};
