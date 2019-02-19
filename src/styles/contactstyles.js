import styled from 'styled-components';


export const Option = styled.div `
  // border: 1px solid green;
  font-size: 1.75vw;
  font-weight: bold;
  height: 3vw;
  width: auto;
  margin: .5vw 1vw;
  line-height: 1;
  letter-spacing: 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
`

export const Option2 = styled.a `
  // border: 1px solid green;
  height: 7vw;
  width: 7vw;
  margin: 1vw;
  font-size: 1.25vw;
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
  height: 20%;
`

export const Segment = styled.div `
  // border: 1px solid red;
  height: ${props => heights(props.position)};
  width: 95%;
  margin-left: 20px;
  margin-right: 20px;
  position: relative;
  ${props => margins(props.position)};
  font-size: 1.25vw;
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
  font-size: 1.25vw;
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
  height: 6vw;
  width: 6vw;
`

const heights = (position) => {
  switch(position) {
    case "top":
      return `35%`
    case "bottom":
      return `40%`
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