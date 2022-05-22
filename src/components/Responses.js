import '../App.css';
import React, {useState} from 'react';
/* Bootstrap Components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const axios = require('axios');


const Response = (props) => {
  /* props: 
  prompt: str 
    Prompt entered by the user.

  response: str 
    OpenAI's completion API response to the user's prompt.

  key: int
    Index of the response.
  
  */
    console.log(props)
    console.log("inside response")

  return (
  <Row className="response">
    <Col md={3} xs={4}>
      <p> <strong>Prompt: </strong> </p>
      <p> <strong>Response: </strong> </p>
    </Col>
    <Col md={9} xs={8}>
      <p> {props.prompt} </p>
      <p> {props.response} </p>
    </Col>
  </Row>
  )

}

const Responses = (props) => {
  /* props:

  responses: list
    Listed fill with objects of responses from the OpenAI completiosn API.
  */

  return (
      <Col xs={12}>
        <div className="responses-wrapper">
          <Row className="responses">
            <h3> Responses </h3>
            {props.responses.map((res, idx) => (
              <Response prompt={res.prompt} response={res.response} key={idx}/>
            ))}

          </Row>
        </div>
      </Col>

  );
}

export default Responses;
