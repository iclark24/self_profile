import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'
import NoMatch from './components/NoMatch'
import Navbar from "./components/Navbar";
import { Container, } from "./styles/homestyles";
import Particles from './components/Particles';

const App = () => (
  <>
    <Navbar/>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About}/>
          <Route component={NoMatch} />
        </Switch>
      </Container >
      <Particles/>
  </>
);

export default App;