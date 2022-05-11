import React from 'react';
import { Media, Image, Content } from 'react-bulma-components';
import * as S from './style';

export const DetailCommentLog = () => {
  return (
    <S.MediaBox>
      <Media>
        <Media.Item align="left">
          <Image
            size={96}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyGnV38qI3kabyXoa6e9eOn9960Lcnzj3jGA&usqp=CAU"
          />
        </Media.Item>
        <Media.Item align="center">
          <Content>
            <p>
              <strong>amateur</strong>
              <br />
              잘 몰라도 괜찮나요?
              <br />
              <small>2020-03-29</small>
            </p>
          </Content>

          <Media>
            <Media.Item align="left">
              <Image
                size={96}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScy0G31HTq6ikRm8C_nGlHb9yeOTLi4GgQNw&usqp=CAU"
              />
            </Media.Item>
            <Media.Item align="center">
              <Content>
                <p>
                  <strong>poeynus</strong>
                  <br />
                  네 끝을 볼 열정만 있으면 된다고 생각합니다.
                  <br />
                  <small>2020-03-30</small>
                </p>
              </Content>
            </Media.Item>
          </Media>
        </Media.Item>
      </Media>
    </S.MediaBox>
  );
};
