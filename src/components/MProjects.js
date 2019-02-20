import React from "react";
import {Segment, Option, Img, Blub} from "../styles/mobileprojectstyles"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import dnd from '../Images/dnd.png'
import sky from '../Images/Sky_SLC_White.svg'
import logo from '../Images/logo.svg'


const MProjects = () => (
  <>
    <Segment position="top">
      <ReactCSSTransitionGroup
        transitionName="link"
        transitionAppear={true}
        transitionAppearTimeout={10000}
        transitionEnter={false}
        transitionLeave={false}
      >
        <Option href="https://allogsheet.herokuapp.com/" target="_blank">
          <Img src={dnd}/>
          <p>
            (WIP) Rails & React Dungeons and Dragons Character Tracker
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
          <Option href="https://mw-table-app.herokuapp.com" target="_blank">
          <Img src={sky}/>
          <p>
            Rails & React Night Club Ticketing and Reservation App
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
        <Option href="https://adoring-kalam-51f08f.netlify.com/" target="_blank">
          <Img src={logo}/>
          <p>
            React Flash Cards App
          </p>
        </Option>
      </ReactCSSTransitionGroup>
    </Segment>
  <Blub/>
  <Segment position="bottom">
      <ReactCSSTransitionGroup
        transitionName="link3"
        transitionAppear={true}
        transitionAppearTimeout={10000}
        transitionEnter={false}
        transitionLeave={false}
      >
        <Option href="https://mystifying-ardinghelli-969588.netlify.com/" target="_blank">
          <Img src={logo}/>
          <p>
            React Grocery List App
          </p>
        </Option>
      </ReactCSSTransitionGroup>
      {/* <ReactCSSTransitionGroup
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
      </ReactCSSTransitionGroup> */}
    </Segment>
    </>
);

export default MProjects;