import React from 'react'
import styled from 'styled-components'

class SlideCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: false
    }
  }

  toggleCard = (e) => {
    this.setState((prev) => {
      return {
        toggle: !prev.toggle
      }
    })
  }

  render() {
    const { toggle } = this.state;
    return (
      <Scene>
        <CardWrapper onClick={this.toggleCard} toggle={toggle}>
          <FrontCard>前面</FrontCard>
          <BackCard>背面</BackCard>
        </CardWrapper>
      </Scene>
    )
  }
}

const Scene = styled.div`
  width: 200px;
  height: 260px;
  padding: 10px;
  perspective: 600px;
`

const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 1s;
  cursor: pointer;
  transform-style: preserve-3d;
  transform-origin: center right;
  transform: ${props => props.toggle ? 'translateX(-100%) rotateY(180deg)' : ''};
`

const Card = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  line-height: 260px;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  backface-visibility: hidden;
  border-radius: 7px;
  // border: 1px solid rgba(255, 255, 255, 0.7);
`

const FrontCard = styled(Card)`
  background: rgba(97, 218, 251, 0.8);
  box-shadow: 0 0 150px 10px rgba(97, 218, 251, 0.8);
`

const BackCard = styled(Card)`
  background: rgba(173, 120, 220,0.8);
  box-shadow: 0 0 150px 10px rgba(173, 120, 220,0.8);

  transform: rotateY(-180deg);
`

export default SlideCard
