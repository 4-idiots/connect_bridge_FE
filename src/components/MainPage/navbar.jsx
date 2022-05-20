import React, { useState } from 'react';
import { Navbar } from 'react-bulma-components';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/hooks/useAuth';
import * as S from './style';

export const NavbarForm = () => {
  const [burger, setBurger] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const auth = useAuth();
  const isLogin = localStorage.getItem('isLogin') || '';

  return (
    <Navbar fixed="top" color="white" style={{ padding: 10 }}>
      <Navbar.Brand>
        <Link
          to="/"
          onMouseEnter={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
          style={isHover ? { backgroundColor: '#e5e5e5' } : {}}
        >
          <S.Logo src="https://cdn.discordapp.com/attachments/885739536301318172/973944679563399208/connectbridge.png" />
        </Link>
        <Navbar.Burger
          onClick={() => {
            setBurger(!burger);
          }}
          className={burger ? 'is-active' : ''}
        />
      </Navbar.Brand>
      <Navbar.Menu className={burger ? 'is-active' : ''}>
        <Navbar.Container>
          <S.CustomItem renderAs={Link} to="/project">
            프로젝트
          </S.CustomItem>
          <S.CustomItem renderAs={Link} to="/study">
            스터디
          </S.CustomItem>
          <S.CustomItem renderAs={Link} to="/community">
            커뮤니티
          </S.CustomItem>
          <S.CustomItem renderAs={Link} to="/outdoor">
            대외활동
          </S.CustomItem>
          <S.CustomItem renderAs={Link} to="/team">
            팀원
          </S.CustomItem>
        </Navbar.Container>
        <Navbar.Container align="right">
          {isLogin ? (
            <>
              <S.CustomUserItem renderAs={Link} to="/project/upload">
                프로젝트/스터디 생성
              </S.CustomUserItem>
              <S.CustomUserItem renderAs={Link} to="/my/info">
                마이페이지
              </S.CustomUserItem>
              <S.CustomUserItem
                onClick={() => {
                  auth.logout();
                  window.location.replace('/');
                }}
              >
                로그아웃
              </S.CustomUserItem>
            </>
          ) : (
            <S.CustomUserItem renderAs={Link} to="/login">
              로그인/회원가입
            </S.CustomUserItem>
          )}
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
};
