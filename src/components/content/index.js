import React from 'react';
import { Container } from './styles';
import About from './about';
import Home from './home';
import Technologies from './technologies';
import Projects from './projects';
import Contact from './contact';

export default function Content({ theme, toggleTheme, device }) {
  return (
    <Container>
      <Home theme={theme} toggleTheme={toggleTheme} device={device} />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </Container>
  );
}
