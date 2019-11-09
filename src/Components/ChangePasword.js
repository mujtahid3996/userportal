import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import '../App.css';
import { Form, Button,Row,Col } from "react-bootstrap";
function ChangePassword() {
  return (
    <div className="App">
      <header className="App-header" >
        <h1>Change password </h1>
        <br/>
        <Form>
        <Row>
          <Form.Group controlId="formGroupprevpassword">
            <Col><Form.Label>Previous password:</Form.Label></Col>
            <Col><Form.Control type="password" placeholder="Enter previous password" /> </Col>
          </Form.Group>
        </Row>
          <Form.Group controlId="formGroupcurrentPassword">
            <Form.Label>New Password:</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formGroupretypecurrentPassword">
            <Form.Label>Confirm Password:</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form>
          <Row>
            <Col>
                <Button variant="primary">ChangePassword</Button>
            </Col>
            <Col>
            <Button variant="primary">Clear</Button>
            </Col>
          </Row>
      </header>
    </div>
  );
}

export default ChangePassword;
