import React from 'react';
import styled from 'styled-components';
import ChatApp from './ChatApp.js';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
`; 
export const About = () => (
		<div>
  <GridWrapper>
    <h2>About Galacticos Insurance Product</h2>
  </GridWrapper>
  <ChatApp/>
  </div>
)