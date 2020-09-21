import React, { Component } from 'react';

import { InputGroup,FormControl } from 'react-bootstrap';





class Tracking extends Component {
  render() {
    return (
      <div>
           <center>
            <InputGroup className="mb-2 mr-sm-2 " style={{width:300,boxShadow:'black',top:23,}}>
            <InputGroup.Prepend >
            <InputGroup.Text>?</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl placeholder="Enter Tracking Number" />
        </InputGroup>
        </center>
      </div>
    );
  }
}

export default Tracking;