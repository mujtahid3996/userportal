import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import '../Containers/App.css';
import { Form, Button, Row, Col  } from "react-bootstrap";
class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email : '',
          firstname: '',
          lastname:'',
          password: '',
          date:'',
          address: '',
          phone:''
        }
      }
      onEmailChange = ( event ) => {
        this.setState( { email : event.target.value } )
      }
      onPasswordChange = ( event ) => {
        this.setState( { password : event.target.value } )
      }
      onFirstnameChange = ( event ) => {
        this.setState( { firstname : event.target.value } )
      }
      onLastnameChange = ( event ) => {
        this.setState( { lastname : event.target.value } )
      }
      onAddressChange = ( event ) => {
        this.setState( { address : event.target.value } )
      }
      onPhoneChange = ( event ) => {
        this.setState( { phone : event.target.value } )
      }
      onDateChange = ( event ) => {
        this.setState( { date : event.target.value})
      }
      onSubmitRegister = () =>{
        fetch('https://fast-inlet-83214.herokuapp.com/https://guarded-thicket-05723.herokuapp.com/Register',{
            method: 'post',
            headers: {
              'Content-Type' : 'application/json'
            },
            body: JSON.stringify(
            {
               email:this.state.email,
               password:this.state.password,
               firstname:this.state.firstname,
               lastname:this.state.lastname,
               address:this.state.address,
               date:this.state.date,
               phone:this.state.phone
            })
          }).then(res =>  res.json())
            .then(user => {
                if(user.email){
                  this.props.onLoadUser( user );
                  this.props.onUserRoute('Login');               
                }
                else
                  {
                    alert('may be you have entered some wrong info or blank info,please check again');
                  }    
            })
            .catch(err => {console.log(err)
            alert('may be you have entered some wrong info,please check again')
            })
      }

        render() {
            const { onRouteChange } = this.props;
            return (
                <div className="App">
                    <header className="App-header">
                        <h1>Registration</h1>
                        <br/>
                        <Form>
                            <Form.Group controlId="formGroupfistname">
                            <Row > 
                                <Col sm={6}>  
                                <Form.Label>First Name</Form.Label>
                                </Col>
                                <Col sm={6}>
                                <Form.Control 
                                    type="text"
                                    placeholder="Enter firstname" 
                                    onChange = {this.onFirstnameChange} 
                                    />
                                </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group controlId="formGroupLastname">
                            <Row>
                                <Col sm={6}><Form.Label>lastname</Form.Label></Col>
                                <Col sm={6}><Form.Control 
                                        type="text" 
                                        placeholder="lastname"
                                        onChange = {this.onLastnameChange} 
                                        />
                                </Col>
                            </Row> 
                            </Form.Group>
                            <Form.Group controlId="formGroupemail">
                            <Row>
                                <Col sm={6}><Form.Label>email</Form.Label></Col>
                                <Col sm={6}><Form.Control 
                                        type="email" 
                                        placeholder="Email"
                                        onChange = {this.onEmailChange} 
                                        />
                                </Col>
                            </Row> 
                            </Form.Group>
                            <Form.Group controlId="formGroupAddress">
                            <Row>
                                <Col sm={6}><Form.Label>Address</Form.Label></Col>
                                <Col sm={6}><Form.Control 
                                        type="textarea" 
                                        placeholder="Address"
                                        onChange = {this.onAddressChange} 
                                        />
                                </Col>
                            </Row> 
                            </Form.Group>
                            <Form.Group controlId="formGroupPhone">
                            <Row>
                                <Col sm={6}><Form.Label>Phone</Form.Label></Col>
                                <Col sm={6}><Form.Control 
                                        type="Phone" 
                                        placeholder="Phone"
                                        onChange = {this.onPhoneChange} 
                                        />
                                </Col>
                            </Row> 
                            </Form.Group>
                            <Form.Group controlId="formGroupDate">
                            <Row>
                                <Col sm={6}><Form.Label>Birthdate</Form.Label></Col>
                                <Col sm={6}><Form.Control 
                                        type="date" 
                                        placeholder="date"
                                        onChange = {this.onDateChange} 
                                        />
                                </Col>
                            </Row> 
                            </Form.Group>
                            <Form.Group controlId="formGrouppassword">
                            <Row>
                                <Col sm={6}><Form.Label>Password</Form.Label></Col>
                                <Col sm={6}><Form.Control 
                                        type="password" 
                                        placeholder="password"
                                        onChange = {this.onPasswordChange} 
                                        />
                                </Col>
                            </Row> 
                            </Form.Group>
                            <Row>
                                <Col sm={6}>
                                    <Button 
                                        variant="primary" 
                                        type="submit" 
                                        onClick ={this.onSubmitRegister}>
                                        Register
                                    </Button>
                                </Col>
                                <Col sm={6}>
                                    <Button 
                                        variant="primary" 
                                        type="submit" 
                                        onClick={ () => onRouteChange('Login')}>
                                        Cancel
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </header>
                </div>
            );
        }
    
}

export default Registration;
