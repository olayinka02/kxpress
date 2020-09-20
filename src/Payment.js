import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';




class Payment extends Component {
  render() {
    return (
      <div>
           <div className="container-fluid Nation">
              <div className="row">
                  <div className="col-sm-3 body">
                  <h3>Payment on Delivery</h3>
                      <p>We provide a service where we collect payment on delivery in Lagos, Abuja and Portharcourt. If the goods are not paid for, they are returned to the shipper.</p>
                      <Button className="btn-light">Sign up Nows</Button>
                  </div>
                 
                  <div className="col-4 body" >
                      
                      <img src="https://kxpress.ng/img/group-8.svg" alt="deliver" />
                  </div>
              </div>
             
          </div>
      </div>
    );
  }
}

export default Payment;