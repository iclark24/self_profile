import React from "react"
import {Ian, Bubble, Segment} from "../styles/homestyles"
import {Reveal} from "semantic-ui-react"

class Home extends React.Component {

  state = { 
    open: false,

   }


  handleClick = (e, titleProps) => {
    this.setState({ open: !this.state.open })
  }

  renderContainer = (open) => {
    if (open === false)
      return(
        <>
            <Ian fontSize='large' onClick={this.handleClick}>
              IC
            </Ian>
          <Bubble>
          </Bubble>
        </>
      )
    else
      return(
        <>
          <Ian grow fontSize='large' onClick={this.handleClick}>
            IC
          </Ian>
          <Bubble grow >
              <Segment>
                Hi my name is Ian. aoaseif aosdifwa saoidfj oaisf oasodfho oaisdf oaisdfoao aosifh oaisdf oaisdjf
              </Segment>
              <Segment>
                Hi my name is Ian. aoaseif aosdifwa saoidfj oaisf oasodfho oaisdf oaisdfoao aosifh oaisdf oaisdjf
              </Segment>
          </Bubble>
        </>
      )
  }

  render() {
    const { open } = this.state

    return(
      <>
      {this.renderContainer(open)}
      </>
    )
  }
}

export default Home;