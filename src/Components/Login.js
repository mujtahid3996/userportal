import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import '../App.css';
import { Form, Button } from "react-bootstrap";
const  Login = ( { onemailchange , onpasswordchange } ) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Login Panel </h1>
        <Form>
          <Form.Group controlId="formGroupEmail" >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange = { onemailchange }/>
          </Form.Group>
          <Form.Group controlId="formGroupPassword" >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange = { onpasswordchange }  />
          </Form.Group>
        </Form>
          <Button variant="primary">LOG IN</Button>
      </header>
    </div>
  );
}

export default Login;
