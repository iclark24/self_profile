import React from "react";
import {Segment, Option, Img} from "../styles/projectstyles"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const Projects = () => (
  <>
    <Segment position="top">
      <ReactCSSTransitionGroup
        transitionName="link"
        transitionAppear={true}
        transitionAppearTimeout={10000}
        transitionEnter={false}
        transitionLeave={false}
      >
        <Option href="https://adoring-kalam-51f08f.netlify.com/" target="_blank">
          <Img/>
          <p>
            Brief Description of the website above.
          </p>
        </Option>
      </ReactCSSTransitionGroup>
      <ReactCSSTransitionGroup
        transitionName="link1"
        transitionAppear={true}
        transitionAppearTimeout={10000}
        transitionEnter={false}
        transitionLeave={false}
      >
        <Option href="https://mystifying-ardinghelli-969588.netlify.com/" target="_blank">
          <Img/>
          <p>
            Brief Description of the website above.
          </p>
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

export default Projects;