// src/components/Home.tsx
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 5rem 0;
  text-align: left;
`;

const AboutText = styled.p`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #bbb;
`;

const Home: React.FC = () => (
  <Section>
    <h2>About Me</h2>
    <AboutText>
      Hi, I'm Virginia Durham, a software engineer passionate about building 
      cutting-edge applications with modern technologies. I specialize in 
      creating user-centric, performant, and scalable solutions using TypeScript, 
      React, and Python. Let's collaborate on something amazing!
    </AboutText>
  </Section>
);

export default Home;
