// src/components/Contact.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 5rem 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid #333;
  background-color: #222;
  color: #fff;
  border-radius: 4px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid #333;
  background-color: #222;
  color: #fff;
  border-radius: 4px;
  font-size: 1rem;
  height: 150px;
`;

const Button = styled.button`
  padding: 1rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005bb5;
  }
`;

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    // Add form submission logic here
  };

  return (
    <Section>
      <h2>Contact Me</h2>
      <Form onSubmit={handleSubmit}>
        <Input 
          type="text" 
          placeholder="Your Name" 
          value={form.name} 
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <Input 
          type="email" 
          placeholder="Your Email" 
          value={form.email} 
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <Textarea 
          placeholder="Your Message" 
          value={form.message} 
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <Button type="submit">Send Message</Button>
      </Form>
    </Section>
  );
};

export default Contact;
