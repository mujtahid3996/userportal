import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import '../App.css';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
function Profile() {
    return (
        <div >
            <header >
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Nevigation</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Profilepage</Nav.Link>
                            <Nav.Link href="#pricing">Changepassword</Nav.Link>
                        </Nav>
                        <Nav className="mr-right">
                            <NavDropdown title="Username" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
            <div>
                User Profile
            </div>
        </div>

    );
}
export default Profile;