import styled from 'styled-components';

const blank = (val) => {
  if (val === true)
    return "17vh"
  else
    return "100%"
}

export const Option = styled.a `
  border: 1px solid green;
  height: 300px;
  width: 175px;
  margin: 30px 30px;
  font-size: 1em;
  line-height: 1;
  letter-spacing: 1px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  cursor: pointer;
  color: white;
`

export const Segment = styled.div `
  border: 1px solid red;
  height: ${props => blank(props.blank)};
  margin: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Img = styled.img `
  height: 100px;
  width: 100px;
  margin: 20px;
  // border: 1px solid yellow;
`