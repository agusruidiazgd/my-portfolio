import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const links = [
  { name: 'PORTFOLIO', path: '/portfolio' },
  { name: 'ABOUT ME', path: '/about' },
  { name: 'CONTACT', path: '/contact' },
];

const Tabs = () => {
  return (
      <Nav>
        {links.map((link, index) => (
          <Link key={`link-${index}`} to={link.path}>
            {link.name}
          </Link>
        ))}
      </Nav>
  );
}

export default Tabs

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
    letter-spacing: 0.1rem;
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
