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
import Tracking from './Tracking';

import {BrowserRouter, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Body/>
       <Tracking/>
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