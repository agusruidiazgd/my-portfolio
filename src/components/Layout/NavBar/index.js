import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as MainLogo } from '../../../assets/logo-50x50.svg';

const links = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT ME', path: '/about' },
  { name: 'PORTFOLIO', path: '/portfolio' },
  { name: 'CONTACT', path: '/contact' },
];

const NavBar = () => {
  
  return (
    <HeaderNav>
      <MainLogo />
      <Nav>
        {links.map((link) => (
          <Link to={link.path}>{link.name}</Link>
        ))}
      </Nav>
    </HeaderNav>
  );
};

export default NavBar

const HeaderNav = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  color: palevioletred;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0px 30px;
  z-index: 6;
`;

const Nav = styled.nav`
  background-color: transparent;
  a {
    text-decoration: none;
    color: #262626;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    padding: 5px 20px;
    position: relative;
    overflow: hidden;
    transition: all 0.5s;
    &::before {
      content: '';
      background-color: #ff6900;
      width: 0px;
      height: 5px;
      position: absolute;
      top: 120%;
      left: 0;
      transition: all 0.5s;
    }
    &::after {
      content: '';
      background-color: #ee0b72;
      width: 0px;
      height: 5px;
      position: absolute;
      top: 120%;
      right: 0;
      transition: all 0.5s;
    }
    &:hover:before {
      width: 50%;
      transform: translateX(100%);
    }
    &:hover:after {
      width: 50%;
      transform: translateX(-100%);
    }
  }
`;
