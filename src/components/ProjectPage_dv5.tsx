// ProjectDetail.tsx
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import dv5Image from './dv5.jpg';
import ChestXRay from './chestxraycrop.jpg';
import MQTT from './mqtt.jpg';

const FullScreenWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100vh; // Changed to full height for full screen
  background-color: #1e1e1e;
  padding: 2rem;
  color: #fff;
`;

const ProjectTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const ProjectDetails = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  text-align: left;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const projectsData = {
  'multi-modal-vqa': {
    title: 'Multi-Modal Visual Question Answering for Healthcare',
    description: 'Extended M3AE model for visual question answering on radiological images built with Python.',
    image: ChestXRay,
  },
  'mqtt-deployment': {
    title: 'End-to-End Machine Learning Model Deployment',
    description: 'Data pipeline and cloud-deployed machine learning model built with PostgreSQL, Spark, and GCP.',
    image: MQTT,
  },
  'davinci-motion-tests': {
    title: 'daVinci5 Patient Cart Joint Motion Testing',
    description: 'Kinematic motion scaling tests for Intuitive Surgical\'s daVinci 5 robot built with Python and Matlab.',
    image: dv5Image,
  },
  'chat-app': {
    title: 'Full-Stack, Web-Based Chat App',
    description: 'A chatroom web app featuring authentication, chat, and add-friend functionality built with TypeScript, MongoDB, and React.',
    image: 'path_to_your_image.jpg',
  },
  'distributed-system': {
    title: 'Fault-Tolerant Distributed System',
    description: 'A chatroom web app featuring authentication, chat, and add-friend functionality built with TypeScript, MongoDB, and React.',
    image: 'path_to_your_image.jpg',
  },
};

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectsData[projectId as keyof typeof projectsData];
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.focus(); // Focus on the title when the component mounts
    }
  }, []);

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <FullScreenWrapper
      initial={{ opacity: 0, scale: 0.5 }}  // Start from smaller scale
      animate={{ opacity: 1, scale: 1 }}     // Animate to full scale
      exit={{ opacity: 0, scale: 0.5 }}       // Exit back to smaller scale
      transition={{ duration: 0.3 }}
    >
      <ProjectTitle tabIndex={0} ref={titleRef}>{project.title}</ProjectTitle>
      <Image src={project.image} alt={project.title} />
      <ProjectDetails>{project.description}</ProjectDetails>
    </FullScreenWrapper>
  );
};

export default ProjectDetail;
