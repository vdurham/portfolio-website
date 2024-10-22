// src/components/ProjectDetails.tsx
import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from '../GlobalStyles';
import { projectData } from './projectData';

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TopRow = styled.div`
  display: flex;
  gap: 2rem;
`;

const Image = styled.img`
  width: auto;
  height: auto;
  max-height: 300px;
  border-radius: 20px;
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProjectTitle = styled.h2`
  font-size: 2.4rem;
  color: #fff;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: #bbb;
  font-size: 1.3rem;
  text-align: left;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  color: #bbb;
  border: 1px solid #bbb;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1rem;
  white-space: nowrap;
`;

const AdditionalInfoRow = styled.div`
  color: #bbb;
  font-size: 1.2rem;
  padding: 1rem 0;
  text-align: left;
`;

const SubHeader = styled.h3`
  color: #fff;
  margin-bottom: 0.5rem;
  font-size: 2rem;
`;

const IconLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
  padding-top: 1rem;

  a {
    color: #fff;
    font-size: 2rem;
    text-decoration: none;
  }

  a:hover {
    color: #bbb;
  }
`;

interface ProjectDetailsProps {
  projectIndex: number;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ projectIndex }) => {
  const project = projectData[projectIndex];

  return (
    <ProjectContainer>
      {/* Top row: image + project title, description, tags */}
      <TopRow>
        <Image src={project.image} alt={project.title} />
        <InfoColumn>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <TagContainer>
            {project.languages.map((language, i) => (
              <Tag key={i}>{language}</Tag>
            ))}
          </TagContainer>
        </InfoColumn>
      </TopRow>

      {/* Additional project information */}
      <AdditionalInfoRow>
        {project.subheader1 && <SubHeader>{project.subheader1}</SubHeader>}
        {project.paragraph1 && <p>{project.paragraph1}</p>}
        {project.subheader2 && <SubHeader>{project.subheader2}</SubHeader>}
        {project.paragraph2 && <p>{project.paragraph2}</p>}
      </AdditionalInfoRow>

      {/* Links to GitHub and project */}
      <IconLinks>
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        )}
        {project.projectLink && (
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-external-link-alt"></i>
          </a>
        )}
      </IconLinks>
    </ProjectContainer>
  );
};

export default ProjectDetails;
