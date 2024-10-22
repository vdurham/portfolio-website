// projectData.ts
import ChestXRay from './chestxraycrop.jpg';
import MQTT from './mqtt.jpg';
import dv5Image from './dv5.jpg';
import Chatter from './chatter.jpg';
import SysArc from './sys-arc.jpg';

export const projectData = [
  {
    image: ChestXRay,
    title: 'Multi-Modal Healthcare VQA Model',
    description:
      'Extended M3AE model for visual question answering on radiological images.',
    languages: ['Python'],
    subheader1: 'Project Overview',
    paragraph1:
      'This project involves extending the M3AE model for healthcare applications. The goal is to provide precise visual answers from radiological images using multimodal AI approaches.',
    subheader2: 'Techniques Used',
    paragraph2:
      'Deep learning and medical image processing techniques were used to enhance diagnostic accuracy. This includes leveraging radiological data and applying visual question answering methods.',
    projectLink: 'https://example.com/healthcare-vqa',
    githubLink: 'https://github.com/username/healthcare-vqa'
  },
  {
    image: MQTT,
    title: 'Cloud-Based Machine Learning Pipeline',
    description:
      'ML model and data pipeline for IoT (Internet of Things) MQTT network communication data.',
    languages: ['Python', 'Spark', 'PostgreSQL', 'GCP'],
    subheader1: 'Deployment Details',
    paragraph1:
      'This project covers the deployment of machine learning models using a comprehensive data pipeline. It involves data ingestion, transformation, and real-time model serving using Google Cloud Platform.',
    githubLink: 'https://github.com/username/ml-deployment'
  },
  {
    image: dv5Image,
    title: 'daVinci5 Patient Cart Joint Motion Testing',
    description:
      "Kinematic motion scaling tests for Intuitive Surgical's newest robot, daVinci 5.",
    languages: ['Python', 'Matlab'],
    subheader1: 'Motion Analysis',
    paragraph1:
      'Using Python and Matlab, motion patterns were analyzed to ensure precise joint control. This improves the robotic system’s performance in real-time surgical procedures.'
  },
  {
    image: Chatter,
    title: 'Full-Stack Chat Web App',
    description:
      'A chatroom web app featuring authentication, chat, and friend-list functionality, hosted on Render.',
    languages: ['Typescript', 'MongoDB', 'Node.js'],
    subheader1: 'Frontend Development',
    paragraph1:
      'TypeScript was used for writing scalable and maintainable code. Axios was used for making AJAX requests to backend APIs, enabling dynamic data fetching.',
    subheader2: 'Backend Development',
    paragraph2:
      'Node.js with Express.js was used to build the server architecture with a focus on scalability. MongoDB served as the database for storing user and chat data.',
    projectLink: 'https://chatter-fe4t.onrender.com/',
    githubLink: 'https://github.com/vdurham/chatter'
  }
];
