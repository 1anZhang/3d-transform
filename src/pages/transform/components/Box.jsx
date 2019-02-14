import React from 'react'
import styled from 'styled-components'

class Cube extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      degX: 0,
    }
    this.timer = null
  }

  componentDidMount() {
    let { degX } = this.state;
    this.timer = setInterval(() => {
      degX = degX + 1 % 390
      this.setState({
        degX: degX
      })
    }, 100)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    this.timer = null
  }

  toggleCard = (e) => {
    this.setState((prev) => {
      return {
        toggle: !prev.toggle
      }
    })
  }

  render() {
    const { degX } = this.state;
    return (
      <Scene>
        <BoxWrapper degX={degX}>
          <Front>1</Front>
          <Back>2</Back>
          <Right>3</Right>
          <Left>4</Left>
          <Bottom>5</Bottom>
          <Top>6</Top>
        </BoxWrapper>
      </Scene>
    )
  }
}

const Scene = styled.div`
  width: 300px;
  height: 200px;
  perspective: 400px;
`

const BoxWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-90px) rotate3d(0, 1, 1, ${props => props.degX}deg);
`

const Face = styled.div`
  position: absolute;
  color: #FFF;
  text-align: center;
  font-weight: bold;
  font-size: 28px;
`

const Front = styled(Face)`
  width: 300px;
  height: 200px;
  line-height: 200px;
  transform: rotateY(0deg) translateZ(50px);
  background: rgba(79, 241, 74, 0.418);
  box-shadow: 0px 0px 80px 10px rgba(79, 241, 74, 0.418);
  border: 4px solid rgba(79, 241, 74, 0.418);
`

const Back = styled(Face)`
  width: 300px;
  height: 200px;
  line-height: 200px;
  transform: rotateY(180deg) translateZ(50px);
  background: rgba(238, 32, 17, 0.418);
  box-shadow: 0px 0px 80px 10px rgba(238, 32, 17, 0.418);
  border: 4px solid rgba(238, 32, 17, 0.418);
`

const Right = styled(Face)`
  width: 100px;
  height: 200px;
  left: 100px;
  line-height: 200px;
  transform: rotateY(90deg) translateZ(150px);
  background: rgba(238, 147, 10, 0.418);
  box-shadow: 0px 0px 80px 10px rgba(238, 147, 10, 0.418);
  border: 4px solid rgba(238, 147, 10, 0.418);
`

const Left = styled(Face)`
  width: 100px;
  height: 200px;
  left: 100px;
  line-height: 200px;
  transform: rotateY(-90deg) translateZ(150px);
  background: rgba(241, 238, 22, 0.418);
  box-shadow: 0px 0px 80px 10px rgba(241, 238, 22, 0.418);
  border: 4px solid rgba(241, 238, 22, 0.418);
`

const Bottom = styled(Face)`
  width: 300px;
  height: 100px;
  top: 50px;
  line-height: 100px;
  transform: rotateX(-90deg) translateZ(100px);
  background: rgba(0, 255, 255, 0.5);
  box-shadow: 0px 0px 80px 10px rgba(0, 255, 255, 0.5);
  border: 4px solid rgba(0, 255, 255, 0.5);
`

const Top = styled(Face)`
  width: 300px;
  height: 100px;
  top: 50px;
  line-height: 100px;
  transform: rotateX(90deg) translateZ(100px);
  background: rgba(179, 22, 241, 0.418);
  box-shadow: 0px 0px 80px 10px rgba(179, 22, 241, 0.418);
  border: 4px solid rgba(179, 22, 241, 0.418);
`

export default Cube
