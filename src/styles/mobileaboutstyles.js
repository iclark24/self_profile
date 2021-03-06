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

export const Segment = styled.div `
  // border: 1px solid red;
  height: ${props => heights(props.position)};
  margin-left: 20px;
  margin-right: 20px;
  position: relative;
  ${props => margins(props.position)};
  font-size: 4.5vw;
  line-height: 1;
  letter-spacing: 1px;
  display: flex;
  flex-direction: column;
  // justify-content: ${props => position(props.position)};
  overflow-y: scroll !important;
`

export const Blub = styled.div `
  // border: 1px solid green;
  width: 100%;
  height: 10%;
`

const heights = (position) => {
  switch(position) {
    case "top":
      return `37%`
    case "bottom":
      return `50%`
    default:
      return null
  }
}

const margins = (position) => {
  switch(position) {
    case "top":
      return `margin-top: 5%`
    case "bottom":
      return null
    default:
      return null
  }
}