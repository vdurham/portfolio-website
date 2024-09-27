// src/components/Footer.tsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 2rem 0;
  border-top: 1px solid #333;
  text-align: center;
  background-color: #111;
`;

const FooterText = styled.p`
  color: #aaa;
`;

const Footer: React.FC = () => (
  <FooterContainer>
    <FooterText>© {new Date().getFullYear()} Virginia Choi-Durham. All rights reserved.</FooterText>
  </FooterContainer>
);

export default Footer;
