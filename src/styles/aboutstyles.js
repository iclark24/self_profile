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

const visible = (visible) => {
  if (visible === true)
    return "visible"
  else
    return "hidden"
}

const viewable = (visible) => {
  if (visible === true)
    return "rgba(255, 255, 255, 1)"
  else
    return "rgba(255, 255, 255, 0)"
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