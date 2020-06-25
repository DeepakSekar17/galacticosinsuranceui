import React, { Component } from 'react'
import {
	  BrowserRouter as Router,
	  Switch,
	  Route,
	  Link
	} from "react-router-dom";
	import 'bootstrap/dist/css/bootstrap.min.css';
	import { Container,Row,Col,Card } from 'react-bootstrap';
	
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { faHome,faCar  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Homepage extends Component{
	 render() {
		 return (
				 <Router>
				    <Route render={({ location, history }) => (
				        <React.Fragment>
				            <SideNav
				                onSelect={(selected) => {
				                    const to = '/' + selected;
				                    if (location.pathname !== to) {
				                        history.push(to);
				                    }
				                }}
				            >
				                <SideNav.Toggle />
				                <SideNav.Nav defaultSelected="auto">
				                    <NavItem eventKey="auto">
				                        <NavIcon>
				                        	<FontAwesomeIcon icon={faCar} style={{ fontSize: '1.75em' }}/>
				                        </NavIcon>
				                        <NavText>
				                            Auto Insurance
				                        </NavText>
				                    </NavItem>
				                    <NavItem eventKey="home">
				                        <NavIcon>
				                        <FontAwesomeIcon icon={faHome} style={{ fontSize: '1.75em' }} />
				                        </NavIcon>
				                        <NavText>
				                            Home
				                        </NavText>
				                    </NavItem>
				                </SideNav.Nav>
				            </SideNav>
				            <main>
				                <Route path="/" exact component={props => <RootComponent />} />
				                <Route path="/home" component={props => <Home />} />
				                <Route path="/auto" component={props => <RootComponent />} />
				            </main>
				        </React.Fragment>
				    )}
				    />
				</Router>
			);
	 }
}

export default Homepage;

function Home() {
	  return (
	    <div style={{paddingLeft:50}}>
	    <Card bg={'secondary'}>
	    <Card.Header >Galacticos Insurance Company</Card.Header>
	    </Card>
	    <Card>
	    <Card.Header>Home Insurance Quote</Card.Header>
	    <Card.Body>Test</Card.Body>
	    </Card>
	    </div>
	  );
	}

	function RootComponent() {
	  return (
	    <div style={{paddingLeft:50}}>
	    <Card bg={'secondary'}>
	    <Card.Header >Galacticos Insurance Company</Card.Header>
	    </Card>
	    <Card>
	    <Card.Header>Auto Insurance Quote</Card.Header>
	    <Card.Body>Test</Card.Body>
	    </Card>
	    </div>
	  );
	}

	function Devices() {
	  return (
	    <div>
	    <Card bg={'secondary'}>
	    <Card.Header style={{backgroundColor:'#db3d44'}}>Galacticos Insurance Company</Card.Header>
	    </Card>
	    <Card>
	    <Card.Header>Auto Insurance Quote</Card.Header>
	    <Card.Body>Test</Card.Body>
	    </Card>
	    </div>
	  );
	}