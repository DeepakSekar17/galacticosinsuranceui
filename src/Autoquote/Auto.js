import React from 'react';
import styled from 'styled-components';
import { Container,Row,Col,Button } from 'react-bootstrap';
import './All.css';
import Collapsible from 'react-collapsible';
import Select from 'react-select';
import {get,post} from './httpUtils';
import ChatApp from './ChatApp.js';

import "react-datepicker/dist/react-datepicker.css";

let urlBase = 'http://54.197.209.190:8080/';

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
      personalInfo: false,
      vehicleInfo: false,
      addInfo: false,
      finalQuote: false,
      quoteVisible: false,
      quoteSearchVisible: false,
      startSearch: false,
      searchRefNumber: '',
      searchCustEmail:'',   
      quoteInformation: {
    	  finalQuoteCalculation:false,
    	  id: '',
    	  autoSaved: true,
    	  quoteSaveMessage:'',
          referenceNumber: '',
    	  customerMailId: '',
    	  genderSelection: '',
    	  dateOfBirth: '',
    	  firstName: '',
    	  lastName: '',
    	  vin: '',
		  make:'',
		  modelYear:'',
		  manufacturer:'',
		  vehicleType:'',
		  drivingLicense: '',
		  finalQuoteAmount: '',
		  expiryDate:'',
		  factorsConsidered: '',
		  originalQuoteAmount: '',
		  discounts: ''
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
  
  handledrivingLicense(value){
	  const quoteInformation = {...this.state.quoteInformation, drivingLicense: value}
      this.setState({quoteInformation: quoteInformation});
  }
  
  handlesearchRefNumber(value){
      this.setState({searchRefNumber: value});
  }
  
  handlesearchCustEmail(value){
      this.setState({searchCustEmail: value});
  }
  
  callSearchColapse(dta){
	  if(dta == 'open'){
		  this.setState({
			  startSearch: true
	      })  
	  }else if (dta == 'close'){
		  this.setState({
			  startSearch: false
	      })  
	  }
  }
  openStart() {
	  this.setState({
		  quoteVisible : true,
		  startHere: true,
		  personalInfo: false,
	      vehicleInfo: false,
	      addInfo: false,
		  finalQuote: false,
		  quoteInformation: {
			  finalQuoteCalculation:false,
	    	  id: '',
	    	  autoSaved: true,
	    	  quoteSaveMessage:'',
	          referenceNumber: '',
	    	  customerMailId: '',
	    	  genderSelection: '',
	    	  dateOfBirth: '',
	    	  firstName: '',
	    	  lastName: '',
	    	  vin: '',
			  make:'',
			  modelYear:'',
			  manufacturer:'',
			  vehicleType:'',
			  drivingLicense: '',
			  finalQuoteAmount: '',
			  expiryDate:'',
			  factorsConsidered: '',
			  originalQuoteAmount: '',
			  discounts: ''
	      }
      })
      
      
  }
  
  openSearch() {
	  this.setState({
		  quoteSearchVisible: true,
		  quoteVisible : false,
		  startHere: false,
		  personalInfo: false,
	      vehicleInfo: false,
	      addInfo: false,
	      startSearch: true,
		  finalQuote: false,
		  searchRefNumber: '',
	      searchCustEmail:''
      })
  }
  quoteSearch(app){
	  var customEmail = this.state.searchRefNumber;
	  var customRefNumber = this.state.searchCustEmail;
	  
	  if((null != customEmail && customEmail.length > 0) || (null != customRefNumber && customRefNumber.length > 0)){
		  

		  const headers = {}
	        let url = urlBase;
	    
	        headers['Content-Type'] = 'application/json';
	        if(app=='email'){
				  url = url + 'autoinsurance/autoquote/findByCustomerMailId?customerMailId='+customEmail;
			  }else if(app=='reference'){
				  url = url + 'autoinsurance/autoquote/findByReference?referenceNumber='+customRefNumber;
			  }else{
				  return null;
			  }      
	        get(url, headers)
	        .then(res => {
	            console.log(res);
	            if(null!= res && null != res.id && res.id.length > 0){
		            this.setState({
		            	quoteVisible: true,
		            	quoteSearchVisible: true,
		            	startSearch: false,
		            	startHere: true,
		      		  	personalInfo: true,
		      		  	vehicleInfo: true,
		      		  	addInfo: true,
		      		  	finalQuote: true,
		                quoteInformation: {
		                  finalQuoteCalculation:false,
		              	  id: res.id,
		                  referenceNumber: res.referenceNumber,
		              	  customerMailId: res.customerMailId,
		              	  genderSelection: res.genderSelection,
		              	  dateOfBirth: res.dateOfBirth,
		              	  firstName: res.firstName,
		              	  lastName: res.lastName,
		              	  vin: res.vin,
		          		  make:res.make,
		          		  modelYear:res.modelYear,
		          		  manufacturer:res.manufacturer,
		          		  vehicleType:res.vehicleType,
		          		  drivingLicense: res.drivingLicense,
		          		  finalQuoteAmount: res.finalQuoteAmount,
		          		  expiryDate:res.expiryDate,
		          		  factorsConsidered: res.factorsConsidered,
		          		  originalQuoteAmount: res.originalQuoteAmount,
		          		  discounts: res.discounts
		                }
		            })
	            }else{
	            	alert('No Records found');
	            	this.setState({
	            		      startHere: false,
	            		      personalInfo: false,
	            		      vehicleInfo: false,
	            		      addInfo: false,
	            		      finalQuote: false,
	            		      quoteVisible: false,
	            		      quoteSearchVisible: true,
	            		      quoteInformation: {
	            		    	  finalQuoteCalculation:false,
	            		    	  id: '',
	            		    	  autoSaved: true,
	            		    	  quoteSaveMessage:'',
	            		          referenceNumber: '',
	            		    	  customerMailId: '',
	            		    	  genderSelection: '',
	            		    	  dateOfBirth: '',
	            		    	  firstName: '',
	            		    	  lastName: '',
	            		    	  vin: '',
	            				  make:'',
	            				  modelYear:'',
	            				  manufacturer:'',
	            				  vehicleType:'',
	            				  drivingLicense: '',
	            				  finalQuoteAmount: '',
	            				  expiryDate:'',
	            				  factorsConsidered: '',
	            				  originalQuoteAmount: '',
	            				  discounts: ''
	            		      }
	            		    })
	            }

	        });
	        
	  
	  }else{
		  alert('Please enter any one search criteria!');
	  }
  }
  searchVin(){
	  let vin = this.state.quoteInformation.vin;
	  if(null != vin && vin.length > 0){
		  const headers = {}
	        let url = urlBase + 'autoinsurance/getVin?vin='+vin;
	    
	        headers['Content-Type'] = 'application/json';
	            
	        get(url, headers)
	        .then(res => {
	            console.log(res);
	            const filters = {...this.state.quoteInformation};
	            filters.make=res.Make;
	            filters.modelYear=res.ModelYear;
	            filters.manufacturer=res.Model;
	            filters.vehicleType=res.VehicleType;
	            this.setState({quoteInformation: filters});
	        });
	        
	  }else{
		 alert("Please enter VIN");
	  }
  }
  
  saveQuoteInformation(){
	  let payload = JSON.stringify(this.state.quoteInformation);
	  let url = urlBase + 'autoinsurance/autoquote/insert';
	  let headers = {};
	  headers['Content-Type'] = 'application/json';
	  post(url, payload, headers)
      .then(res => {
          console.log(res);
          if(null!= res && null != res.id && res.id.length > 0){
        	  const filters = {...this.state.quoteInformation};
              filters.referenceNumber=res.referenceNumber;
              filters.autoSaved= true;
              filters.id=res.id;
              filters.quoteSaveMessage=res.quoteSaveMessage;
              filters.finalQuoteCalculation=false;
              filters.finalQuoteAmount=res.finalQuoteAmount;
              filters.expiryDate=res.expiryDate;
              filters.factorsConsidered=res.factorsConsidered;
              filters.originalQuoteAmount=res.originalQuoteAmount;
              filters.discounts=res.discounts;
              this.setState({quoteInformation: filters});
          }
      }).catch(error => {
          
      });
  }
  callCloseTrigger(step){
	  if(step=='startHere'){
		  this.setState({
			  startHere: false
	      })  
	  }else if(step=='personalInfo'){
		  this.setState({
			  personalInfo: false
	      }) 
	  }else if(step=='vehicleInfo'){
		  this.setState({
			  vehicleInfo: false
	      })  
	  }else if(step=='addInfo'){
		  this.setState({
			  addInfo: false
	      })
	  }else if(step=='finalQuote'){
		  this.setState({
			  finalQuote: false
	      })
	  }
  }
  callNext(step) {
	  var customerMAil = this.state.quoteInformation.customerMailId;

	  if(step=='startHere'){
		  this.setState({
			  personalInfo: true
	      })  
	  }else if(step=='personalInfo'){
		  this.setState({
			  vehicleInfo: true
	      }) 
	  }else if(step=='vehicleInfo'){
		  this.setState({
			  addInfo: true
	      })  
	  }else if(step=='finalQuote'){
		  this.setState({
			  startHere: false,
		      personalInfo: false,
		      vehicleInfo: false,
		      addInfo: false,
			  finalQuote: true
	      })
	      
	      const filters = {...this.state.quoteInformation};
          filters.finalQuoteCalculation=true;
          this.setState({quoteInformation: filters});
	  }
	  
	  if(customerMAil.length > 0){
    	  this.saveQuoteInformation();
	  }	  
	  
  }
  render() {
    return (
      <div>
      <Wrapper>
      <h2>Welcome to Auto Insurance Page</h2>
      
      <Container>
  	    <div class="row">
  	      <div class="col-sm-2"><Button style={{backgroundColor: '#0066a1',borderColor: '#0066a1'}} onClick={() => this.openStart()}>Get New Quote</Button></div>
  	    <div class="col-sm-2">&nbsp;&nbsp;&nbsp;</div>
  	      <div class="col-sm-2"><Button style={{backgroundColor: '#0066a1',borderColor: '#0066a1'}} onClick={() => this.openSearch()}>Retrieve Quote</Button></div>
  	    </div>
  	    <div class="row">
  	    &nbsp;&nbsp;&nbsp;
  	    </div>
  	  {this.state.quoteSearchVisible && 
	    	<div style={{border:'1px',border: 'inset'}}>
	    		<div class="row">
	    		<div class="col-sm-12">
	    		<Collapsible trigger="Search your Quote here" open={this.state.startSearch} onTriggerOpening={() => this.callSearchColapse('open')} onTriggerClosing={() => this.callSearchColapse('close')}>
	    		<div class="row">
  	    		<div class="col-sm-4">Enter your email Address:</div>
  	    		<div class="col-sm-3">
  	    			<input value={this.state.searchRefNumber} style={{height:'10px', textTransform: 'uppercase', fontSize: '12px'}} onChange={(e) => this.handlesearchRefNumber(e.target.value)} className="form-control"/>
				</div>
  	    			&nbsp;&nbsp;
    			<div class="col-sm-4">
    			<Button style={{backgroundColor: '#0066a1',borderColor: '#0066a1'}} onClick={() => this.quoteSearch('email')}>Retrieve By Email</Button>
				</div>
	        </div>
	        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
	        <div class="row">
	    		<div class="col-sm-4">Enter your Quote reference Number:</div>
	    		<div class="col-sm-3">
	    			<input value={this.state.searchCustEmail} style={{height:'10px', textTransform: 'uppercase', fontSize: '12px'}} onChange={(e) => this.handlesearchCustEmail(e.target.value)} className="form-control"/>
			</div>
	    			&nbsp;&nbsp;
			<div class="col-sm-4">
			<Button style={{backgroundColor: '#0066a1',borderColor: '#0066a1'}} onClick={() => this.quoteSearch('reference')}>Retrieve By Reference Number</Button>
			</div>
        </div>
	    		</Collapsible>
	    		</div>
	    		</div>
	    	</div>
  	  }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  	    {this.state.quoteVisible && 
  	    	<div style={{border:'1px',border: 'inset', padding:'25px'}}>
  	    		<div class="row">
	  	    		<div class="col-sm-5">Reference Number: <span style={{fontWeight:'700'}}>{this.state.quoteInformation.referenceNumber}</span></div>
	  	    		<div class="col-sm-5">{this.state.quoteInformation.autoSaved && <span style={{fontWeight: '500',background: 'greenyellow',fontStyle: 'italic'}}>{this.state.quoteInformation.quoteSaveMessage}</span>}</div>
  	    		</div>
  	    		&nbsp;&nbsp;&nbsp;
		  	    <div class="row">
		  	    	<div class="col-sm-12">
			  		    <Collapsible trigger="Start here" open={this.state.startHere}>
				  		  <div class="row">
				  	    	<div class="col-sm-4">
				  	    		Please enter E-mail address:
				  	    	</div>
				  	    	&nbsp;&nbsp;
				  	    	<div class="col-sm-4">
				  	    	<input value={this.state.quoteInformation.customerMailId} style={{height:'10px', textTransform: 'uppercase', fontSize: '12px'}} onChange={(e) => this.handlecustomerMailID(e.target.value)} className="form-control"/>
				  	    	</div>
				  	    	&nbsp;&nbsp;&nbsp;
				  	    	<div class="col-sm-4">
				  	    	<Button style={{backgroundColor: '#0066a1',borderColor: '#0066a1'}} onClick={() => this.callNext('startHere')}>Next</Button>
				  	    	</div>
			  		        </div>
			  	        </Collapsible>
			  	     </div>
		  	    <div class="col-sm-12">
		  	    <Collapsible trigger="Personal Information" open={this.state.personalInfo} onTriggerOpening={() => this.callNext('startHere')} onTriggerClosing={() => this.callCloseTrigger('personalInfo')} >
				  	  <div class="row">
			  	    		<div class="col-sm-2">First Name:</div>
			  	    		<div class="col-sm-2">
			  	    			<input value={this.state.quoteInformation.firstName} style={{height:'10px', textTransform: 'uppercase', fontSize: '12px'}} onChange={(e) => this.handlecustomerfirstName(e.target.value)} className="form-control"/>
	  	    				</div>
		  	    			<div class="col-sm-2">Last Name:</div>
		  	    			<div class="col-sm-2">
		  	    				<input value={this.state.quoteInformation.lastName} style={{height:'10px', textTransform: 'uppercase', fontSize: '12px'}} onChange={(e) => this.handlecustomerlastName(e.target.value)} className="form-control"/>
  	    					</div>
				        </div>
				        &nbsp;&nbsp;&nbsp;
				        <div class="row">
			  	    		<div class="col-sm-2">Date of Birth:</div>
			  	    		<div class="col-sm-2">
			  	    		<input value={this.state.quoteInformation.dateOfBirth} style={{height:'10px', textTransform: 'uppercase', fontSize: '12px'}} onChange={(e) => this.handleDateChange(e.target.value)} className="form-control"/>		
	  	    				</div>
			  	    		<div class="col-sm-2">Sex:</div>
			  	    		<div class="col-sm-2">
			  	    		<input value={this.state.quoteInformation.genderSelection} style={{height:'10px', textTransform: 'uppercase', fontSize: '12px'}} onChange={(e) => this.handleChangeGender(e.target.value)} className="form-control"/>		
	  	    				</div>
	  	    			</div>
	  	    			&nbsp;&nbsp;&nbsp;
	  	    			<div class="row">
	  	    			<div class="col-sm-4">
			  	    	<Button style={{backgroundColor: '#0066a1',borderColor: '#0066a1'}} onClick={() => this.callNext('personalInfo')}>Next</Button>
			  	    	</div>
	  	    			</div>
	          </Collapsible>
		          <Collapsible trigger="Vehicle Information" open={this.state.vehicleInfo} onTriggerOpening={() => this.callNext('personalInfo')} onTriggerClosing={() => this.callCloseTrigger('vehicleInfo')}>
		          <div class="row">
	  	    		<div class="col-sm-2">Enter VIN number:</div>
	  	    		<div class="col-sm-4">
	  	    			<input value={this.state.quoteInformation.vin} style={{height:'10px', textTransform: 'uppercase', fontSize: '12px'}} onChange={(e) => this.handlevin(e.target.value)} className="form-control"/>
  				</div>
	  	    			&nbsp;&nbsp;&nbsp;
	    			<div class="col-sm-2">
	    			<Button style={{backgroundColor: '#0066a1',borderColor: '#0066a1'}} onClick={() => this.searchVin()}>Search VIN</Button>
					</div>
		        </div>
		        &nbsp;&nbsp;&nbsp;
		          <div class="row">
	  	    		<div class="col-sm-2">Vehicle Make:</div>
	  	    		<div class="col-sm-3">
	  	    			<input value={this.state.quoteInformation.make} style={{height:'10px', textTransform: 'uppercase', fontSize: '12px'}} onChange={(e) => this.handlemake(e.target.value)} className="form-control"/>
    				</div>
	    			<div class="col-sm-2">Model Year:</div>
	    			<div class="col-sm-4">
	    				<input value={this.state.quoteInformation.modelYear} style={{height:'10px', textTransform: 'uppercase', fontSize: '12px'}} onChange={(e) => this.handlemodelYear(e.target.value)} className="form-control"/>
					</div>
		        </div>
		        &nbsp;&nbsp;&nbsp;
		        <div class="row">
	  	    		<div class="col-sm-2">Model:</div>
	  	    		<div class="col-sm-3">
	  	    		<input value={this.state.quoteInformation.manufacturer} style={{height:'10px', textTransform: 'uppercase', fontSize: '12px'}} onChange={(e) => this.handlemanufacturer(e.target.value)} className="form-control"/>		
    				</div>
	  	    		<div class="col-sm-2">Vehicle Type:</div>
	  	    		<div class="col-sm-4">
	  	    		<input value={this.state.quoteInformation.vehicleType} style={{height:'10px', textTransform: 'uppercase', fontSize: '12px'}} onChange={(e) => this.handlevehicleType(e.target.value)} className="form-control"/>		
    				</div>
    			</div>
    			&nbsp;&nbsp;&nbsp;
	    			<div class="row">
	    			<div class="col-sm-12">
	    			<Button style={{backgroundColor: '#0066a1',borderColor: '#0066a1'}} onClick={() => this.callNext('vehicleInfo')}>Next</Button>
	    			</div>
	    			<div class="col-sm-12">
	    			<span style={{fontSize:'10px',fontStyle:'italic'}}>***VIN number retrieved from NHTSA site -- This is free REST API('https://vpic.nhtsa.dot.gov/api') publicly available in USA to know the VIN and recall details of the VIN number.<br/></span>
	  	    	</div>
	    			</div>
		          </Collapsible>
		      </div>
		      <div class="col-sm-12">
		      <Collapsible trigger="Additional Information" open={this.state.addInfo} onTriggerOpening={() => this.callNext('vehicleInfo')} onTriggerClosing={() => this.callCloseTrigger('addInfo')}>
		      <div class="row">
	    		<div class="col-sm-2">Driving License:</div>
	    		<div class="col-sm-4">
	    		<input value={this.state.quoteInformation.drivingLicense} style={{height:'10px', textTransform: 'uppercase', fontSize: '12px'}} onChange={(e) => this.handledrivingLicense(e.target.value)} className="form-control"/>		
				</div>
	    		</div>
	    		&nbsp;&nbsp;&nbsp;
		          <div class="row">
	    			<div class="col-sm-4">
	  	    	<Button style={{backgroundColor: '#0066a1',borderColor: '#0066a1'}} onClick={() => this.callNext('finalQuote')}>Get Final Quote</Button>
	  	    	</div>
	    			</div>
		      </Collapsible>
		      <Collapsible trigger="Final Quote" open={this.state.finalQuote} onTriggerOpening={() => this.callNext('addInfo')} onTriggerClosing={() => this.callCloseTrigger('finalQuote')}>
		    
		      <div class="row">
		      	<div class="col-sm-12"><span style={{fontWeight:'700'}}>Your savings are here !!!</span></div>
	    		<div class="col-sm-12">Original Quote Amount: <span style={{fontWeight:'700'}}>{this.state.quoteInformation.originalQuoteAmount}</span></div>
	    		<div class="col-sm-12">Discount: <span style={{fontWeight:'700'}}>{this.state.quoteInformation.discounts}</span></div>
	    		<div class="col-sm-12">Your Final Quote Amount: <span style={{fontWeight:'900'}}>{this.state.quoteInformation.finalQuoteAmount}</span></div>
	    		<br/><br/>
	    		<div class="col-sm-12">Factors contributed to your savings: {this.state.quoteInformation.factorsConsidered}<br/><span style={{fontSize:'10px',fontStyle:'italic'}}><br/>***Final amount derived based on information available in DMV -- This is REST API call to DMV(Mocked the response in the backend as original API will cost and security restriction)<br/></span></div>
	    		<div class="col-sm-12"><span style={{fontWeight:'500',fontSize:'10px',fontStyle:'italics'}}>***Your quote will expire on {this.state.quoteInformation.expiryDate}</span></div>
	    		
	    		<div class="col-sm-12"><span style={{fontWeight:'700'}}>Thanks for showing interest in Galacticos Insurance Company!</span></div>
	    	</div>
	          &nbsp;&nbsp;&nbsp;
	      </Collapsible>
		  </div>
		  	    </div>
		  	 
	 </div>
  	    }
      </Container>
    </Wrapper>
    <ChatApp/>
      </div>
    );
  }
}