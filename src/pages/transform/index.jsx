import React, { Component } from 'react';
import styled from 'styled-components'

import FlipCard from './components/FlipCard'
import SlideCard from './components/SlideCard'
import Cube from './components/Cube'
import Box from './components/Box'
import Particles from './components/Particles'

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <ParticlesWrapper>
          <Particles />          
        </ParticlesWrapper>
        <ContentWrapper>
          <FlipCard />
          <SlideCard />
          <Cube />
          <Box />
        </ContentWrapper>
      </AppWrapper>
    );
  }
}

const AppWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`

const ParticlesWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  background: #222;
`

export default App;
