// src/components/Projects.tsx
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 5rem 0;
  text-align: left;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background-color: #1e1e1e;
  padding: 2rem;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectTitle = styled.h3`
  color: #fff;
  font-size: 1.5rem;
`;

const ProjectDescription = styled.p`
  color: #bbb;
`;

const Projects: React.FC = () => (
  <Section>
    <h2>Projects</h2>
    <Grid>
      <ProjectCard>
        <ProjectTitle>Project 1</ProjectTitle>
        <ProjectDescription>
          A brief description of your project, including technologies used.
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectTitle>Project 2</ProjectTitle>
        <ProjectDescription>
          A brief description of another project, including technologies used.
        </ProjectDescription>
      </ProjectCard>
    </Grid>
  </Section>
);

export default Projects;
