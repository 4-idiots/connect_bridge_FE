import React, { useState } from 'react';
// import axios from 'axios';
import { Navbar, Image, Hero } from 'react-bulma-components';

export const NavbarForm = () => {
  const [burger, setBurger] = useState(false);

  return (
    <Hero.Header>
      <Navbar backgroundColor="info">
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
            <Navbar.Item backgroundColor="brown" href="#">
              프로젝트
            </Navbar.Item>
            <Navbar.Item backgroundColor="success" href="#">
              커뮤니티
            </Navbar.Item>
            <Navbar.Item backgroundColor="purple" href="#">
              대외활동
            </Navbar.Item>
            <Navbar.Item backgroundColor="danger" href="#">
              팀원
            </Navbar.Item>
          </Navbar.Container>
          <Navbar.Container align="right">
            <Navbar.Item backgroundColor="warning" href="#">
              로그인
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    </Hero.Header>
  );
};
