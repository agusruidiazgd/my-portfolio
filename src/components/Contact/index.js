import React from 'react'
import styled from 'styled-components';
import { devices } from '../../constants/devices.js';
import resume from '../../assets/resume/CV_Agustina _Rudiaz.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  regular,
} from '@fortawesome/fontawesome-svg-core/import.macro'; 
import { ReactComponent as GithubIcon } from '../../assets/icons/github-alt-brands.svg';
import { ReactComponent as Linkedin } from '../../assets/icons/linkedin-brands.svg';
import { ReactComponent as ContactImage } from '../../assets/contact-img.svg';
import Fade from 'react-reveal/Fade';

const Contact = () => {
  return (
    <MainContainer>
      <div>
        <Fade top>
          <ThinTitle>Resume</ThinTitle>
          <Email color={'#ee0b72'}>
            <a href={resume} download="AgusRuidiazCV">
              <FontAwesomeIcon
                className="file-icon"
                icon={regular('floppy-disk')}
              />
              Download resume
            </a>
          </Email>
        </Fade>

        <ContactImage className="image" />
      </div>
      <div>
        <Fade top>
          <ThinTitle>Email</ThinTitle>
          <Email color={'#ee0b72'}>
            <a
              rel="noreferrer"
              href="mailto:agusruidiaz@hotmail.com?subject=Hello!"
              target="_blank"
            >
              <FontAwesomeIcon
                className="file-icon"
                icon={regular('paper-plane')}
              />
              agusruidiaz@hotmail.com
            </a>
          </Email>
          <ThinTitle>github</ThinTitle>
          <Email color={'rgba(255, 105, 0, 1)'}>
            <a
              rel="noreferrer"
              href="https://github.com/agusruidiazgd"
              target="_blank"
            >
              <GithubIcon className="icong" />
              /agusruidiazgd
            </a>
          </Email>
          <ThinTitle>Linkedin</ThinTitle>
          <Email color={'rgba(255, 105, 0, 1)'}>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/agusruidiaz/"
              target="_blank"
            >
              <Linkedin className="icong" />
              /agusruidiaz
            </a>
          </Email>
        </Fade>
      </div>
    </MainContainer>
  );
}

export default Contact;

const MainContainer = styled.main`
  padding: 0px 20px 60px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  height: auto;
  flex-direction: column;
  @media ${devices.tablet} {
    flex-direction: row;
  }
  @media ${devices.laptop} {
    padding: 0px 60px 60px;
  }
  div {
    width: 90vw;
    display: flex;
    flex-direction: column;
    @media ${devices.tablet} {
    }
    @media ${devices.laptop} {
      width: 40vw;
    }
  }
  .image {
    margin-top: 0px;
    width: 80vw;
    height: 60vh;
    @media ${devices.tablet} {
      width: 50vw;
      height: 60vh;
    }
    @media ${devices.laptop} {
      width: 30vw;
      margin-top: 20px;
    }
  }
`;

const ThinTitle = styled.p`
  color: #262626;
  text-transform: uppercase;
  text-align: left;
  line-height: 2;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.15rem;
`;


const Email = styled.h2`
  padding: 30px 30px;
  display: flex;
  font-family: 'Frank Ruhl Libre', serif;
  font-size: 22px;
  font-weight: 400;
  text-align: center;
  margin: 0px;
  padding: 5px 0px;
  @media ${devices.tablet} {
    font-size: 20px;
  }
  @media ${devices.laptop} {
    font-size: 24px;
    padding: 30px 30px;
  }
  a {
    text-decoration: none;
    color: #262626;
    cursor: pointer;
    position: relative;
    transition: all 0.5s;
    .file-icon {
      color: transparent;
      padding: 0px 6px 5px 6px;
      font-size: 20px;
    }
    .icong {
      fill: transparent;
      padding: 0px 6px;
      width: 25px;
    }
    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      content: '';
      background-color: ${({ color }) => color};
      width: 100%;
      height: 2%;
      transition: all 0.5s;
      transform-origin: bottom;
      z-index: -1;
    }
    &:hover:after {
      height: 100%;
    }
    &:hover:.icong {
      fill: #ffffff;
    }
    &:hover,
    .file-icon,
    .icong {
      color: #ffffff;
      fill: #ffffff;
    }
  }
  @media ${devices.tablet} {
    font-size: 26px;
  }
  @media ${devices.laptop} {
    font-size: 36px;
  }
`;