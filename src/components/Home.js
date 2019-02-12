import React from "react"
import {Ian, Bubble} from "../styles/homestyles"

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
        <Bubble>
        <Ian fontSize='large' onClick={this.handleClick}>
          IC
        </Ian>
      </Bubble>
      )
    else
      return(
        <Bubble grow={true}>
        <Ian fontSize='large' onClick={this.handleClick}>
          IC
        </Ian>
      </Bubble>
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