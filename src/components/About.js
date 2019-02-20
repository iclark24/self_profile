import React from "react";
import {Segment, Blub,} from "../styles/aboutstyles"
// import {MSegment, MBlub,} from "../styles/mobileaboutstyles"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {isMobile} from 'react-device-detect';

const About = () => (
  <>

    <Segment position="top" className="css-scrollbar">
      <ReactCSSTransitionGroup
      transitionName="tab1"
      transitionAppear={true}
      transitionAppearTimeout={10000}
      transitionEnter={false}
      transitionLeave={false}
      >
        <p>
          Hi, my name is Ian Clark and I am a Full-Stack Web Engineer located in Salt Lake City, Utah.
          <br/>
          I graduated from the University of Utah / Dev Point Labs Professional Education Course - Full Stack Web Development, and participated in Idevops - Devops Internship. I am dedicated to providing clean, impeccable code.
        </p>
      </ReactCSSTransitionGroup>
    </Segment>
      <Blub/>
    <Segment position="bottom" className="css-scrollbar">
      <ReactCSSTransitionGroup
      transitionName="tab2"
      transitionAppear={true}
      transitionAppearTimeout={10000}
      transitionEnter={false}
      transitionLeave={false}
      >
        <p>
          I have experience in Python, Javascript, Ruby, and React.JS.
          <br/>
          I am a Certified Scrum Master via Scrum.org, Python 2.x by ExpertRating.com, and I am interested in learning Go and Unity.
          <br/><br/>
          In my free time I like to play Dungeons and Dragons, watch movies with my wife, play video games, and try new recipes.
        </p>
      </ReactCSSTransitionGroup>
    </Segment>
  </>
);

export default About;