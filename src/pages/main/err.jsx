import React from 'react';
import { Button } from 'react-bulma-components';
import { Link } from 'react-router-dom';
import * as C from '../../components/cRoutes';

export const Err = () => {
  return (
    <>
      <C.NavbarForm />
      <div style={{ marginTop: 80 }}>
        <p className="zoom-area">
          <b>페이지를 찾을 수 없습니다.</b>
        </p>
        <section className="error-container">
          <span className="four">
            <span className="screen-reader-text">4</span>
          </span>
          <span className="zero">
            <span className="screen-reader-text">0</span>
          </span>
          <span className="four">
            <span className="screen-reader-text">4</span>
          </span>
        </section>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 40,
          }}
        >
          <p style={{ fontSize: 20 }}>원하시는 결과를 찾을 수 없습니다.</p>
          <p style={{ fontSize: 20, margin: '20px 0 20px 0' }}>
            올바른 URL을 입력하였는지 확인하세요.
          </p>
          <p style={{ fontSize: 20 }}>
            자세한 내용은 사이트 소유자에게 문의하시기 바랍니다.
          </p>
        </div>
        <div className="link-container">
          <Button color="info" renderAs={Link} to="/">
            메인으로 돌아가기
          </Button>
        </div>
      </div>
      <C.FooterForm />
    </>
  );
};
