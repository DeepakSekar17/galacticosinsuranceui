import React from 'react';
import styled from 'styled-components';
import ChatApp from './ChatApp.js';
const Wrapper = styled.div`
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
`;
export const Contact = () => (
		<div>
  <Wrapper>
    <h2>Please contact us at below contacts</h2>
  </Wrapper>
  <ChatApp/>
  </div>
)