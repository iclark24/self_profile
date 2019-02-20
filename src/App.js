import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'
import NoMatch from './components/NoMatch'
import Navbar from "./components/Navbar";
import { Container, Container2 } from "./styles/homestyles";
import Particles from './components/Particles';
import Footer from './components/Footer'
import {BrowserView,} from "react-device-detect";

const App = () => (
  <>
    {/* <Navbar/> */}
      <Container>
        <Container2>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
        </Container2>
        <Particles/>
      </Container >
      <BrowserView>
        <Footer/>
      </BrowserView>
  </>
);

export default App;