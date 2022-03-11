import React from 'react'
import styled from 'styled-components';
import { animated } from 'react-spring';
import { use3dEffect } from 'use-3d-effect';

const ProjectCard = ({image, title, subtitle, year, width}) => {
  const ref = React.useRef(null);
  const { style, ...mouseHandlers } = use3dEffect(ref);


  return (
    <animated.div
      ref={ref}
      style={{
        background: '#61dafb',
        width: width,
        padding: '0',
        margin: '40px',
        ...style,
      }}
      {...mouseHandlers}
    >
      <Card>
        <ImageBackground
          class="img"
          urlImage="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2710&q=80"
        >
          <Text>2020</Text>
          <TitleCard>Titulo del Proyecto</TitleCard>
          <Text>Subtitulo del proyecto</Text>
          <Text>2020</Text>
        </ImageBackground>
      </Card>
    </animated.div>
  );
}

export default ProjectCard

const Card = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70vh;
  background: #ee0b72;
  background: linear-gradient(90deg, #ee0b72 20%, rgba(255, 105, 0, 1) 80%);
  z-index: 0;
  transition: all 0.5s ease-in-out;

`;

const ImageBackground = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ urlImage }) => urlImage});
  background-position: bottom; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  box-sizing: border-box;
  transition: all 0.5s ease-in-out;
  z-index: 1;
  &:hover {
    width: 95%;
    height: 95%;
  }
  &:hover p{
    color: white;
  }
  &:hover h2 {
    color: white;
  }
`;

const TitleCard = styled.h2`
  text-align: center;
  line-height: 2;
  font-family: 'Frank Ruhl Libre', serif;
  color: transparent;
  font-size: 32px;
  z-index: 2;
  transition: all 0.5s ease-in-out;
`;

const Text = styled.p`
  text-align: center;
  line-height: 2;
  font-family: 'Poppins', sans-serif;
  color: transparent;
  font-size: 18px;
  z-index: 2;
  transition: all 0.5s ease-in-out;
`;
