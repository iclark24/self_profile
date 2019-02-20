import styled from 'styled-components';

const grow = (full) => {
  switch(full) {
    case false:
      return '20vw';
    case true:
      return '100vw';
    default:
      return '20vw';
  }
}

const hgrow = (full) => {
  switch(full) {
    case false:
      return '20vw';
    case true:
      return '100vh';
    default:
      return '20vw';
  }
}

const square = (full) => {
  switch(full) {
    case false:
      return '100%';
    case true:
      return '0';
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


const glow = (val) => {
  if (val !== true)
    return `
    animation-name: glowing-border;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    `

}

export const MIan = styled.p`
  color: ${props => colors(props.grow)};
  position: absolute;
  font-size: 12vw;
  cursor: pointer;
  z-index: 200;
  // padding-top: 12vw;
  font-family: 'Monoton', cursive;
`

export const MContainer = styled.div `
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  width: 5em;
  max-width: 45vw;
  height: 100vh;
  margin: 0 47%;
  // border: 1px solid red;
`

export const MContent = styled.div `
  display: flex;
  height: 91%;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  // border: 1px solid cyan;
`

export const MBubble = styled.div`
  background-color: ${props => bcolors(props.grow)};
  width: ${props => grow(props.grow)};
  height: ${props => hgrow(props.grow)};
  color: ${props => colors(props.grow)};
  border: 2px solid black;
  border-radius: ${props => square(props.grow)};
  position: absolute;
  transition: 1s ease-in-out;
  overflow: hidden;
  z-index: 2;
  ${props => glow(props.grow)}

  @keyframes glowing-border {
    from {
      border: 3px solid #b29d72 ;
      
      
    }
    
    to {
      outline: none;
      border: 3px solid cyan;
      box-shadow: 1px 1px 10px cyan;
      
    }
  }
  
`