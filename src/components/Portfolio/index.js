import React from 'react'
import PortfolioHeader from './PortfolioHeader'
import ProjectCard from '../../lib/ProjectCard'
import styled from 'styled-components';

const Portfolio = () => {
  return (
    <section>
      <PortfolioHeader />
      <Wrapper>
        <ProjectCard width={'600px'} />
        <ProjectCard width={'400px'} />
        <ProjectCard width={'400px'} />
        <ProjectCard width={'600px'} />
      </Wrapper>
    </section>
  );
}

export default Portfolio

const Wrapper = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  flex-wrap: wrap;
`