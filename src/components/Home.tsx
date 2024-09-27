// src/components/Home.tsx
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem 0; /* Reduced padding */
  border-bottom: 1px solid #333;
`;

const SectionTitle = styled.h2`
  font-family: 'Big Shoulders Display', cursive;
  color: #fff;
  font-weight: 800; /* Extra bold */
  font-size: 2.5rem; /* Consistent size */
  margin-bottom: 1rem; /* Corrected margin */
  text-align: left;
`;

const Subtitle = styled.p`
  font-size: 1.6em;
  color: #888;
  text-align: left;
`;

const Home: React.FC = () => (
  <Section>
    <SectionTitle>About</SectionTitle>
    <Subtitle>
      I'm Virginia, a software engineer passionate leveraging technology to
      improve people's lives. I specialize in creating scalable systems and
      applying maching learning to solve complex problems.
    </Subtitle>
  </Section>
);

export default Home;
