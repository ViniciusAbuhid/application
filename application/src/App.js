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
`

function App() {
  return (
    <PageWrapper>
      <Cover/>
      <Presentation/>
      <Content/>
      <Background/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </PageWrapper>
  );
}

export default App;
