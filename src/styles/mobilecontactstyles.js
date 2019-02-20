import styled from 'styled-components';


export const Option = styled.div `
  // border: 1px solid green;
  font-size: 4.5vw;
  font-weight: bold;
  height: 3vw;
  width: auto;
  margin: 3vw 1vw;
  line-height: 1;
  letter-spacing: 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
`

export const Option2 = styled.a `
  // border: 1px solid green;
  height: 23vw;
  width: 23vw;
  margin: 3vw;
  font-size: 4.5vw;
  line-height: 1;
  letter-spacing: 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
`

export const Blub = styled.div `
  // border: 1px solid green;
  width: 100%;
  height: 10%;
`

export const Segment = styled.div `
  // border: 1px solid red;
  height: ${props => heights(props.position)};
  width: 95%;
  margin-left: 20px;
  margin-right: 20px;
  position: relative;
  ${props => margins(props.position)};
  font-size: 4.5vw;
  line-height: 1;
  letter-spacing: 1px;
  display: flex;
  flex-direction: column;
  // overflow-y: scroll !important;
`

export const Segment2 = styled.div `
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
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: space-between;
`

export const Img = styled.img `
  // border: 1px solid yellow;
  height: 20vw;
  width: 20vw;
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