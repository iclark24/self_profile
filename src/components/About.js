import React from "react";
import {Segment} from "../styles/aboutstyles"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const About = () => (
  <>
    <ReactCSSTransitionGroup
    transitionName="tab1"
    transitionAppear={true}
    transitionAppearTimeout={10000}
    transitionEnter={false}
    transitionLeave={false}
    >
      <Segment position="top">
        <p>Hi, my name is Ian Clark and I am a full stack web developer located in Salt Lake City, Utah.</p>
        <p>I am dedicated to providing clean, impeccable code. I have experience in Python, Javascript, Ruby, and React.JS.</p>
        <p>I am interested in learning Go and Unity.</p>
      </Segment>
    </ReactCSSTransitionGroup>
    <Segment blank/>
    <ReactCSSTransitionGroup
    transitionName="tab2"
    transitionAppear={true}
    transitionAppearTimeout={10000}
    transitionEnter={false}
    transitionLeave={false}
    >
      <Segment position="bottom">
        <p>I am the son of an Air Force Master Sergeant which allowed me many wonderful experiences traveling all around the world. I have lived in England, Turkey, and Japan, though I have spent most of my time in Utah and California. I am willing to relocate and I enjoy exploring new surroundings.</p>
        <p>In my free time I like to play Dungeons and Dragons, watch movies with my wife, playing video games, and trying new recipes.</p>
      </Segment>
    </ReactCSSTransitionGroup>
    </>
);

export default About;