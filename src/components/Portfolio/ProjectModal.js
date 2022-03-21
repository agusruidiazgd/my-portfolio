import React from 'react'
import Modal from '../../lib/Modal';
import styled from 'styled-components';
import { projects } from '../../constants/portfolio';


const ProjectModal = ({
  showModal,
  setShowModal,
  scrollPos,
  projectToShow,
}) => {
    const showProjectDetails = () =>
      projects.filter((project) => project.id === projectToShow);
    let project = showProjectDetails();
    console.log(project[0].images.slice(0, 2));

  return (
    <Modal
      show={showModal}
      handleClose={() => setShowModal(false)}
      scrollPos={scrollPos}
    >
      <ProjectDetails>
        <ImgWrapper width="50%">
          {project[0].images.slice(0, 2).map((image, index) => (
            <img
              key={`img-project-${index}`}
              class="img-1"
              src={image}
              alt="Profile"
            />
          ))}
        </ImgWrapper>
        <Details>
          <Title>{project[0].title}</Title>
          <TextCompany>{project[0].company}</TextCompany>
          <Text>{project[0].description}</Text>
          <Subtitle>Technologies:</Subtitle>
          <Text>{project[0].technologies}</Text>
          <LinkProject href={project[0].link}>Link</LinkProject>
        </Details>
        <ImgWrapper width="100%">
          {project[0].images.slice(2, 4).map((image, index) => (
            <img
              key={`img-project-${index}`}
              class="img-2"
              src={image}
              alt="Profile"
            />
          ))}
        </ImgWrapper>
        <ImgWrapper width="50%">
          {project[0].images.slice(4, 5).map((image, index) => (
            <img
              key={`img-project-${index}`}
              class="img-1"
              src={image}
              alt="Profile"
            />
          ))}
        </ImgWrapper>
        <ImgWrapper width="50%">
          {project[0].images.slice(5, 6).map((image, index) => (
            <img
              key={`img-project-${index}`}
              class="img-1"
              src={image}
              alt="Profile"
            />
          ))}
        </ImgWrapper>
      </ProjectDetails>
    </Modal>
  );
};

export default ProjectModal

const ProjectDetails = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap:wrap;
  .img-1 {
    width: 40vw;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    margin: 10px;
  }
  .img-2 {
    width: 100%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    margin: 10px;
  }
`;

const ImgWrapper = styled.div`
  width: ${({width})=> width};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Details = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 90px;
`;

const Title = styled.h2`
  position: relative;
  color: #262626;
  font-family: 'Frank Ruhl Libre', serif;
  font-size: 56px;
  font-weight: 900;
  text-align: left;
  margin: 0px;
  padding: 5px 0px;
`;

const TextCompany = styled.p`
  color: #262626;
  text-transform: uppercase;
  text-align: center;
  line-height: 2;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.15rem;
`;

const Text = styled.p`
  color: #7f7f7f;
  text-align: left;
  line-height: 2;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 300;
`;

const LinkProject = styled.a`
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.1rem;
  text-decoration: none;
  width: 150px;
  box-sizing: border-box;
  margin-top: 30px; 
  padding: 5px 50px;
  border-radius: 3px;
  border: 1px solid #ee0b72;
  cursor: pointer;
`;

const Subtitle = styled.p`
  color: #262626;
  text-align: left;
  text-transform: uppercase;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  letter-spacing: 0.1rem;
  padding: 5px 0px;
`;