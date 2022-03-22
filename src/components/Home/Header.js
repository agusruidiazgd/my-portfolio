import React from 'react'
import styled from 'styled-components'
import { ReactComponent as HeaderImage } from '../../assets/header_image.svg';
import Particles from 'react-tsparticles';
import { devices } from '../../constants/devices.js';

const Header = () => {
   const particlesInit = (main) => {
     console.log(main);

     // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
   };

   const particlesLoaded = (container) => {
     console.log(container);
   };
  return (
    <ContainerHeader>
      <Particles
        id="tsparticles"
        style={{ height: '100vh' }}
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: 'transparent',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: false,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 1,
                size: 50,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ['rgba(255, 105, 0, 1)', '#00C897'],
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: false,
              opacity: 0.5,
              width: 2,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: true,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 10,
            },
            opacity: {
              value: 0.4,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 7,
            },
          },
          detectRetina: true,
        }}
      />
      <p>
        Hello, I am a front-end developer in Spain. Welcome to my portfolio!
      </p>
      <Title>
        <h1 className="name">Agus</h1>
        <h1 className="last-name">Ruidiaz</h1>
      </Title>
      <HeaderImage className="image" />
    </ContainerHeader>
  );
}

export default Header

const ContainerHeader = styled.header`
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  padding: 0px 30px;
  margin-top: 0px;
  position: relative;
  height: 90vh;
  @media ${devices.tablet} {
    margin-top: 30px;
    height: 90vh;
  }
  @media ${devices.laptop} {
  }
  .image {
    position: absolute;
    right: 10vw;
    width: 300px;
    @media ${devices.tablet} {
      bottom: 20vh;
      right: 25vw;
      width: 550px;
    }
    @media ${devices.laptop} {
      bottom: 10vh;
      right: 5vw;
      width: 750px;
    }
  }
  p {
    position: absolute;
    left: 0px;
    padding-left: 30px;
    text-align: left;
    line-height: 2;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    top: 5vh;
    width: 300px;
    @media ${devices.tablet} {
      top: 5vh;
      width: 400px;
      font-size: 18px;
    }
    @media ${devices.laptop} {
      top: 10vh;
      width: 400px;
      font-size: 18px;
    }
    &::before {
      content: '';
      width: 30%;
      background: #ee0b72;
      background: linear-gradient(90deg, #ee0b72 20%, rgba(255, 105, 0, 1) 80%);
      height: 2px;
      position: absolute;
      bottom: 160%;
      left: 30;
      transition: all 0.5s;
    }
  }
  .particles {
    z-index: -1;
  }
`;

const Title = styled.div`
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  bottom: 5vh;
  left: 10vw;
  @media ${devices.tablet} {
  }
  @media ${devices.laptop} {
    bottom: 5vh;
    left: 10vw;
  }

  h1 {
    padding: 0px;
    margin: 0px;
    font-weight: 900;
    font-size: 70px;
    font-family: 'Frank Ruhl Libre', serif;
    background: #ee0b72;
    background: -webkit-linear-gradient(
      90deg,
      #ee0b72 20%,
      rgba(255, 105, 0, 1) 80%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media ${devices.tablet} {
      font-size: 120px;
    }
    @media ${devices.laptop} {
      font-size: 160px;
    }
  }
  h1.name {
    margin: 0px;
  }
  h1.last-name {
    margin-top: -35px;
    font-size: 80px;
    @media ${devices.tablet} {
      margin-top: -55px;
      font-size: 130px;
    }
    @media ${devices.laptop} {
      margin-top: -65px;
      font-size: 170px;
    }
  }
`;