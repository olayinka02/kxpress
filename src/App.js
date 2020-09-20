import React, { Component } from 'react';

import Nav from './Nav';
import Body from './Body';
import Calculator from './Calculator';
import Location from './Location';
import Delivery from './Delivery';
import Nation from './Nation';
import Payment from './Payment';
import Reverse from './Reverse';
import Footer from './Footer';
import {BrowserRouter, Route} from 'react-router-dom';
import { InputGroup,FormControl } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Body/>
           
        <center>
                <InputGroup className="mb-2 mr-sm-2 " style={{width:300,boxShadow:'black',top:23,}}>
            <InputGroup.Prepend >
            <InputGroup.Text>?</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl placeholder="Enter Tracking Number" />
        </InputGroup>
       
        </center>

        <Calculator/>
        <Location/>
        <Delivery/>
        <Nation/>
        <Payment/>
        <Reverse/>
        
        <BrowserRouter>
      
      <Route>
      <Route path='/' exact component={Footer}/>
      </Route>
      </BrowserRouter>

      </div>
    );
  }
}

export default App;