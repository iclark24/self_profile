import styled from 'styled-components';

const grow = (full) => {
  switch(full) {
    case false:
      return '5vw';
    case true:
      return '45vw';
    default:
      return '5vw';
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

const glow = (val) => {
  if (val !== true)
    return `
    animation-name: glowing-border;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    `

}

export const Ian = styled.p`
  color: ${props => colors(props.grow)};
  font-size: 3vw;
  cursor: pointer;
  z-index: 200;
  padding-top: 3vw;
  font-family: 'Monoton', cursive;
  `

export const Container2 = styled.div `
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  width: 1px;
  max-width: 100vw;
  height: 1px;
  // margin: 0 47%;
  // border: 1px solid red;
`
export const Container = styled.div `
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  // margin: 0 47%;
  // border: 1px solid blue;
`

export const Content = styled.div `
  display: flex;
  height: 82%;
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