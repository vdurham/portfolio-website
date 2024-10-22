import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import dv5Image from './dv5.jpg';
import ChestXRay from './chestxraycrop.jpg';
import MQTT from './mqtt.jpg';
import SysArc from './sys-arc.jpg';
import Chatter from './chatter.jpg';
import { projectData } from './projectData';
import '../index.css';
import ProjectDetails from './ProjectDetails';

const Section = styled.section`
  padding: 2rem 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  gap: 2rem;
`;

const ProjectCardContainer = styled.div<{ isSelected: boolean }>`
  ${({ isSelected }) =>
    isSelected &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 999;
    `}
`;

const ProjectCard = styled.div<{ isSelected: boolean }>`
  background-color: #1e1e1e;
  padding: 2rem 2rem 5.6rem 2rem;
  transition: transform 0.3s ease-in-out;
  position: relative;
  overflow-y: auto;
  // height: 570px;
  border-radius: 30px;

  ${({ isSelected }) =>
    isSelected &&
    css`
      width: 85%;
      height: 85%;
      transform: none;
      padding: 4rem;
      margin: 2rem;
    `}

  &:hover {
    ${({ isSelected }) =>
      !isSelected &&
      css`
        transform: translateY(-10px);
      `}
  }
`;

const ProjectTitle = styled.h3`
  color: #fff;
  font-size: 2.5rem;
  margin: 0.5rem 0;
`;

const ProjectDescription = styled.div`
  color: #bbb;
  font-size: 1.2rem;
  text-align: left;
`;

const Image = styled.img`
  width: auto;
  max-width: 100%;
  max-height: 300px;
  height: auto;
  margin-bottom: 0.5rem;
  border-radius: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #ccc;
  }
`;

const TagContainer = styled.div`
  position: absolute;
  bottom: 2rem; /* Align the tags at the bottom of the card */
  left: 2rem;
  right: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-top: 1rem;
`;

const Tag = styled.span`
  color: #bbb;
  border: 1px solid #bbb;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1rem;
  cursor: default;
  white-space: nowrap;
`;

const Projects: React.FC = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null);

  return (
    <Section>
      <Grid>
        <div className="project-title">Projects</div>
        {projectData.map((project, index) => (
          <ProjectCardContainer
            key={index}
            isSelected={selectedProjectIndex === index}
          >
            <ProjectCard
              isSelected={selectedProjectIndex === index}
              onClick={() => setSelectedProjectIndex(index)}
            >
              {selectedProjectIndex === index ? (
                <ProjectDetails projectIndex={index} />
              ) : (
                <>
                  <Image src={project.image} alt={project.title} />
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>

                  <TagContainer>
                    {project.languages.map((language, i) => (
                      <Tag key={i}>{language}</Tag>
                    ))}
                  </TagContainer>
                </>
              )}

              {selectedProjectIndex === index && (
                <CloseButton
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProjectIndex(null);
                  }}
                >
                  ✖
                </CloseButton>
              )}
            </ProjectCard>
          </ProjectCardContainer>
        ))}
      </Grid>
    </Section>
  );
};

export default Projects;
