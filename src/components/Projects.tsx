import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import dv5Image from './dv5.jpg';
import ChestXRay from './chestxraycrop.jpg';
import MQTT from './mqtt.jpg';
import SysArc from './sys-arc.jpg';
import Chatter from './chatter.jpg';

const Section = styled.section`
  padding: 2rem 0;
  border-bottom: 1px solid #333;
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
      background-color: rgba(0, 0, 0, 0.8); /* optional dimming background */
      z-index: 999;
    `}
`;

const ProjectCard = styled.div<{ isSelected: boolean }>`
  background-color: #1e1e1e;
  padding: 2rem;
  border: 1px solid #333;
  transition: transform 0.3s ease-in-out;
  text-decoration: none;
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  height: 680px;

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
`;

const ProjectDescription = styled.p`
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

const Projects: React.FC = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null);

  const projectData = [
    {
      image: ChestXRay,
      title: 'Multi-Modal Visual Question Answering for Healthcare',
      description:
        'Extended M3AE model for visual question answering on radiological images built with Python.',
      expandedDescription:
        'This project involves extending the M3AE model for healthcare applications. The goal is to provide precise visual answers from radiological images using multimodal AI approaches. Techniques include deep learning and medical image processing to enhance diagnostic accuracy.'
    },
    {
      image: MQTT,
      title: 'End-to-End Machine Learning Model Deployment',
      description:
        'Data pipeline and cloud-deployed machine learning model built with PostgreSQL, Spark, and GCP.',
      expandedDescription:
        'This project covers the deployment of machine learning models using a comprehensive data pipeline. It involves data ingestion, transformation, and real-time model serving using Google Cloud Platform. Technologies include PostgreSQL for data storage, Apache Spark for processing, and GCP for cloud deployment.'
    },
    {
      image: dv5Image,
      title: 'daVinci5 Patient Cart Joint Motion Testing',
      description:
        "Kinematic motion scaling tests for Intuitive Surgical's daVinci 5 robot built with Python and Matlab.",
      expandedDescription:
        'The focus of this project is on motion testing and scaling for the daVinci5 robotic system, used in surgical applications. Using Python and Matlab, motion patterns were analyzed to ensure precise joint control, improving the robotic system’s performance in real-time surgical procedures.'
    },
    {
      image: Chatter, // Replace with the appropriate image path
      title: 'Full-Stack, Web-Based Chat App',
      description:
        'A chatroom web app featuring authentication, chat, and add-friend functionality built with TypeScript, MongoDB, and React.',
      expandedDescription:
        'This chat app includes real-time messaging, user authentication, and friend-adding functionalities. It’s built with TypeScript on the frontend (React) and uses MongoDB for data storage. The app is designed to be scalable, with features like real-time chatrooms and secure authentication protocols.'
    },
    {
      image: SysArc,
      title: 'Industry-Standard, Fault-Tolerant Distributed System',
      description:
        'A reliable distributed system composed of servers, clients, fault detectors, and a replication manager using C++.',
      expandedDescription:
        'This distributed system ensures fault tolerance and reliability by using a replication manager, fault detectors, and servers that maintain consistency. C++ was used to implement high-performance features like fault detection and state replication.'
    }
  ];

  return (
    <Section>
      <Grid>
        {projectData.map((project, index) => (
          <ProjectCardContainer
            key={index}
            isSelected={selectedProjectIndex === index}
          >
            <ProjectCard
              isSelected={selectedProjectIndex === index}
              onClick={() => setSelectedProjectIndex(index)}
            >
              <Image src={project.image} alt={project.title} />
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>
                {selectedProjectIndex === index
                  ? project.expandedDescription
                  : project.description}
              </ProjectDescription>
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
