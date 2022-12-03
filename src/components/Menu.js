import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Menu() {
    return (
  <>
  <Navbar variant="dark" className="py-3" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Agence Immo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
          
          </Nav>
          <Nav className="d-flex align-item-center">
            <Nav.Link className="text-center mx-2" href="#action1">Home</Nav.Link>
            <Nav.Link className="text-center mx-2" href="#action2">Features</Nav.Link>
            <Nav.Link className="text-center mx-2" href="#action3">Services</Nav.Link>
            <Nav.Link className="text-center mx-2" href="#action4">About Us</Nav.Link>
            {/* <Nav.Link className="text-center mx-2" href="#action5">Contact Us</Nav.Link> */}
            <Button className="text-center mx-2" variant="warning">Contact Us</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
    );
  }
  
  export default Menu;
  