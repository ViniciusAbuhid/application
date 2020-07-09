import React from 'react';
import styled from 'styled-components';
import Presentation from './components/Presentation';
import Cover from './components/Cover';
import Content from './components/Content';
import Background from './components/Background';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    font-family: 'Montserrat', sans-serif;
    border: 1px black solid;
`
const SpecialWrapper = styled.div`
  width: 100%
`

function App(props) {
  React.createRef()
  return (
    <PageWrapper>
      <Cover projectsInfo='#projects' contactInfo='#contact' />
      <Presentation />
      <Content />
      <Background />
      <SpecialWrapper id='projects'>
        <Portfolio />
      </SpecialWrapper>
      <SpecialWrapper id='contact'>
        <Contact />
      </SpecialWrapper>
      <Footer />
    </PageWrapper>
  );
}

export default App;
