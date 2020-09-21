import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Button from 'react-bootstrap/Button';
import icon1 from './image/icon1.png';




class nav extends Component {
  render() {
    return (
      <div>
          
          <Navbar expand="lg bg-deep icon"  >
            <Navbar.Brand> <img src="https://kxpress.ng/img/group-38.svg" alt="img"/></Navbar.Brand>
           
            <Navbar.Collapse id="basic-navbar-nav">
               
                <Nav className="mr-auto nav ">
                <Nav.Link href="#home"></Nav.Link>
                <Nav.Link href="#link">Shippinng calculator</Nav.Link>
                <Nav.Link href="#link">Our Services</Nav.Link>
                <Nav.Link href="#link">Api Integration</Nav.Link>
                <Nav.Link href="#link">Our Location</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Button  variant="secondary" size="sm">Sign up Nows</Button>
                <Button  variant="secondary" size="sm" >Sign in</Button>
           <Navbar.Brand className="brand">  <Nav.Link href="#home"><img  src={icon1} alt="img"/>
            </Nav.Link></Navbar.Brand> 
            </Navbar>
            </div>    
        
      
    );
  }
}

export default nav;
 


