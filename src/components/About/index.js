import React from 'react';
import styled from 'styled-components';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import profile from '../../assets/img-progile1.png';
import techStack from '../../assets/tech-stack.png'
import { devices } from '../../constants/devices.js';

const About = () => {

  return (
    <MainContainer>
      <Header>
        <div className="profile">
          <Fade top>
            <Image>
              {/* <ImageProfile width="600" height="600" /> */}
              <img src={profile} alt="profile-agus" />
            </Image>
          </Fade>
        </div>

        <div className="text-container">
          <div className="title-container">
            <Fade top>
              <Title>Agustina Nahir Ruidiaz</Title>
              <SubTitle>Fan of animations and usability.</SubTitle>
            </Fade>
          </div>
          <Fade bottom>
            <Text>
              Hi there! <br/> I’m Agustina a Front End engineer originally from
              Argentina (missing the steaks), avid traveler and geek (MCU and
              Anime are my cup of tea)
            </Text>
            <Text>
              As a developer I’m passionate about creating intuitive,
              avant-garde and colorful designs while being a “forever student”
              of new technologies and cultures. I love working in health/well
              being related projects in order to create a positive impact in our
              society.
            </Text>
            <Text>
              Feel free to reach out at **agusruidiaz@hotmail.com** to connect
              and start building that dream landing/design!
            </Text>
          </Fade>
        </div>
      </Header>

      <TecnologySection>
        <Slide left>
          <TechnologyCard></TechnologyCard>
        </Slide>
        <Slide right>
          {/* <ImageTechnology urlImage={techStack} /> */}
          <img src={techStack} className="tech-stack" alt="tech-stack" />
        </Slide>
      </TecnologySection>
    </MainContainer>
  );
};

export default About;

const MainContainer = styled.main`
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;

const Header = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 40px;
  .text-container {
    width: 90vw;
    @media ${devices.laptop} {
      height: 100vh;
      height: 100vh;
      width: 40vw;
    }
  }
  .profile {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40vh;
    width: 90vw;

    @media ${devices.tablet} {
      height: 40vh;
    }
    @media ${devices.laptop} {
      margin-right: 30px;
      width: 40vw;
      height: 80vh;
    }
  }
  @media ${devices.laptop} {
    flex-direction: row;
  }
`;


const TecnologySection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 30px;
  @media ${devices.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
  @media ${devices.laptop} {
  }
  img.react-reveal {
    width: 80vw;
    box-sizing: border-box;
    margin-top: -90px;
    margin-left: 30px;
    border-radius: 3px;
    z-index: 1;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    @media ${devices.tablet} {
      margin-top: 30px;
      margin-left: -50px;
      width: 50vw;
    }
    @media ${devices.laptop} {
    }
  }
`;

const Title = styled.h2`
  padding: 30px 30px;
  display: flex;
  position: relative;
  color: #262626;
  font-family: 'Frank Ruhl Libre', serif;
  font-size: 36px;
  font-weight: 900;
  text-align: left;
  margin: 0px;
  padding: 3px 0px;
  @media ${devices.tablet} {
    font-size: 48px;
  }
  @media ${devices.laptop} {
    font-size: 56px;
  }
`;

const SubTitle = styled.h2`
  padding: 30px 30px;
  display: flex;
  position: relative;
  color: #262626;
  font-family: 'Frank Ruhl Libre', serif;
  font-size: 24px;
  font-weight: 700;
  text-align: left;
  margin: 0px;
  padding: 3px 0px;
  @media ${devices.tablet} {
    padding: 5px 0px;
    font-weight: 900;
    font-size: 28px;
  }
  @media ${devices.laptop} {
    font-size: 36px;
  }
`;

const Text = styled.p`
  text-align: left;
  line-height: 2;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 300;
  @media ${devices.tablet} {
    font-size: 18px;
  }
  @media ${devices.laptop} {
    font-size: 18px;
  }
`;


const Image = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50%;
  height: 250px;
  width: 250px;
  @media ${devices.tablet} {
    height: 350px;
    width: 350px;
  }
  @media ${devices.laptop} {
    height: 500px;
    width: 500px;
  }
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  img {
    height: 300px;
    width: 300px;
    @media ${devices.tablet} {
      height: 400px;
      width: 400px;
    }
    @media ${devices.laptop} {
      height: 550px;
      width: 550px;
    }
  }
`;

const TechnologyCard = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  transition: all 2s;
  box-sizing: border-box;
  padding: 10px 30px;
  width: 80vw;
  background-color: #333399;
  height: 200px;
  border-radius: 3px;
  z-index: 2;
  @media ${devices.tablet} {
    width: 40vw;
    height: 250px;
  }
  @media ${devices.tablet} {
    width: 40vw;
    height: 400px;
  }
`;
