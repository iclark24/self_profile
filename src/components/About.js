import React from "react";
import {Segment, Blub,} from "../styles/aboutstyles"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


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
          Hi, my name is Ian Clark and I am a full stack web developer located in Salt Lake City, Utah. I graduated from the University of Utah / Dev Point Labs Professional Education Course - Full Stack Web Development, and participated in Idevops - Devops Internship.
          <br/>
          I am dedicated to providing clean, impeccable code. I have experience in Python, Javascript, Ruby, and React.JS.
          <br/>
          I am a Certified Scrum Master via Scrum.org, Python 2.x by ExpertRating.com, and I am interested in learning Go and Unity.
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
          I am the son of an Air Force Master Sergeant which allowed me many wonderful experiences traveling all around the world. I have lived in England, Turkey, and Japan, though I have spent most of my time in Utah and California. I am willing to relocate and I enjoy exploring new surroundings.
          <br/>
          In my free time I like to play Dungeons and Dragons, watch movies with my wife, play video games, and try new recipes.
        </p>
      </ReactCSSTransitionGroup>
    </Segment>
  </>
);

export default About;