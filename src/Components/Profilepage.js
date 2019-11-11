import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Card } from "react-bootstrap";
const  Profilepage = () => {
  return (
    <div >
      <Card style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Title style={{textAlign: 'center' }}>
            User Profile
        </Card.Title>
        <Card.Text>Fisrtname:</Card.Text>
        <Card.Text> LastName:</Card.Text>
        <Card.Text>Email:</Card.Text>
        <Card.Text>Phone:</Card.Text>
        <Card.Text>Birthday:</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Profilepage;
