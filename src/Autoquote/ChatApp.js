import React, { Component } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import logo from '../logo.svg';
import 'react-chat-widget/lib/styles.css';
import {get,post} from './httpUtils';

class ChatApp extends Component {
  componentDidMount() {
    addResponseMessage("Welcome to Galacticos Insurance Company!");
    addResponseMessage("How we can help you today?");
  }

  constructor(props) {
	    super(props);
	    this.state = {
	    		chatMessage:{
	    			messages:[],
		    		newMessage:'',
		    		id:'',
		    		referenceNumber:'',
		    		currentQuestion:'',
		    		chatResponse:''	    			
	    		}
	    }
  }
  
  
  handleNewUserMessage = (newMessages) => {
    console.log(`New message incomig! ${newMessages}`);
    const headers = {}
    const postData = {...this.state.chatMessage};
    postData.newMessage=newMessages;
    let payload = JSON.stringify(postData);
    let url = 'http://54.197.209.190:8080/autoinsurance/getChatInfo';
    headers['Content-Type'] = 'application/json';
    post(url, payload, headers)
    .then(res => {
        console.log(res.chatResponse);
        this.setState({
        	chatMessage:{
        		messages:res.messages,
	    		newMessage:res.newMessage,
	    		id:res.id,
	    		referenceNumber:res.referenceNumber,
	    		currentQuestion:res.currentQuestion,
	    		chatResponse:res.chatResponse        		
        	}        	
	      })  
        addResponseMessage(res.chatResponse);
        
    });
  }	

  render() {
    return (
      <div className="App">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logo}
          title="Galacticos Virtual Assistant	"
          subtitle="Your one stop solution for all insurance needs"
        />
      </div>
    );
  } 
}

export default ChatApp;