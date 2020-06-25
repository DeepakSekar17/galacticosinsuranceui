import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './autoinsurance/Homepage.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from 'react-bootstrap';


function App() {
  return (
	<div style={{width:"100%"}}>
	<Homepage/>
	</div>
    
  );
}

export default App;
