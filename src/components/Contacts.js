import React from "react";
import {Segment, Option, Img} from "../styles/contactstyles"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import gitimage from '../Images/GitHub-Mark/PNG/GitHub-Mark-Light-120px-plus.png'
import linked from '../Images/linkedin_logo_package/LinkedIn [in]/Screen/White/In-White-128px-TM.png'

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
        <Option href="https://github.com/iclark24" target="_blank">
          <Img src={gitimage}/>
        </Option>
      </ReactCSSTransitionGroup>
      <ReactCSSTransitionGroup
        transitionName="link1"
        transitionAppear={true}
        transitionAppearTimeout={10000}
        transitionEnter={false}
        transitionLeave={false}
      >
        <Option href="https://www.linkedin.com/in/ian-c-clark/" target="_blank">
          <Img src={linked}/>
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
          <Img/>
          <p>
            Brief Description of the website above.
          </p>
        </Option>
      </ReactCSSTransitionGroup>
    </Segment>
  <Segment blank/>
  <Segment position="bottom">
      <ReactCSSTransitionGroup
        transitionName="link3"
        transitionAppear={true}
        transitionAppearTimeout={10000}
        transitionEnter={false}
        transitionLeave={false}
      >
        <Option href="" target="_blank">
          <Img/>
          <p>
            Brief Description of the website above.
          </p>
        </Option>
      </ReactCSSTransitionGroup>
      <ReactCSSTransitionGroup
        transitionName="link4"
        transitionAppear={true}
        transitionAppearTimeout={10000}
        transitionEnter={false}
        transitionLeave={false}
      >
        <Option href="" target="_blank">
          <Img/>
          <p>
            Brief Description of the website above.
          </p>
        </Option>
      </ReactCSSTransitionGroup>
      <ReactCSSTransitionGroup
        transitionName="link5"
        transitionAppear={true}
        transitionAppearTimeout={10000}
        transitionEnter={false}
        transitionLeave={false}
      >
        <Option href="" target="_blank">
          <Img/>
          <p>
            Brief Description of the website above.
          </p>
        </Option>
      </ReactCSSTransitionGroup>
    </Segment>
    </>
);

export default Contacts;