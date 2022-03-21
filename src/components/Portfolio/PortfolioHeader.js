import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


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
`


const Title = styled.h2`
  padding: 30px 30px;
  display: flex;
  color: #262626;
  font-family: 'Frank Ruhl Libre', serif;
  font-size: 56px;
  font-weight: 900;
  text-align: center;
  margin: 0px;
  padding: 5px 0px;
`;

const Text = styled.p`
  text-align: left;
  line-height: 2;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 300;
`;