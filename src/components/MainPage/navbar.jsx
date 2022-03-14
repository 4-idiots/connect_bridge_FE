import React, { useState } from 'react';
// import axios from 'axios';
import { Navbar, Image } from 'react-bulma-components';
import { Link } from 'react-router-dom';

export const NavbarForm = () => {
  const [burger, setBurger] = useState(false);
  const isUser = localStorage.getItem('token') || '';

  return (
    <Navbar fixed="top" color="link">
      <Navbar.Brand>
        <Navbar.Item renderAs={Link} to="/">
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuj0imqukWmBbCZxUZqpqHrIixs71sVj7k-g&usqp=CAU" />
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
          <Navbar.Item backgroundColor="brown" renderAs={Link} to="#">
            프로젝트
          </Navbar.Item>
          <Navbar.Item renderAs={Link} to="/community">
            커뮤니티
          </Navbar.Item>
          <Navbar.Item renderAs={Link} to="/outdoor">
            대외활동
          </Navbar.Item>
          <Navbar.Item renderAs={Link} to="/team">
            팀원
          </Navbar.Item>
        </Navbar.Container>
        <Navbar.Container align="right">
          {isUser ? (
            <>
              <Navbar.Item renderAs={Link} to="/login">
                마이페이지
              </Navbar.Item>
              <Navbar.Item
                onClick={() => {
                  localStorage.clear();
                  window.location.replace('/');
                }}
              >
                로그아웃
              </Navbar.Item>
            </>
          ) : (
            <Navbar.Item renderAs={Link} to="/login">
              로그인
            </Navbar.Item>
          )}
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
};
