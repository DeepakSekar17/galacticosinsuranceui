import React from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ChatApp from './ChatApp.js';
/* This defines the actual bar going down the screen */
const StyledSideNav = styled.div`
  
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding-top: 10px;
`;

const NavIcon = styled.div`
`;

const StyledNavItem = styled.div`
margin-bottom: 0;   /* Puts space between NavItems */
a {
  font-size: 2.7em;
  color: ${(props) => props.active ? "#0066a1" : "#0066a1"};
  :hover {
    opacity: 0.7;
    text-decoration: none; /* Gets rid of underlining of icons */
  }  
}
`;

class NavItem extends React.Component {
	handleClick = () => {
		  const { path, onItemClick } = this.props;
		  onItemClick(path);
		}
	  render() {
		  const { active } = this.props;
	    return (
	    		<StyledNavItem active={active}>
	    		  <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
	    		    <span style={{paddingLeft:'10px',whiteSpace: 'nowrap', fontSize: 'xx-large'}}>{this.props.name}</span>
	    		  </Link>
	    		</StyledNavItem>
	    );
	  }
	}

class SideNav extends React.Component {

	constructor(props) {
		  super(props);
		  this.state = {
		    activePath: '/',
		    items: [
		      {
		        path: '/auto',
		        name: 'Auto Insurance',
		        css: 'fa fa-fw fa-car',
		        key: 2
		      },
		      {
			        path: '/rent',
			        name: 'Renters  Insurance',
			        css: 'fa fa-fw fa-home',
			        key: 2
			      }
		    ]
		  }  
		}
	
	onItemClick = (path) => {
		  this.setState({ activePath: path }); /* Sets activePath which causes rerender which causes CSS to change */
		}
	render() {
		  const { items, activePath } = this.state;
		  return (
		    <StyledSideNav>
		      {
		        /* items = just array AND map() loops thru that array AND item is param of that loop */
		        items.map((item) => {
		          /* Return however many NavItems in array to be rendered */
		          return (
		        		  <div>
		            <NavItem path={item.path} name={item.name} css={item.css} onItemClick={this.onItemClick} /* Simply passed an entire function to onClick prop */ active={item.path === activePath} key={item.key}/>
		          <br/>
		          </div>
		          )
		        })
		      }
		    </StyledSideNav>
		  );
		}
}

const GridWrapper = styled.div`
  display: grid;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-rows: auto auto auto auto;
`;

const GridWrapperColumns = styled.div`
display: grid;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-rows: auto auto auto auto;
`;
export const Home = (props) => (
		<div>
  <GridWrapper>
    <p>Welcome to Galacticos Insurance Company!</p>
    <br/>
    <p>Auto, home and more – get the coverage you want from us.</p>
  </GridWrapper>
  <GridWrapperColumns>
  <SideNav></SideNav>
  </GridWrapperColumns>
  <ChatApp/>
  </div>
)