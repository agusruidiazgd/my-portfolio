import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components'
import { devices } from '../../constants/devices.js';

const Main = () => {
    const refRef = useRef(null);
    
    const [show, doShow] = useState({
      itOne: false,

      itTwo: false,

      itThree: false,
    });


    useEffect(() => {
      const onScroll = () => {
        const topPos = refRef.current.getBoundingClientRect().top;
        const scrollPos = window.scrollY + window.innerHeight;

        if (topPos < scrollPos) {
          doShow({ ...show, itOne: true, itTwo: true });
        }
      };
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }, [show]);

  return (
    <MainContainer>
      <Div animate={show.itOne} ref={refRef}>
        <Text animate={show.itOne}>
          Creative and proactive Frontend Engineer with experience in building
          stable and responsive websites, collaborative environments.
        </Text>
      </Div>
      <Image animate={show.itTwo} />
    </MainContainer>
  );
}

export default Main

const MainContainer = styled.main`
  padding: 30px 30px;
  display: flex;
  position: relative;
  height: 60vh;
  @media ${devices.tablet} {
    height: 80vh;
  }
  @media ${devices.laptop} {
  }
`;

const Text = styled.p`
  font-family: 'Frank Ruhl Libre', serif;
  font-size: 22px;
  text-align: left;
  line-height: 1.5;
  transition: all 2s;
  transition-delay: 1.3s;
  color: ${({ animate }) => (animate ? '#ffff' : 'transparent')};
  @media ${devices.tablet} {
    font-size: 28px;
  }
  @media ${devices.laptop} {
    font-size: 36px;
  }
`;

const Image = styled.img`
  background-image: url('https://images.unsplash.com/photo-1543966888-cbd9a4456f85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80');
  background-position: top; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  right: 10vw;
  box-sizing: border-box;
  position: absolute;
  margin-top: 30px;
  border-radius: 3px;
  height: 400px;
  transition: all 2s;
  background-color: #262626;
  background-blend-mode: screen;
  transform: translateX(${({ animate }) => (animate ? '0vw' : '50vw')});
  transform-origin: top;
  width: ${({ animate }) => (animate ? '300px' : '0')};
  z-index: 1;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  @media ${devices.tablet} {
    height: 600px;
    right: 30px;
    width: ${({ animate }) => (animate ? '700px' : '0')};
  }
  @media ${devices.laptop} {
  }
`;

const Div = styled.div`
  position: relative;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  transition: all 2s;
  box-sizing: border-box;
  padding: 20px 25px;
  width: ${({ animate }) => (animate ? '60vw' : '0')};
  background-color: #333399;
  height: 400px;
  border-radius: 3px;
  z-index: 2;
  @media ${devices.tablet} {
    width: ${({ animate }) => (animate ? '50vw' : '0')};
    padding: 40px 50px;
    height: 400px;
  }
  @media ${devices.laptop} {
    width: ${({ animate }) => (animate ? '50vw' : '0')};
    height: 400px;
  }
  &::before {
    content: '';
    background-color: transparent;
    position: absolute;
    left: 5px;
    bottom: 5px;
    border-color: #ee0b72;
    border-radius: 3px;
    border-style: solid;
    border-width: ${({ animate }) => (animate ? '2px' : '0px')};
    transition: width 2s;
    transition-delay: 1s;
    height: 100%;
    width: ${({ animate }) => (animate ? '60vw' : '0')};
    @media ${devices.tablet} {
      width: ${({ animate }) => (animate ? '50vw' : '0')};
    }
    @media ${devices.laptop} {
      width: ${({ animate }) => (animate ? '50vw' : '0')};
    }
  }
`;


  