import '../App.css';
import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Response = (props) => {
  /* Props: */
  return (
  <Row className="response">
    <Col md={3} xs={4}>
      <p> <strong>Prompt:</strong> </p>
      <p> <strong>Response:</strong> </p>
    </Col>
    <Col md={9} xs={8}>
      <p> Result </p>
      <p> Result </p>
    </Col>
  </Row>
  )

}

const Responses = () => {

  return (
      <Col xs={12}>
        <div className="responses-wrapper">
          <Row className="responses">
            <h3> Responses </h3>
            <Response/>
            <Response/>

          </Row>
        </div>
      </Col>

  );
}

export default Responses;
