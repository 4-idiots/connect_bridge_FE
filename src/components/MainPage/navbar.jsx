import React, { useState } from 'react';
import { Navbar } from 'react-bulma-components';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/hooks/useAuth';

export const NavbarForm = () => {
  const [burger, setBurger] = useState(false);
  const auth = useAuth();
  const isLogin = localStorage.getItem('isLogin') || '';

  return (
    <Navbar fixed="top" color="white" style={{ padding: 10 }}>
      <Navbar.Brand>
        <Navbar.Item renderAs={Link} to="/" style={{ marginRight: 60 }}>
          <img
            src="https://cdn.discordapp.com/attachments/885739536301318172/972721445681651762/Frame_9.png"
            alt="img"
            width={140}
          />
        </Navbar.Item>
        <Navbar.Burger
          onClick={() => {
            setBurger(!burger);
          }}
          className={burger ? 'is-active' : ''}
        />
      </Navbar.Brand>
      <Navbar.Menu className={burger ? 'is-active' : ''}>
        <Navbar.Container>
          <Navbar.Item
            renderAs={Link}
            to="/project"
            style={{ fontSize: 20, fontWeight: 'bold', marginRight: 30 }}
          >
            프로젝트
          </Navbar.Item>
          <Navbar.Item
            renderAs={Link}
            to="/study"
            style={{ fontSize: 20, fontWeight: 'bold', marginRight: 30 }}
          >
            스터디
          </Navbar.Item>
          <Navbar.Item
            renderAs={Link}
            to="/community"
            style={{ fontSize: 20, fontWeight: 'bold', marginRight: 30 }}
          >
            커뮤니티
          </Navbar.Item>
          <Navbar.Item
            renderAs={Link}
            to="/outdoor"
            style={{ fontSize: 20, fontWeight: 'bold', marginRight: 30 }}
          >
            대외활동
          </Navbar.Item>
          <Navbar.Item
            renderAs={Link}
            to="/team"
            style={{ fontSize: 20, fontWeight: 'bold', marginRight: 30 }}
          >
            팀원
          </Navbar.Item>
        </Navbar.Container>
        <Navbar.Container align="right">
          {isLogin ? (
            <>
              <Navbar.Item
                renderAs={Link}
                to="/project/upload"
                style={{ fontSize: 20, fontWeight: 'bold' }}
              >
                프로젝트/스터디 생성
              </Navbar.Item>
              <Navbar.Item
                renderAs={Link}
                to="/my/info"
                style={{ fontSize: 20, fontWeight: 'bold' }}
              >
                마이페이지
              </Navbar.Item>
              <Navbar.Item
                onClick={() => {
                  auth.logout();
                  window.location.replace('/');
                }}
                style={{ fontSize: 20, fontWeight: 'bold' }}
              >
                로그아웃
              </Navbar.Item>
            </>
          ) : (
            <Navbar.Item
              renderAs={Link}
              to="/login"
              style={{ fontSize: 20, fontWeight: 'bold' }}
            >
              로그인
            </Navbar.Item>
          )}
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
};
