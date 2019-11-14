import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import '../Containers/App.css'
class Adminpage extends React.Component {
    constructor(){
        super();
        this.state = {
            email:'admin@localhost.local',
            userlist:[],
            searchfield:'',
            filterdusers:[]
        }
    }
   
    componentDidMount() {
        fetch('http://localhost:3000/getusers',{
            method:'post',
            headers: {
                'Content-Type' : 'application/json'
              },
            body:JSON.stringify({
                email:this.state.email
            })
        })
          .then(response => response.json())
          .then(users => {
              this.setState({ userlist: users,
                              filterdusers:  users
            })
        });
      }
      onSearchChange =  (event) => {
        this.setState({ searchfield: event.target.value, 
                        filterdusers:this.state.userlist.filter(user =>{
                            return user.firstname.toLowerCase().includes(this.state.searchfield.toLowerCase())
                        })
        })  
        
    }
      rendertabledata = (filtereduser) => {
          return filtereduser.map((user,index) => {
            const {firstname,phone,email,address} = user
            return (
                <tr key ={email}>
                    <td colSpan="15">{firstname}</td>
                    <td colSpan="15">{phone}</td>
                    <td colSpan="15">{email}</td>
                    <td colSpan="15">{address}</td>
                </tr>
            )
          }
          )  
      }
    
    render() {
       return (
            <div >
                <header>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Navbar.Brand href="#home">Userlist</Navbar.Brand>
                                <Form inline onChange = { this.onSearchChange }>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-success" >Search</Button>
                                </Form>
                            </Nav>
                            <Nav className="mr-right">
                                <NavDropdown title="Logged as Admin" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.2" onClick={() => window.location.reload()}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </header>
                <div className="App">
                    <header className="App-header">
                        <table>
                            <tbody>
                                {this.rendertabledata(this.state.filterdusers)}
                            </tbody>
                        </table>
                    </header>
                </div>
            </div>

        );

    }
}
export default Adminpage;