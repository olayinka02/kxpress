import React, { Component } from 'react';




class Delivery extends Component {
  render() {
    return (
      <div>
            <div className="container-fluid delivery">
                <div className="row">
                <div className="delivery1 col"> 
                     <center>
                    <h4>Delivery Solutions for Online Retailers</h4>
                    <p>Quickly integrate powerful solutions that gives you more flexibility and control over your parcel shipping and logistics processes.</p>
                    </center>
                </div>
                </div>
            <div className="container">
              <div className="row images">
                  <div className="col-sm-4 ">
                  <center>
                      <img src="https://kxpress.ng/img/online-shop-2.svg" alt="api"/>
                     
                    <h5>Online Integration</h5>
                    <p>We offer user-friendly API solutions which provides our clients with an extensive range of built-in features for effective integration.</p>
                    </center>
                  </div>
                  
                  
                  <div className="col-sm-4 ">
                  <center>
                        <img src="https://kxpress.ng/img/online-store-1.svg" alt= "api"/>
                        <h5>Order Fulfilment</h5>
                        <p>At Kxpress Logistics, we offer sophisticated logistics services to help manage your entire supply chain process for your E-commerce business, both B2C and B2B.</p>
                 </center>
                  </div>
                  <div className="col-sm-4 ">
                  <center>
                        <img src="https://kxpress.ng/img/delivery-truck-2.svg" alt="api"/>
                        <h5>Nationalwide Delivery</h5>
                        <p>Kxpress Logistics offers effective and prompt door-door delivery across the nation</p>
                 </center>
                  </div>
              </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Delivery;