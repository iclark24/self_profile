import React from "react"
import {Segment, Accordion, Icon} from "semantic-ui-react"

class Home extends React.Component {

  state = { activeIndex: "" }


  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return(
      <Segment inverted textAlign="justify">
        <Accordion inverted>

          <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
            <h1>
              Links
              <Icon name='dropdown'/>
            </h1>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <Icon size="huge" name="mail"/><br/><br/>
            <Icon size="huge" name="github"/><br/><br/>
            <Icon size="huge" name="linkedin"/><br/><br/>
          </Accordion.Content>

          <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
            <h1>
              Location
              <Icon name='dropdown'/>
            </h1>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <h1 class="desc">
              Salt Lake City, UT
            </h1>
          </Accordion.Content>

          <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <h1>
            Contact
            <Icon name='dropdown'/>
          </h1>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <h1 class="desc">
              <p>Email: clarksware24@gmail.com</p>
              <p>Phone: (435) 339-4110</p>
            </h1>
          </Accordion.Content>

        </Accordion>
      </Segment>
    )
  }
}

export default Home;