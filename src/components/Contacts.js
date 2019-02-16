import React from "react";
import {Segment, Option, Img, Segment2, Option2} from "../styles/contactstyles"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import gitimage from '../Images/GitHub-Mark/PNG/GitHub-Mark-Light-120px-plus.png'
import linked from '../Images/linkedin_logo_package/LinkedIn [in]/Screen/White/In-White-128px-TM.png'
import codecademy from '../Images/codecademy-logo-e1413249893959.png'
import resume from '../documents/resume.pdf'
import {Icon} from 'semantic-ui-react'

const Contacts = () => (
  <>
    <Segment position="top">
      <ReactCSSTransitionGroup
        transitionName="link"
        transitionAppear={true}
        transitionAppearTimeout={10000}
        transitionEnter={false}
        transitionLeave={false}
      >
        <Option>
          <h1>Ian Clark</h1>
        </Option>
      </ReactCSSTransitionGroup>
      <ReactCSSTransitionGroup
        transitionName="link1"
        transitionAppear={true}
        transitionAppearTimeout={10000}
        transitionEnter={false}
        transitionLeave={false}
      >
        <Option >
          <h1>(435) 339-4110</h1>
        </Option>
      </ReactCSSTransitionGroup>
      <ReactCSSTransitionGroup
        transitionName="link2"
        transitionAppear={true}
        transitionAppearTimeout={10000}
        transitionEnter={false}
        transitionLeave={false}
      >
        <Option href="" target="_blank">
          <h1>clarksware24@gmail.com</h1>
        </Option>
      </ReactCSSTransitionGroup>
    </Segment>
  <Segment blank/>
  <Segment2 position="bottom">
      <ReactCSSTransitionGroup
        transitionName="link3"
        transitionAppear={true}
        transitionAppearTimeout={10000}
        transitionEnter={false}
        transitionLeave={false}
      >
        <Option2 href="https://github.com/iclark24" target="_blank">
          <Img src={gitimage}/>
        </Option2>
      </ReactCSSTransitionGroup>
      <ReactCSSTransitionGroup
        transitionName="link4"
        transitionAppear={true}
        transitionAppearTimeout={10000}
        transitionEnter={false}
        transitionLeave={false}
      >
        <Option2 href="https://www.linkedin.com/in/ian-c-clark/" target="_blank">
          <Img src={linked}/>
        </Option2>
      </ReactCSSTransitionGroup>
      <ReactCSSTransitionGroup
        transitionName="link5"
        transitionAppear={true}
        transitionAppearTimeout={10000}
        transitionEnter={false}
        transitionLeave={false}
      >
        <Option2 href="https://www.codecademy.com/I_Clark" target="_blank">
          <Img src={codecademy}/>
        </Option2>
      </ReactCSSTransitionGroup>
      <ReactCSSTransitionGroup
        transitionName="link6"
        transitionAppear={true}
        transitionAppearTimeout={10000}
        transitionEnter={false}
        transitionLeave={false}
      >
        <Option2 href={resume} download>
          <Icon name="file pdf" inverted size="huge"/>
          <h2>Resume</h2>
        </Option2>
      </ReactCSSTransitionGroup>
    </Segment2>
    </>
);

export default Contacts;