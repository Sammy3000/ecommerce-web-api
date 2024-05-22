import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const NavbarPanel = () => {

  const {cart} = useSelector((store)=>store.cart)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    < Container fluid>
      <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
       <Nav>
          <Nav.Link to='/' as={Link} >Products</Nav.Link>
        </Nav>
        <Navbar.Toggle/>
        <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>
            <Nav.Link to='/Cart' as={Link} >0</Nav.Link>
            </Navbar.Text>
        </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarPanel