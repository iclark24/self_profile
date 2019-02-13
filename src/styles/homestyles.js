import styled from 'styled-components';

const fontSize = (size) => {
  switch(size) {
    case 'large':
      return '4rem';
    case 'small':
      return '1rem';
    default:
      return '2rem';
  }
}

const grow = (full) => {
  switch(full) {
    case false:
      return '5em';
    case true:
      return '45vw';
    default:
      return '5em';
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

export const Ian = styled.h1`
  color: ${props => colors(props.grow)};
  font-size: 4em !important;
  cursor: pointer;
  z-index: 200;
  padding-top: 10px;
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

export const Segment = styled.div `
  border: 1px solid black;
  height: 15em;
  margin: 3em;
`

export const Bubble = styled.div`
  background-color: ${props => bcolors(props.grow)};
  width: ${props => grow(props.grow)};
  height: ${props => grow(props.grow)};
  color: ${props => colors(props.grow)};
  border: 2px solid black;
  border-radius: ${props => square(props.grow)};
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  align-items: center;
  transition: 1s ease-in-out;
`