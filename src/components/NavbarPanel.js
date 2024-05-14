import React from 'react'
import { NavbarCollapse } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const NavbarPanel = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
      <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link to='/' as={Link} >Products</Nav.Link>
        </Nav>
        <Navbar.Toggle/>
        <Navbar.Collapse></Navbar.Collapse>
      
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarPanel