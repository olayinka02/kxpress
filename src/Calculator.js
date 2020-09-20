import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';



class Calulator extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid calculator">
           
          
            <div className="row">
              <div className="calc col"> 
              <center>
                <h3>Shipping Calculator</h3>
                <p>Using state and LGA details provided by the customer to show the shipping rates and estimates saves you and your customers valuable time.</p>
                </center>
              </div>
              </div>
              <div className="row">
                  <div className="col-6-lg calculator1">
                  <Form>
                      <option>From</option>
                    <Row>
                        <Col>
                        <Form.Control placeholder="First name" />
                        
                        </Col>
                        <Col>
                        <Form.Control placeholder="Last name" />
                        </Col>
                        </Row>

                        <Row>
                          <Col className="m my-3">
                            <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>To</Form.Label>
                            <Form.Control as="select" custom>
                            <option value="Abia">
                                                Abia
                                            </option>
                                            
                                            <option value="Abuja">
                                                Abuja
                                            </option>
                                            
                                            <option value="Adamawa">
                                                Adamawa
                                            </option>
                                            
                                            <option value="Akwa Ibom">
                                                Akwa Ibom
                                            </option>
                                            
                                            <option value="Anambra">
                                                Anambra
                                            </option>
                                            
                                            <option value="Bauchi">
                                                Bauchi
                                            </option>
                                            
                                            <option value="Bayelsa">
                                                Bayelsa
                                            </option>
                                            
                                            <option value="Benue">
                                                Benue
                                            </option>
                                            
                                            <option value="Borno">
                                                Borno
                                            </option>
                                            
                                            <option value="Cross River">
                                                Cross River
                                            </option>
                                            
                                            <option value="Delta">
                                                Delta
                                            </option>
                                            
                                            <option value="Ebonyi">
                                                Ebonyi
                                            </option>
                                            
                                            <option value="Edo">
                                                Edo
                                            </option>
                                            
                                            <option value="Ekiti">
                                                Ekiti
                                            </option>
                                            
                                            <option value="Enugu">
                                                Enugu
                                            </option>
                                            
                                            <option value="Gombe">
                                                Gombe
                                            </option>
                                            
                                            <option value="Imo">
                                                Imo
                                            </option>
                                            
                                            <option value="Jigawa">
                                                Jigawa
                                            </option>
                                            
                                            <option value="Kaduna">
                                                Kaduna
                                            </option>
                                            
                                            <option value="Kano">
                                                Kano
                                            </option>
                                            
                                            <option value="Katsina">
                                                Katsina
                                            </option>
                                            
                                            <option value='Kebbi'>
                                                Kebbi
                                            </option>
                                            
                                            <option value='Kogi'>
                                                Kogi
                                            </option>
                                            
                                            <option value='Kwara'>
                                                Kwara
                                            </option>
                                            
                                            <option value='Lagos'>
                                                Lagos
                                            </option>
                                            
                                            <option value='Nasarawa'>
                                                Nasarawa
                                            </option>
                                            
                                            <option value='Niger'>
                                                Niger
                                            </option>
                                            
                                            <option value='Ogun'>
                                                Ogun
                                            </option>
                                            
                                            <option value='Ondo'>
                                                Ondo
                                            </option>
                                            
                                            <option value='Osun'>
                                                Osun
                                            </option>
                                            
                                            <option value='Oyo'>
                                                Oyo
                                            </option>
                                            
                                            <option value='Plateau'>
                                                Plateau
                                            </option>
                                            
                                            <option value='Rivers'>
                                                Rivers
                                            </option>
                                            
                                            <option value='Sokoto'>
                                                Sokoto
                                            </option>
                                            
                                            <option value='Taraba'>
                                                Taraba
                                            </option>
                                            
                                            <option value='Yobe'>
                                                Yobe
                                            </option>
                                            
                                            <option value="Zamfara">
                                                Zamfara
                                          </option>
                            </Form.Control>
                          </Form.Group>
                          </Col> 
                                          <Col className="m my-5">
                                        
                                          <Form.Control as="select" custom>
                                              <option value="Abia">
                                                  Abia
                                                </option>
                                            </Form.Control>
                                        </Col>
                         </Row>
                          
                           
                        <Row  >
                            <Col >
                            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                            <Form.Label>Weight(Kg) </Form.Label><br/>
                          
                                        <input type="number" class="from-select" placeholder="0.000" name="weight"
                                            min="0.001" max="70" required />
                           
                          </Form.Group>
                            </Col>
                            
                            <Col className="m my-3"> 
                            <Button variant="success" type="submit"> Calculate Rate </Button>
                            </Col>
                            </Row>
                   
                    </Form>

                      
                  </div>
                  <div className="col-6-lg calculator2 ">
                      <h1> ₦0.00</h1>
                      <p>Estimated Shipping Fee</p>
                      <div className="alert alert-danger" role="alert">
                          <img src="https://kxpress.ng/img/caution-1.svg" alt="warning"/> <p>Note: The above is an estimate, actual charges may vary</p></div>
                      </div>
                  </div>
                  
              </div>
             
          </div>
      
    );
  }
}

export default Calulator;