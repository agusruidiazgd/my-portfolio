import React, { useState, useEffect } from 'react';
import DeviceContext from '../../contexts/DeviceContext';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ children }) => {
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
     const param = window.matchMedia(
       'only screen and (max-width: 760px)'
     ).matches;
     setIsMobile(param);
   }, []);
  return (
    <DeviceContext.Provider value={{isMobile: isMobile}}>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </DeviceContext.Provider>
  );
};

export default Layout;
