import styled from 'styled-components';

const grow = (full) => {
  switch(full) {
    case false:
      return '7em';
    case true:
      return '45vw';
    default:
      return '7em';
  }
}

const square = (full) => {
  switch(full) {
    case false:
      return '100%';
    case true:
      return '5%';
    default:
      return "100%";
  }
}


const colors = (full) => {
  switch(full) {
    case false:
      return 'black';
    case true:
      return 'white';
    default:
      return "black";
  }
}

const bcolors = (full) => {
  switch(full) {
    case false:
      return 'white';
    case true:
      return 'black';
    default:
      return "white";
  }
}


const active = (val) => {
  if (val === true)
    return "rgba(255, 255, 255, 0.5)"
  else
    return "rgba(255, 255, 255, 0)"
}

export const Ian = styled.h1`
  color: ${props => colors(props.grow)};
  font-size: 4em !important;
  cursor: pointer;
  z-index: 200;
  padding-top: 20px;
  font-family: 'Monoton', cursive;

  `

export const Container = styled.div `
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  width: 5em;
  max-width: 45vw;
  height: 100vh;
  margin: 0 47%;
`

export const Content = styled.div `
  display: flex;
  height: 90%;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  // border: 1px solid cyan;
`

export const Bubble = styled.div`
  background-color: ${props => bcolors(props.grow)};
  width: ${props => grow(props.grow)};
  height: ${props => grow(props.grow)};
  color: ${props => colors(props.grow)};
  border: 2px solid black;
  border-radius: ${props => square(props.grow)};
  position: absolute;
  transition: 1s ease-in-out;
  overflow: hidden;
`