import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import { devices } from '../../constants/devices.js';


const PortfolioHeader = () => {
  return (
    <Container>
      <Fade top>
        <Title>Some Things I’ve Built</Title>
        <Text>
          Here are a few sites and platform where I worked on. I hope you enjoy
          it!
        </Text>
      </Fade>
    </Container>
  );
}

export default PortfolioHeader

const Container = styled.header`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  padding: 0px 20px;
`


const Title = styled.h2`
  padding: 30px 30px;
  display: flex;
  color: #262626;
  font-family: 'Frank Ruhl Libre', serif;
  font-size: 36px;
  font-weight: 900;
  text-align: center;
  margin: 0px;
  padding: 5px 0px;
  @media ${devices.tablet} {
    font-size: 48px;
  }
  @media ${devices.laptop} {
    font-size: 56px;
  }
`;

const Text = styled.p`
  line-height: 2;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 300;
  text-align: center;
  @media ${devices.tablet} {
    font-size: 18px;
    text-align: left;
  }
  @media ${devices.laptop} {
    font-size: 18px;
  }
`;