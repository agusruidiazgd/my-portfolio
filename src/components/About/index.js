import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ImageProfile } from '../../assets/ultimo.svg';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

const About = () => {
  const refRef = useRef(null);

  const [show, doShow] = useState({
    itOne: false,

    itTwo: false,

    itThree: false,
  });

  const onScroll = () => {
    const topPos = refRef.current.getBoundingClientRect().top;
    const scrollPos = window.scrollY + window.innerHeight;

    if (topPos < scrollPos) {
      doShow({ ...show, itOne: true, itTwo: true });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <MainContainer>
      <Header>
        <div class="text-container">
          <div class="title-container">
            <Title>Agustina Nahir Ruidiaz</Title>
            <SubTitle>Fan of animations and usability.</SubTitle>
          </div>
          <Fade bottom>
            <Text>
              Soy una desarrolladora frontend Argentina que actualmente estoy
              viviendo en España. Me apasionan los sitios con diseños
              vanguardistas o coloridos y proyectos relacionados con la salud y
              bienestar.
            </Text>
            <Text>
              En mi tiempo libre me gusta viajar, conocer lugares nuevos y
              aprender nuevas tecnologias.
            </Text>
            <Text>
              Trabaje en proyectos de plataformas para laboratorios,
              telemedicina y NFT.
            </Text>
          </Fade>
        </div>

        <div class="profile">
          <Image>
            <ImageProfile width="600" height="600" />
          </Image>
        </div>
      </Header>

      <TecnologySection>
        <Slide left>
          <TechnologyCard></TechnologyCard>
        </Slide>
        <Slide right>
          <ImageTechnology urlImage="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2710&q=80"/>
    
        </Slide>
      </TecnologySection>
    </MainContainer>
  );
};

export default About;

const MainContainer = styled.main`
  padding: 30px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;

const Header = styled.section`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 80px;
  .text-container {
    height: 100vh;
    width: 40vw;
  }
  .profile {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
    width: 40vw;
  }
`;

const ImageTechnology = styled.div`
background-image: url(${({ urlImage }) => urlImage});
  background-position: bottom; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  box-sizing: border-box;
  margin-left: -100px;
  margin-top: 30px;
  border-radius: 3px;
  height: 600px;
  width: 60vw;
  background-color: #262626;
  background-blend-mode: screen;
  z-index:-1;
`;

const TecnologySection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  padding: 30px 30px;
  display: flex;
  position: relative;
  color: #262626;
  font-family: 'Frank Ruhl Libre', serif;
  font-size: 56px;
  font-weight: 900;
  text-align: left;
  margin: 0px;
  padding: 5px 0px;
`;

const SubTitle = styled.h2`
  padding: 30px 30px;
  display: flex;
  position: relative;
  color: #262626;
  font-family: 'Frank Ruhl Libre', serif;
  font-size: 36px;
  font-weight: 900;
  text-align: left;
  margin: 0px;
  padding: 5px 0px;
`;

const Text = styled.p`
  text-align: left;
  line-height: 2;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
`;


const Image = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50%;
  height: 500px;
  width: 500px;
  overflow: hidden;
`;

const TechnologyCard = styled.div`

    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    transition: all 2s;
    box-sizing: border-box;
    padding: 10px 30px;
    width: 40vw;
    background-color: #333399;
    height: 400px;
    border-radius: 3px;
    z-index: 2;
`;
