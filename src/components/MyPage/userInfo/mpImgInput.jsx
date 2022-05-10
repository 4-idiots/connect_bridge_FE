import React from 'react';
import { Form } from 'react-bulma-components';
import PropTypes from 'prop-types';
import * as S from './style';

export const MyPageImg = ({ setUser, user, setCheck, check }) => {
  const encodeFileToBase64 = fileBlob => {
    setCheck({ ...check, imgChange: true });
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise(resolve => {
      reader.onload = () => {
        setUser({
          ...user,
          preview: reader.result,
          userPicture: fileBlob,
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
          <S.MPImg alt="img" src={user.userPicture} />
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
  setCheck: PropTypes.func.isRequired,
  check: PropTypes.objectOf(PropTypes.any).isRequired,
};
