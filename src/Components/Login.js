import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import '../Containers/App.css';
import { Form, Button } from "react-bootstrap";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password : '' 
    }
  }
  onEmailChange = ( event ) => {
    this.setState( { email : event.target.value } )
  }
  onPasswordChange = ( event ) => {
    this.setState( { password : event.target.value } )
  }
  onSubmitSignin = () => {
    fetch('https://guarded-thicket-05723.herokuapp.com/Signin',{
      method: 'post',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(
      {
         email:this.state.email,
         password:this.state.password
      })
    }).then(res =>  res.json())
      .then(user => {
        if(user.email=== this.state.email)
            {
              this.props.onLoadUser(user);
              this.props.onUserRoute('Login');
            }
        else
            this.props.onRouteChange('Login');
      })
    ;
  }
  render() {
    const { onRouteChange } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Login Panel </h1>
          <Form>
            <Form.Group controlId="formGroupEmail" >
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                          type="email" 
                          placeholder="Enter email" 
                          onChange =  { this.onEmailChange }  
                          />
            </Form.Group>
            <Form.Group controlId="formGroupPassword" >
              <Form.Label>Password</Form.Label>
              <Form.Control 
                          type="password" 
                          placeholder="Password"
                          onChange = { this.onPasswordChange }
                          />
            </Form.Group>
          </Form>
            <Button variant="primary" onClick= { this.onSubmitSignin }>LOG IN</Button>
            <br/>
            <div> <a href="#home" onClick= {() => onRouteChange('Registration')}>New here?Register</a></div>
            <br/>
            <div> <a href="#home" onClick= {() => onRouteChange('AdminLogin')}>AdminLoginHere</a></div>
        </header>
      </div>
    );
  }
}

export default Login;
