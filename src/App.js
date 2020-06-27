import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from 'react-bootstrap';
import {Autoquote} from './Autoquote/Autoquote';
import {Home} from './Autoquote/Home';
import {About} from './Autoquote/About';
import {NoMatch} from './Autoquote/NoMatch';
import {Auto} from './Autoquote/Auto';
import Sidebar from './Autoquote/Sidebar';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
		  <React.Fragment>
		  <Router>
		    <Autoquote />
		    <Sidebar />
		    <Switch>
		    <Route exact path="/" component={Home} />
		    <Route path="/about" component={About} />
		    <Route path="/auto" component={Auto} />
		    <Route component={NoMatch} />
		  </Switch>
		  </Router>
		</React.Fragment>
  );
}

export default App;
