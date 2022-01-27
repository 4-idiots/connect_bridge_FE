import React, { useState } from 'react';
// import axios from 'axios';
import { Navbar, Image } from 'react-bulma-components';

export const NavbarForm = () => {
  const [burger, setBurger] = useState(false);

  return (
    <Navbar>
      <Navbar.Brand>
        <Navbar.Item href="#">
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
          <Navbar.Item href="#">프로젝트</Navbar.Item>
          <Navbar.Item href="#">커뮤니티</Navbar.Item>
          <Navbar.Item href="#">대외활동</Navbar.Item>
          <Navbar.Item href="#">팀원</Navbar.Item>
        </Navbar.Container>
        <Navbar.Container align="right">
          <Navbar.Item href="#">마이페이지</Navbar.Item>
          <Navbar.Item href="#">로그아웃</Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
};
