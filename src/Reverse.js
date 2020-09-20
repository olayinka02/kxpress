import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';




class Reverse extends Component {
  render() {
    return (
      <div>
           <div className="container-fluid Nation">
              <div className="row">
                  <div className="col-4 nation">
                     <img className="lastimage" src="https://kxpress.ng/img/group-10.svg" alt="deliver"/>
                  </div>
                  <div className="col-sm-3 body" >
                      <h3>Reverse Logistics & Returns</h3>
                      <p>We provide a service where we return all shipments to the originating location for the shipper to pick-up if unsuccessful. Shipper is contacted upon return to the location.</p>
                      <Button className="btn-light">Sign up Nows</Button>
                  </div>
              </div>
             
          </div>
      </div>
    );
  }
}

export default Reverse;