import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import '../Containers/App.css';
import { Form, Button } from "react-bootstrap";
class Adminlogin extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Adminemail:'',
      Adminpassword:''
    }
  }
  onEmailChange = ( event ) => {
    this.setState( { Adminemail : event.target.value } )
  }
  onPasswordChange = ( event ) => {
    this.setState( { Adminpassword : event.target.value } )
  }
  onSubmitAdminLogin = () => {
    fetch('https://fast-inlet-83214.herokuapp.com/https://guarded-thicket-05723.herokuapp.com/Adminlogin',{
      method: 'post',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(
      {
         email:this.state.Adminemail,
         password:this.state.Adminpassword
      })
    }).then(res =>  res.json())
      .then(data => {
        if(data === 'welcomeadmin')
          {
            this.props.onAdminRoute('AdminLogin');
          }
        else
          {
            this.props.onRouteChange('AdminLogin');
            alert('Admin credentials are not correct,please check')
          } 

      })
  }
  render(){
    const {onRouteChange} =this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Admin Login Panel </h1>
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Label> Admin Email address</Form.Label>
              <Form.Control type="email" 
                            placeholder="Enter email" 
                            onChange ={this.onEmailChange}
                            />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Admin Password</Form.Label>
              <Form.Control type="password" 
                            placeholder="Password" 
                            onChange ={this.onPasswordChange}
                            />
            </Form.Group>
          </Form>
            <Button variant="primary" onClick= {this.onSubmitAdminLogin}>LOG IN</Button>
            <br/>
            <div> <a href="#home" onClick= {() => onRouteChange('Login')}>User Login</a></div>
  
        </header>
      </div>
    );
  }
}

export default Adminlogin;
