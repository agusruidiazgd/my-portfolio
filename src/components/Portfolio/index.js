import React, { useState } from 'react';
import PortfolioHeader from './PortfolioHeader'
import ProjectCard from '../../lib/ProjectCard'
import ProjectModal from './ProjectModal';
import styled from 'styled-components';
import { projects } from '../../constants/portfolio';


const Portfolio = () => {
  const [showModal, setShowModal]=useState(false)
  const [projectToShow, setProjectToShow]=useState(2)
  const scrollPos = window.scrollY + window.innerHeight/2;
  
  return (
    <section>
      {showModal && (
        <ProjectModal
          showModal={showModal}
          setShowModal={setShowModal}
          scrollPos={scrollPos}
          projectToShow={projectToShow}
        />
      )}
      <PortfolioHeader />
      <Wrapper>
        {projects.map((project) => (
          <ProjectCard
            key={`project-${project.id}`}
            setShowDetails={setShowModal}
            styleProject={project.style}
            image={project.imgUrl}
            title={project.title}
            subtitle={project.subtitle}
            year={project.year}
            company={project.company}
            chooseProject={() => setProjectToShow(project.id)}
          />
        ))}
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