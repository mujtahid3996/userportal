import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import '../Containers/App.css';
import { Form, Button } from "react-bootstrap";
function Adminlogin({ onRouteChange }) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Admin Login Panel </h1>
        <Form>
          <Form.Group controlId="formGroupEmail">
            <Form.Label> Admin Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Admin Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form>
          <Button variant="primary">LOG IN</Button>
          <br/>
          <div> <a href="#home" onClick= {() => onRouteChange('Login')}>User Login</a></div>

      </header>
    </div>
  );
}

export default Adminlogin;
