import React from 'react'
import styled from 'styled-components';
import WaveFooter from './Wave'

const Footer = () => {
  return (
    <Container>
      <FooterTop>
        <p>❣️ Made with love by Agustina Ruidiaz</p>
        <div>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/agusruidiaz/"
            rel="noreferrer"
          >
            LINKEDIN
          </a>
          <a target="_blank" href="https://github.com/agusruidiazgd" rel="noreferrer">
            GITHUB
          </a>
        </div>
      </FooterTop>
      <WaveFooter />
    </Container>
  );
}

export default Footer

const Container = styled.footer`
  box-sizing: border-box;
  border-top: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterTop = styled.div`
  padding: 0px 30px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  p {
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 14px;
    color: #262626;
  }
  a {
    text-decoration: none;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    color: #262626;
    margin-left: 20px;
  }
`;
