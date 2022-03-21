import React from 'react'
import styled from 'styled-components';
import { animated } from 'react-spring';
import { use3dEffect } from 'use-3d-effect';

const ProjectCard = ({
  image,
  title,
  subtitle,
  year,
  company,
  styleProject,
  setShowDetails,
  chooseProject
}) => {
  const ref = React.useRef(null);
  const { style, ...mouseHandlers } = use3dEffect(ref);
  const handleShowDetails = () => {chooseProject(); setShowDetails(true);}
  return (
    <animated.div
      ref={ref}
      style={{
        background: '#61dafb',
        width: styleProject.width,
        padding: '0',
        margin: '40px',
        ...style,
      }}
      {...mouseHandlers}
    >
      <Card onClick={() => handleShowDetails()}>
        <ImageBackground
          class="img"
          color={styleProject.textHover}
          urlImage={image}
        >
          <Text>{year}</Text>
          <TitleCard>{title}</TitleCard>
          <Text>{subtitle}</Text>
          <Text>{company}</Text>
        </ImageBackground>
      </Card>
    </animated.div>
  );
};

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
  border-radius: 3px;
  z-index: 0;
  transition: all 0.5s ease-in-out;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  cursor: pointer;
`;

const ImageBackground = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-image: url(${({ urlImage }) => urlImage});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  box-sizing: border-box;
  transition: all 0.5s ease-in-out;
  z-index: 1;
  &:hover {
    width: 95%;
    height: 95%;
  }
  &:hover p {
    color: white;
    background-color: #262626;
  }
  &:hover h2 {
    color: ${({ color }) => color};
    background-color: ${({ color }) =>
      color === '#FFFFFF' ? '#262626' : '#FFFFFF'};
  }
`;

const TitleCard = styled.h2`
  text-align: center;
  line-height: 2;
  font-family: 'Frank Ruhl Libre', serif;
  color: transparent;
  font-size: 48px;
  z-index: 2;
  padding: 0 20px;
  transition: all 0.5s ease-in-out;
  background-color: transparent;
`;

const Text = styled.p`
  text-align: center;
  line-height: 2;
  font-family: 'Poppins', sans-serif;
  color: transparent;
  font-size: 18px;
  padding: 0 20px;
  z-index: 2;
  transition: all 0.5s ease-in-out;
`;