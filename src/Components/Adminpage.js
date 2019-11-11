import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Navbar, Nav, NavDropdown,Form,FormControl,Button } from "react-bootstrap";
function Adminpage() {
    return (
        <div >
            <header>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Navbar.Brand href="#home">Userlist</Navbar.Brand>
                        <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                        </Form>
                    </Nav>
                        <Nav className="mr-right">
                            <NavDropdown title="Logged as Admin" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
            <div>
            </div>
        </div>

    );
}
export default Adminpage;