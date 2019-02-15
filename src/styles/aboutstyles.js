import styled from 'styled-components';

const position = (position) => {
  switch(position) {
    case "top":
      return "flex-end"
    case "bottom":
      return "flex-start"
    default:
      return "flex-start"
  }
}

const blank = (val) => {
  if (val === true)
    return "10vh"
  else
    return "15vh"
}

export const Segment = styled.div `
  // border: 1px solid red;
  height: ${props => blank(props.blank)};
  margin: 0 20px;
  font-size: 1.5em;
  line-height: 1;
  letter-spacing: 1px;
  display: flex;
  flex-direction: column;
  justify-content: ${props => position(props.position)};
`