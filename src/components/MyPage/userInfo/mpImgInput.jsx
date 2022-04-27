import React from 'react';
import { Form, Button } from 'react-bulma-components';
import PropTypes from 'prop-types';
import * as S from './style';

export const MyPageImg = ({ setUser, user }) => {
  const encodeFileToBase64 = fileBlob => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise(resolve => {
      reader.onload = () => {
        setUser({
          ...user,
          preview: reader.result,
          profileImg: fileBlob,
        });
        resolve();
      };
    });
  };

  return (
    <Form.Field>
      <S.MPImgBox>
        {user.preview ? (
          <S.MPImg alt="img" src={user.preview} />
        ) : (
          <S.MPImg alt="img" src="" />
        )}
        <Form.Control>
          <Form.InputFile
            name="imgSrc"
            onChange={e => encodeFileToBase64(e.target.files[0])}
            accept="img/*"
            label="대표 이미지 올리기"
            color="info"
            boxed
            size="small"
          />
        </Form.Control>
      </S.MPImgBox>
    </Form.Field>
  );
};

MyPageImg.propTypes = {
  setUser: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
};
