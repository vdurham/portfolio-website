// src/App.tsx
import React from 'react';
import styled from 'styled-components';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { GlobalStyles } from './GlobalStyles';

const AppWrapper = styled.div`
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Header = styled.header`
  padding: 2rem 0;
  border-bottom: 1px solid #333;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  color: #fff;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #888;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <Header>
          <Title>Virginia Choi-Durham</Title>
          <Subtitle>Software Developer | Machine Learning Engineer</Subtitle>
        </Header>
        <Home />
        <Projects />
        <Contact />
        <Footer />
      </AppWrapper>
    </>
  );
};

export default App;
