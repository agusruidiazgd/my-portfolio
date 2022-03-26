import React from 'react'
import styled from 'styled-components';
import { devices } from '../../../constants/devices';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; 
import Fade from 'react-reveal/Fade';
const links = [
  { name: 'PORTFOLIO', path: '/portfolio' },
  { name: 'ABOUT ME', path: '/about' },
  { name: 'CONTACT', path: '/contact' },
];


const Menu = ({ handleNavToggle }) => {
  return (
    <StyledMenu>
      {links.map((link, index) => (
        <Fade top>
          <StyledLink
            key={`link-${index}`}
            to={link.path}
            onClick={handleNavToggle}
          >
            {link.name}
          </StyledLink>
        </Fade>
      ))}

      <CloseToggle icon={solid('angle-right')} onClick={handleNavToggle} />
    </StyledMenu>
  );
};

export default Menu

const StyledMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  @media ${devices.tablet} {
    width: 60%;
  }
  background-color: #333399;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: 0.9;
  z-index: 4;
  .react-reveal {
    padding: 10px;
  }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #FFFFFF;
    text-transform: uppercase;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    font-size: 22px;
    letter-spacing: 0.2rem;
    position: relative;
    overflow: hidden;
    transition: all 0.5s;
    box-sizing: border-box;
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

const CloseToggle = styled(FontAwesomeIcon)`
  position: fixed;
  top: 20px;
  right: 30px;
  color: #FFFFFF;
  padding: 5px;
  place-items: center;
  font-size: 2rem;
  cursor: pointer;
`;