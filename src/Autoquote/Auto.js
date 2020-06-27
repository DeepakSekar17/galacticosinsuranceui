import React from 'react';
import styled from 'styled-components';
import { Container,Row,Col,Button } from 'react-bootstrap';
import './All.css';
import Collapsible from 'react-collapsible';
import Select from 'react-select';

import "react-datepicker/dist/react-datepicker.css";

const options = [
	  { value: '', label: '' },
	  { value: 'female', label: 'Female' },
	  { value: 'male', label: 'Male' },
	  { value: 'other', label: 'Other' },
	];

const Wrapper = styled.div`
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
`;

export class Auto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startHere: false,
      quoteVisible: false,
      quoteSaveMessage:'',
      referenceNumber: '',
      autoSaved: true,
      quoteInformation: {
    	  customerMailId: '',
    	  genderSelection: '',
    	  dateOfBirth: '',
    	  firstName: '',
    	  lastName: '',
    	  vin: '',
		  make:'',
		  modelYear:'',
		  manufacturer:'',
		  vehicleType:''
      }
    };
  }

  handlemake(value){
	  const quoteInformation = {...this.state.quoteInformation, make: value}
      this.setState({quoteInformation: quoteInformation});
  }
  
  handlemodelYear(value){
	  const quoteInformation = {...this.state.quoteInformation, modelYear: value}
      this.setState({quoteInformation: quoteInformation});
  }
  
  handlemanufacturer(value){
	  const quoteInformation = {...this.state.quoteInformation, manufacturer: value}
      this.setState({quoteInformation: quoteInformation});
  }
  
  handlevehicleType(value){
	  const quoteInformation = {...this.state.quoteInformation, vehicleType: value}
      this.setState({quoteInformation: quoteInformation});
  }
  
  handlevin(value){ 
	  const quoteInformation = {...this.state.quoteInformation, vin: value}
      this.setState({quoteInformation: quoteInformation});
  }
  
  handlecustomerfirstName(value) {
      const quoteInformation = {...this.state.quoteInformation, firstName: value}
      this.setState({quoteInformation: quoteInformation});
  }
  
  handlecustomerlastName(value) {
      const quoteInformation = {...this.state.quoteInformation, lastName: value}
      this.setState({quoteInformation: quoteInformation});
  }
  
  handlecustomerMailID(value) {
      const quoteInformation = {...this.state.quoteInformation, customerMailId: value}
      this.setState({quoteInformation: quoteInformation});
  }
  
  handleDateChange(value){
	  const quoteInformation = {...this.state.quoteInformation, dateOfBirth: value}
      this.setState({quoteInformation: quoteInformation});
  }
  
  handleChangeGender(value){
	  const quoteInformation = {...this.state.quoteInformation, genderSelection: value}
      this.setState({quoteInformation: quoteInformation});
  }
  
  openStart() {
	  this.setState({
		  quoteVisible : true
      })
  }
  
  callNext(step) {
	  alert(step);
	  this.setState({
		  quoteSaveMessage: 'Quote Successfully Saved',
		  referenceNumber: '12345'
      })
	  
  }
  render() {
    return (
      <div>
      <Wrapper>
      <h2>Welcome to Auto Insurance Page</h2>
      <Container>
  	    <Row>
  	      <Col xs lg="2"><Button style={{backgroundColor: '#0066a1',borderColor: '#0066a1'}} onClick={() => this.openStart()}>Get New Quote</Button></Col>
  	      <Col xs lg="2"><Button style={{backgroundColor: '#0066a1',borderColor: '#0066a1'}}>Retrieve Quote</Button></Col>
  	    </Row>
  	    <Row>
  	    <br/>
  	    </Row>
  	    {this.state.quoteVisible && 
  	    	<div style={{border:'1px',border: 'inset', padding:'25px'}}>
  	    		<Row>
  	    			<Col xs lg="4">Reference Number: <span style={{fontWeight:'700'}}>{this.state.referenceNumber}</span></Col>
  	    			<Col xs lg="4">{this.state.autoSaved && <span style={{fontWeight: '500',background: 'greenyellow',fontStyle: 'italic'}}>{this.state.quoteSaveMessage}</span>}</Col>
  	    			<Col xs lg="4"><Button style={{backgroundColor: '#0066a1',borderColor: '#0066a1'}} onClick={() => this.openStart()}>Save Quote</Button></Col>
  	    		</Row>
  	    		<br/>
		  	    <Row>
		  	    	<Col xs lg="12">
			  		    <Collapsible trigger="Start here" open={this.state.startHere}>
				  		  <Row>
				  	    	<Col xs lg="4">
				  	    		Please enter E-mail address:
				  	    	</Col>
				  	    	<Col xs lg="4">
				  	    	<input value={this.state.quoteInformation.customerMailId} style={{height:'10px', textTransform: 'uppercase', fontSize: '12px'}} onChange={(e) => this.handlecustomerMailID(e.target.value)} className="form-control"/>
				  	    	</Col>
				  	    	<Col xs lg="4">
				  	    	<Button style={{backgroundColor: '#0066a1',borderColor: '#0066a1'}} onClick={() => this.callNext('startHere')}>Next</Button>
				  	    	</Col>
			  		        </Row>
			  	        </Collapsible>
			  	     </Col>
		  	    <Col xs lg="12">
		  	    <Collapsible trigger="Personal Information">
				  	  <Row>
			  	    		<Col xs lg="2">First Name:</Col>
			  	    		<Col xs lg="2">
			  	    			<input value={this.state.quoteInformation.firstName} style={{height:'10px', textTransform: 'uppercase', fontSize: '12px'}} onChange={(e) => this.handlecustomerfirstName(e.target.value)} className="form-control"/>
	  	    				</Col>
		  	    			<Col xs lg="2">Last Name:</Col>
		  	    			<Col xs lg="2">
		  	    				<input value={this.state.quoteInformation.lastName} style={{height:'10px', textTransform: 'uppercase', fontSize: '12px'}} onChange={(e) => this.handlecustomerlastName(e.target.value)} className="form-control"/>
  	    					</Col>
				        </Row>
				        <br/>
				        <Row>
			  	    		<Col xs lg="2">Date of Birth:</Col>
			  	    		<Col xs lg="2">
			  	    		<input value={this.state.quoteInformation.dateOfBirth} style={{height:'10px', textTransform: 'uppercase', fontSize: '12px'}} onChange={(e) => this.handleDateChange(e.target.value)} className="form-control"/>		
	  	    				</Col>
			  	    		<Col xs lg="2">Sex:</Col>
			  	    		<Col xs lg="2">
			  	    		<input value={this.state.quoteInformation.genderSelection} style={{height:'10px', textTransform: 'uppercase', fontSize: '12px'}} onChange={(e) => this.handleChangeGender(e.target.value)} className="form-control"/>		
	  	    				</Col>
	  	    			</Row>
	          </Collapsible>
		          <Collapsible trigger="Vehicle Information">
		          <Row>
	  	    		<Col xs lg="2">Enter VIN number:</Col>
	  	    		<Col xs lg="4">
	  	    			<input value={this.state.quoteInformation.vin} style={{height:'10px', textTransform: 'uppercase', fontSize: '12px'}} onChange={(e) => this.handlevin(e.target.value)} className="form-control"/>
  				</Col>
	    			<Col xs lg="2">
	    			<Button style={{backgroundColor: '#0066a1',borderColor: '#0066a1'}} onClick={() => this.openStart()}>Search VIN</Button>
					</Col>
		        </Row>
		        <br/>
		          <Row>
	  	    		<Col xs lg="2">Vehicle Make:</Col>
	  	    		<Col xs lg="2">
	  	    			<input value={this.state.quoteInformation.make} style={{height:'10px', textTransform: 'uppercase', fontSize: '12px'}} onChange={(e) => this.handlemake(e.target.value)} className="form-control"/>
    				</Col>
	    			<Col xs lg="2">Model Year:</Col>
	    			<Col xs lg="2">
	    				<input value={this.state.quoteInformation.modelYear} style={{height:'10px', textTransform: 'uppercase', fontSize: '12px'}} onChange={(e) => this.handlemodelYear(e.target.value)} className="form-control"/>
					</Col>
		        </Row>
		        <br/>
		        <Row>
	  	    		<Col xs lg="2">Manufacturer:</Col>
	  	    		<Col xs lg="2">
	  	    		<input value={this.state.quoteInformation.manufacturer} style={{height:'10px', textTransform: 'uppercase', fontSize: '12px'}} onChange={(e) => this.handlemanufacturer(e.target.value)} className="form-control"/>		
    				</Col>
	  	    		<Col xs lg="2">Vehicle Type:</Col>
	  	    		<Col xs lg="2">
	  	    		<input value={this.state.quoteInformation.vehicleType} style={{height:'10px', textTransform: 'uppercase', fontSize: '12px'}} onChange={(e) => this.handlevehicleType(e.target.value)} className="form-control"/>		
    				</Col>
    			</Row>
		          </Collapsible>
		      </Col>
		      <Col xs lg="12">
		      <Collapsible trigger="Additional Information">
		          <p>This is the collapsible content. It can be any element or React component you like.</p>
		          <p>It can even be another Collapsible component. Check out the next section!</p>
		      </Collapsible>
		      <Collapsible trigger="Final Quote">
	          <p>This is the collapsible content. It can be any element or React component you like.</p>
	          <p>It can even be another Collapsible component. Check out the next section!</p>
	      </Collapsible>
		  </Col>
		  	    </Row>
	 </div>
  	    }
      </Container>
    </Wrapper>
      </div>
    );
  }
}