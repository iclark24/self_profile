import styled from 'styled-components';

const active = (val) => {
  if (val !== true)
    return "rgba(255, 255, 255, 0.3)"
  else
    return "rgba(255, 255, 255, 0)"
}

export const Menu = styled.div `
  height: 9%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: space-around;
  border-radius: 1.75vw 1.75vw 0 0;
  border: 2px solid gray;
  border-bottom: 0px;
  overflow: hidden;

`

export const P = styled.p `
  margin-top: 0.5vw !important;
`

export const Tab = styled.div `
  width: 33.33%;
  background: ${props => active(props.active)};
  height: 100%;
  text-align: center;
  font-size: 2vw;
  display: flex:
  justify-content: center;
  align-items: center;
  border-${props => props.border}: 1px solid gray;
  cursor: pointer;
  position: relative;
`

export const MMenu = styled.div `
  height: 9%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: space-around;
  // border-radius: 1.75vw 1.75vw 0 0;
  border: 2px solid gray;
  border-bottom: 0px;
  overflow: hidden;

`

export const MP = styled.p `
  margin-top: 6vw !important;
`

export const MTab = styled.div `
  width: 33.33%;
  background: ${props => active(props.active)};
  height: 100%;
  text-align: center;
  font-size: 4.5vw;
  display: flex:
  justify-content: center;
  align-items: center;
  border-${props => props.border}: 1px solid gray;
  cursor: pointer;
  position: relative;
`