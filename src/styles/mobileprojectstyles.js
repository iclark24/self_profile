import styled from 'styled-components';

const blank = (val) => {
  if (val === true)
    return "17vh"
  else
    return "100%"
}

export const Option = styled.a `
  // border: 1px solid green;
  height: 100% !important;
  // width: 20vw;
  margin: 0 4vw;
  font-size: 3vw;
  // line-height: 1;
  letter-spacing: 1px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  cursor: pointer;
  color: white;
  text-align: center;
  // overflow-y: scroll;
`

export const Segment = styled.div `
  // border: 1px solid red;
  height: ${props => heights(props.position)};
  margin-left: 20px;
  margin-right: 20px;
  position: relative;
  ${props => margins(props.position)};
  font-size: 1.25vw;
  line-height: 1;
  letter-spacing: 1px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: space-around;
  overflow-y: scroll !important;
`
  
export const Blub = styled.div `
  // border: 1px solid green;
  width: 100%;
  height: 10%;
`

export const Img = styled.img `
  // border: 1px solid yellow;
  height: 20vw;
  width: 20vw;
  align-self: center;
  margin-bottom: 10px;
  border-radius: 20px;
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