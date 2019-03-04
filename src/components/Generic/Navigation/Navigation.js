import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import React, { Component } from 'react'

export default class Navigation extends Component {
    
    render() {
        return (
            < Navbar className = "nav" variant = "dark" sticky = "top" >
                <Navbar.Brand href="#home">Golden Shoe</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#home">About</Nav.Link>
                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Mens</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Womens</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Children</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#home">Contact</Nav.Link>
                </Nav>
              
                <Form inline>
                    <FormControl type="text" placeholder="Search Shoes" className="mr-sm-2" />
                    <Button >Search</Button>
                </Form>
                <Nav.Link className="my-account-link">My Account</Nav.Link>
                <Nav.Link className="my-account-link">Cart</Nav.Link>
            </Navbar >
        )
    }
}
