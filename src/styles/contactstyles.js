import styled from 'styled-components';

const blank = (val) => {
  if (val === true)
    return "17vh"
  else
    return "100%"
}

export const Option = styled.div `
  // border: 1px solid green;
  height: 100px;
  width: 100%;
  margin: 5px 30px;
  font-size: 1em;
  line-height: 1;
  letter-spacing: 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
`

export const Option2 = styled.a `
  // border: 1px solid green;
  height: 125px;
  width: 125px;
  margin: 30px;
  font-size: 1em;
  line-height: 1;
  letter-spacing: 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
`

export const Segment = styled.div `
  // border: 1px solid red;
  width: 100%;
  height: ${props => blank(props.blank)};
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const Segment2 = styled.div `
  // border: 1px solid red;
  height: ${props => blank(props.blank)};
  width: 80%;
  margin: 0 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: space-between;
`

export const Img = styled.img `
  // border: 1px solid yellow;
  height: 100px;
  width: 100px;
`