import React from 'react';
import styled from 'styled-components';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import profile from '../../assets/img-progile1.png';
import techStack from '../../assets/tech-stack.png'

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
  padding: 0px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;

const Header = styled.section`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 40px;
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
    margin-right: 30px;
  }
`;


const TecnologySection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  img.react-reveal {
    width: 50vw;
    box-sizing: border-box;
    margin-left: -50px;
    margin-top: 30px;
    border-radius: 3px;
    z-index: 1;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
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
  font-weight: 300;
`;


const Image = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50%;
  height: 500px;
  width: 500px;
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  img {
    width: 600px;
    height: 600px;
  }
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
