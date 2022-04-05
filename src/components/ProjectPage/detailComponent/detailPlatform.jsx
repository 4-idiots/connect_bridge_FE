import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Image } from 'react-bulma-components';
import * as S from './style';
import android from '../../../assets/svg/android.png';
import ios from '../../../assets/svg/apple.png';
import web from '../../../assets/svg/web.png';
import program from '../../../assets/svg/program.png';
import saas from '../../../assets/svg/saas.png';
import question from '../../../assets/svg/question.png';

export const DetailPlatform = ({ projectPlatform }) => {
  return (
    <S.DetailPlatform>
      <Heading size={7} style={{ fontWeight: 'bold', fontSize: 26 }}>
        출시 플랫폼
      </Heading>
      <S.PlatformWrap>
        {projectPlatform.map(item => {
          if (item === '반응형 웹(PC/모바일)') {
            return (
              <S.PlatformBox key={item}>
                <Image src={web} size={64} />
                <S.PlatformText>{item}</S.PlatformText>
              </S.PlatformBox>
            );
          }
          if (item === '안드로이드 앱') {
            return (
              <S.PlatformBox key={item}>
                <Image src={android} size={64} />
                <S.PlatformText>{item}</S.PlatformText>
              </S.PlatformBox>
            );
          }
          if (item === 'IOS 앱') {
            return (
              <S.PlatformBox key={item}>
                <Image src={ios} size={64} />
                <S.PlatformText>{item}</S.PlatformText>
              </S.PlatformBox>
            );
          }
          if (item === 'PC(윈도우/맥) 프로그램') {
            return (
              <S.PlatformBox key={item}>
                <Image src={program} size={64} />
                <S.PlatformText>{item}</S.PlatformText>
              </S.PlatformBox>
            );
          }
          if (item === '설치형/SASS 솔루션') {
            return (
              <S.PlatformBox key={item}>
                <Image src={saas} size={64} />
                <S.PlatformText>{item}</S.PlatformText>
              </S.PlatformBox>
            );
          }
          if (item === '미정(논의 후 확정)') {
            return (
              <S.PlatformBox key={item}>
                <Image src={question} size={64} />
                <S.PlatformText>{item}</S.PlatformText>
              </S.PlatformBox>
            );
          }
          return <S.PlatformText>{item}</S.PlatformText>;
        })}
      </S.PlatformWrap>
    </S.DetailPlatform>
  );
};

DetailPlatform.propTypes = {
  projectPlatform: PropTypes.arrayOf(PropTypes.string).isRequired,
};
