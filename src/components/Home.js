import React from "react"
import {Ian, Bubble, Content} from "../styles/homestyles"
import {MIan, MBubble, MContent} from "../styles/mobilehomestyles"
import {Menu, Tab, MTab, MMenu, MP, P} from "../styles/tabstyles"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Projects from "../components/Projects"
import About from "./About"
import Contacts from "./Contacts"
import {isMobile,} from "react-device-detect";
import MProjects from "../components/MProjects"
import MAbout from "./MAbout"
import MContacts from "./MContact"



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

    if (isMobile) {

      if (activeItem === "about") 
      return(
        <MAbout/>
        )
        else if (activeItem === "projects")
        return(
          <MProjects/>
          )
          else
          return(
            <MContacts/>
            )
          }
    else {
      if (activeItem === "about") 
      return(
        <About/>
        )
        else if (activeItem === "projects")
        return(
          <Projects/>
          )
          else
          return(
            <Contacts/>
            )
          }
    }

  renderview = () =>{
    const { open, activeItem } = this.state

    if (isMobile) {
      return (
        <>
          <MIan grow={open} fontSize='large' onClick={this.handleClick}>
            IC
          </MIan>
          <MBubble grow={open}>
            {open?
              <ReactCSSTransitionGroup
                transitionName="menu"
                transitionAppear={true}
                transitionAppearTimeout={10000}
                transitionEnter={false}
                transitionLeave={false}
              >
                <MMenu visible={open}>
                  <MTab visible={open} name='about' border="right" active={activeItem === 'about'} onClick={this.setAbout}>
                    <MP>About</MP>
                  </MTab>
                  <MTab visible={open} name='projects' active={activeItem === 'projects'} onClick={this.setProjects}>
                    <MP>Projects</MP>
                  </MTab>
                  <MTab visible={open} name='contact' border="left" active={activeItem === 'contact'} onClick={this.setContact}>
                    <MP>Contact</MP>
                  </MTab>
                </MMenu>
                <MContent>
                  {this.renderContent(open)}
                </MContent>
              </ReactCSSTransitionGroup>
            :
              <>
              </>
            }
          </MBubble>
        </>
      )
    }
    else {
    return (
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
                <Tab visible={open} name='about' border="right" active={activeItem === 'about'} onClick={this.setAbout}>
                  <P>About</P>
                </Tab>
                <Tab visible={open} name='projects' active={activeItem === 'projects'} onClick={this.setProjects}>
                  <P>Projects</P>
                </Tab>
                <Tab visible={open} name='contact' border="left" active={activeItem === 'contact'} onClick={this.setContact}>
                  <P>Contact</P>
                </Tab>
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

  render() {
    return(
      <>
        {this.renderview()}    
      </>
    )
  }
}

export default Home;