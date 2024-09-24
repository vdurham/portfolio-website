// src/components/Footer.tsx
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 2rem 0;
  text-align: center;
  background-color: #1e1e1e;
  border-top: 1px solid #333;
`;

const FooterText = styled.p`
  color: #aaa;
`;

const Footer: React.FC = () => (
  <FooterWrapper>
    <FooterText>© {new Date().getFullYear()} Virginia Choi-Durham. All Rights Reserved.</FooterText>
  </FooterWrapper>
);

export default Footer;
