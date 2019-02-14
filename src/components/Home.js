import React from "react"
import {Ian, Bubble, Content} from "../styles/homestyles"
import {Menu, Tab} from "../styles/tabstyles"
import {Segment} from "../styles/aboutstyles"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import About from "./About"
class Home extends React.Component {

  state = { 
    open: false,
    activeItem: 'about'
   }


  handleClick = (e) => {
    this.setState({ open: !this.state.open })
  }

  setAbout = (e) => {
    this.setState({ activeItem: "about" })
  }

  setProjects = (e) => {
    this.setState({ activeItem: "projects" })
  }

  setContact = (e) => {
    this.setState({ activeItem: "contact" })
  }

  renderContent = (open) => {
    const {activeItem} = this.state
    if (activeItem === "about") 
      return(
          <About/>
      )
    else if (activeItem === "projects")
      return(null)
    else
      return(null)
  }

  render() {
    const { open, activeItem } = this.state


    return(
      <>
            <Ian grow={open} fontSize='large' onClick={this.handleClick}>
              IC
            </Ian>
          <Bubble grow={open}>
            {open?
              <ReactCSSTransitionGroup
                transitionName="menu"
                transitionAppear={true}
                transitionAppearTimeout={10000}
                transitionEnter={false}
                transitionLeave={false}
              >
                <Menu visible={open}>
                  <Tab visible={open} name='about' border="right" active={activeItem === 'about'} onClick={this.setAbout}>About</Tab>
                  <Tab visible={open} name='projects' active={activeItem === 'projects'} onClick={this.setProjects}>Projects</Tab>
                  <Tab visible={open} name='contact' border="left" active={activeItem === 'contact'} onClick={this.setContact}>Contact</Tab>
                </Menu>
                <Content>
                  {this.renderContent(open)}
                </Content>
              </ReactCSSTransitionGroup>
            :
              <>
              </>
            }
          </Bubble>
        </>
    )
  }
}

export default Home;