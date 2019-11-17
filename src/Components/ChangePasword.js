import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import '../Containers/App.css';
import { Form, Button, Row, Col } from "react-bootstrap";
class ChangePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userprofile: this.props.userprofile,
      email:this.props.userprofile.email,
      oldpassword:'',
      newpassword: ''
    }
  }
  onOldPasswordChange = ( event ) => {
    this.setState( { oldpassword : event.target.value } )
  }
  onNewPasswordChange = ( event ) => {
    this.setState( { newpassword : event.target.value } )
  }
  onSubmitpasswordChange = () => {
    fetch('https://guarded-thicket-05723.herokuapp.com/Changepassword',{
      method: 'post',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(
      {
         email:this.state.email,
         oldpassword:this.state.oldpassword,
         newpassword:this.state.newpassword
      })
    }).then( res =>  res.json())
      .then(data => {
        if(data === 'Changedsuccessfully')
          alert('password changed successfully',true);
        else
          alert('oops maybe something went wrong please try again')
      })
      ;

  }

  render() {
    return (
      <div className="App">
        <header className="App-header" >
          <h1>Change password </h1>
          <br />
          <Form>
            <Row>
              <Form.Group controlId="formGroupprevpassword">
                <Col><Form.Label>Previous password:</Form.Label></Col>
                <Col><Form.Control type="password" 
                                   placeholder="Enter previous password" 
                                   onChange ={this.onOldPasswordChange}
                                   /> </Col>
              </Form.Group>
            </Row>
            <Form.Group controlId="formGroupcurrentPassword">
              <Form.Label>New Password:</Form.Label>
              <Form.Control type="password" 
                            placeholder="Password" 
                            onChange ={this.onNewPasswordChange}
                            />
            </Form.Group>
            <Form.Group controlId="formGroupretypecurrentPassword">
              <Form.Label>Confirm Password:</Form.Label>
              <Form.Control type="password" 
                            placeholder="Password"
                            onChange ={this.onNewPasswordChange} 
                            />
            </Form.Group>
          </Form>
          <Row>
            <Col>
              <Button variant="primary" onClick = {this.onSubmitpasswordChange}>ChangePassword</Button>
            </Col>
            <Col>
              <Button variant="primary" onClick= {window.caches.delete()}>Clear</Button>
            </Col>
          </Row>
        </header>
      </div>
    );
  }
}

export default ChangePassword;
