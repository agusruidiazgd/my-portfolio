import React, { useState, useContext } from 'react';
import Tabs from './Tabs'
import Menu from './Menu'
import Toggle from './Toggle'
import DeviceContext from '../../../contexts/DeviceContext'
import styled from 'styled-components';
import { ReactComponent as MainLogo } from '../../../assets/logo-50x50.svg';
import { Link } from 'react-router-dom';



const NavBar = () => {
  const [navToggled, setNavToggled] = useState(false)
  const { isMobile } = useContext(DeviceContext);
  const handleNavToggle = () => {
    setNavToggled(!navToggled)
  }

  return (
    <HeaderNav>
      <Link to="/">
        <MainLogo />
      </Link>
      {isMobile ? <Toggle handleNavToggle={handleNavToggle} /> : <Tabs />}
      {navToggled && <Menu handleNavToggle={handleNavToggle} />}
    </HeaderNav>
  );
};

export default NavBar

const HeaderNav = styled.header`
  position: sticky;
  top: 0;
  background-color: #ffffff;
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

