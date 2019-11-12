import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Card } from "react-bootstrap";
class  Profilepage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userprofile:this.props.userprofile
    }
  }
  render(){
    return (
      <div >
        <Card style={{ width: '18rem' }}>
          <Card.Body>
          <Card.Title style={{textAlign: 'center' }}>
              User Profile
          </Card.Title>
          <Card.Text>Fisrtname:{this.state.userprofile.firstname} </Card.Text>
          <Card.Text> LastName:{this.state.userprofile.lastname}</Card.Text>
          <Card.Text>Email:{this.state.userprofile.email}</Card.Text>
          <Card.Text>Phone:{this.state.userprofile.phone}</Card.Text>
          <Card.Text>Birthday:{this.state.userprofile.birthday}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Profilepage;
