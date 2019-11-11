import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import '../Containers/App.css';
import { Form, Button, Row, Col  } from "react-bootstrap";
function Registration({ onRouteChange }) {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Registration</h1>
                <br/>
                <Form>
                    <Form.Group controlId="formGroupfistname">
                       <Row> 
                         <Col>  
                        <Form.Label>First Name</Form.Label>
                        </Col>
                        <Col>
                        <Form.Control type="text" placeholder="Enter firstname" />
                        </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group controlId="formGroupLastname">
                       <Row>
                        <Col><Form.Label>lastname</Form.Label></Col>
                        <Col><Form.Control type="text" placeholder="Password" /></Col>
                       </Row> 
                    </Form.Group>
                    <Form.Group controlId="formGroupAddress">
                       <Row>
                        <Col><Form.Label>Address</Form.Label></Col>
                        <Col><Form.Control type="textarea" placeholder="Address" /></Col>
                       </Row> 
                    </Form.Group>
                    <Form.Group controlId="formGroupPhone">
                       <Row>
                        <Col><Form.Label>Phone</Form.Label></Col>
                        <Col><Form.Control type="Phone" placeholder="Phone" /></Col>
                       </Row> 
                    </Form.Group>
                    <Form.Group controlId="formGroupDate">
                       <Row>
                        <Col><Form.Label>Birthdate</Form.Label></Col>
                        <Col><Form.Control type="date" placeholder="date" /></Col>
                       </Row> 
                    </Form.Group>
                    <Form.Group controlId="formGroupDate">
                       <Row>
                        <Col ><Form.Label>Password</Form.Label></Col>
                        <Col><Form.Control type="password" placeholder="password" /></Col>
                       </Row> 
                    </Form.Group>
                    <Row>
                        <Col>
                            <Button variant="primary" type="submit">
                                Register
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="primary" type="submit" onClick={ ()=> onRouteChange('Login')}>
                                Cancel
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </header>
        </div>
    );
}

export default Registration;
