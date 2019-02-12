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
      return '40vw';
    default:
      return '5em';
  }
}

export const Ian = styled.h1`
  color: black !important;
  font-size: 4em !important;
  cursor: pointer;
  `

export const Container = styled.div `
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  top: 75px;
  width: 5em;
  max-width: 40vw;
  height: 100vh;
  margin: 0 47%;
`

export const Bubble = styled.div`
  background-color: white !important;
  width: ${props => grow(props.grow)};
  height: ${props => grow(props.grow)};
  border: 2px solid black;
  border-radius: 100%;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  transition: 1s ease-in-out;

  
`