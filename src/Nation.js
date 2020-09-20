import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';




class Nation extends Component {
  render() {
    return (
      <div>
           <div className="container-fluid Nation">
              <div className="row">
                  <div className="col-4 nation">
                     <img src="https://kxpress.ng/img/group-7-copy.svg" alt="deliver"/>
                  </div>
                  <div className="col-sm-3 body" >
                      <h3>Nationwide Delivery</h3>
                      <p>We provide logistics services where we deliver to all customers in any location across the country.</p>
                      <Button className="btn-light">Sign up Nows</Button>
                  </div>
              </div>
             
          </div>
      </div>
    );
  }
}

export default Nation;