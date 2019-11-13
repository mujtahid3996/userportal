import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Nav , NavDropdown , Navbar } from "react-bootstrap";
function Navigation({onRouteChange}) {
  return (
    <div>
    <header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>Nevigation</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#" onClick = {()=>onRouteChange('Userprofile')}>Profilepage</Nav.Link>
                    <Nav.Link href="#" onClick ={() =>onRouteChange('Changepassword')} >Changepassword</Nav.Link>
                </Nav>
                <Nav className="mr-right">
                    <NavDropdown title="Username" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.2" onClick = {() => window.location.reload()}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </header>         
    </div>
    
  );
}

export default Navigation;
