import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import '../Containers/App.css';
import { Form, Button } from "react-bootstrap";
const  Login = (  { onRouteChange } ) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Login Panel </h1>
        <Form>
          <Form.Group controlId="formGroupEmail" >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword" >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"  />
          </Form.Group>
        </Form>
          <Button variant="primary" onClick= {() => onRouteChange('Login')}>LOG IN</Button>
          <br/>
          <div> <a href="#home" onClick= {() => onRouteChange('Registration')}>New here?Register</a></div>
          <br/>
          <div> <a href="#home" onClick= {() => onRouteChange('AdminLogin')}>AdminLoginHere</a></div>
      </header>
    </div>
  );
}

export default Login;
